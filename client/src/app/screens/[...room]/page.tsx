"use client";
import { useSocket } from "@/app/components/SocketProvider";
import peer from "@/app/lib/peer";
import { FC, useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface RoomPageProps {}

const RoomPage: FC<RoomPageProps> = ({}) => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState<string>("");
  const [myStream, setMyStream] = useState<MediaStream | undefined>();
  const [remoteStream, setRemoteStream] = useState<MediaStream | undefined>();
  const [focused, setFocused] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);

  const handleUserJoined = useCallback(({ email, id }: { email: string; id: string }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket?.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
    startDetection(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(async ({ from, offer }: { from: string; offer: any }) => {
    setRemoteSocketId(from);
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    setMyStream(stream);
    console.log("Incoming Call", from, offer);
    const ans = await peer.getAnswer(offer);
    socket?.emit("call:accepted", { to: from, ans });
    startDetection(stream);
  }, [socket]);

  const sendStreams = useCallback(() => {
    if (myStream) {
      for (const track of myStream.getTracks()) {
        peer.peer.addTrack(track, myStream);
      }
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(({ from, ans }: { from: string; ans: any }) => {
    peer.setLocalDescription(ans);
    console.log("Call Accepted!");
    sendStreams();
  }, [sendStreams]);

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket?.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(async ({ from, offer }: { from: string; offer: any }) => {
    const ans = await peer.getAnswer(offer);
    socket?.emit("peer:nego:done", { to: from, ans });
  }, [socket]);

  const handleNegoNeedFinal = useCallback(async ({ ans }: { ans: any }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev: any) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket?.on("user:joined", handleUserJoined);
    socket?.on("incomming:call", handleIncommingCall);
    socket?.on("call:accepted", handleCallAccepted);
    socket?.on("peer:nego:needed", handleNegoNeedIncomming);
    socket?.on("peer:nego:final", handleNegoNeedFinal);
    return () => {
      socket?.off("user:joined", handleUserJoined);
      socket?.off("incomming:call", handleIncommingCall);
      socket?.off("call:accepted", handleCallAccepted);
      socket?.off("peer:nego:needed", handleNegoNeedIncomming);
      socket?.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [socket, handleUserJoined, handleIncommingCall, handleCallAccepted, handleNegoNeedIncomming, handleNegoNeedFinal]);

  const handleScreenShare = useCallback(async () => {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
    const screenTrack = screenStream.getVideoTracks()[0];

    if (myStream) {
      const videoTrack = myStream.getVideoTracks()[0];
      peer.replaceTrack(videoTrack, screenTrack, myStream);
    }

    setMyStream(screenStream);
  }, [myStream]);

  const handleToggleMute = useCallback(() => {
    if (myStream) {
      myStream.getAudioTracks()[0].enabled = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted, myStream]);

  const handleToggleCamera = useCallback(() => {
    if (myStream) {
      myStream.getVideoTracks()[0].enabled = !isCameraOn;
      setIsCameraOn(!isCameraOn);
    }
  }, [isCameraOn, myStream]);

  const handleEndCall = useCallback(() => {
    if (myStream) {
      myStream.getTracks().forEach(track => track.stop());
      setMyStream(undefined);
      setRemoteStream(undefined);
      socket?.emit("call:end", { to: remoteSocketId });
    }
  }, [myStream, remoteSocketId, socket]);

  const startDetection = (stream: MediaStream) => {
    const videoTrack = stream.getVideoTracks()[0];
    // @ts-ignore
    const imageCapture = new ImageCapture(videoTrack);

    const sendFrameToModel = async () => {
      const bitmap = await imageCapture.grabFrame();
      const canvas = document.createElement("canvas");
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(bitmap, 0, 0);
      const base64Image = canvas.toDataURL("image/jpeg");

      // Send this base64Image to your backend API for ML processing
      const response = await fetch("/api/detect-focus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64Image }),
      });

      const { focused } = await response.json();
      setFocused(focused);
    };

    setInterval(sendFrameToModel, 2000); // Send a frame every 2 seconds
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-100 text-gray-900">
  {/* Header */}
  <header className="flex justify-between items-center p-4 bg-white shadow-sm border-b border-gray-300">
    <h1 className="text-xl font-medium tracking-wide">Interview Room</h1>
    <div className="flex space-x-3">
      <button
        onClick={handleScreenShare}
        className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition duration-200 text-white text-sm font-semibold shadow-sm"
      >
        {/* <span className="material-icons align-middle">screen_share</span> */}
        <span className="ml-2 align-middle">Share Screen</span>
      </button>
      <button
        onClick={handleEndCall}
        className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition duration-200 text-white text-sm font-semibold shadow-sm"
      >
        {/* <span className="material-icons align-middle">call_end</span> */}
        <span className="ml-2 align-middle">End Call</span>
      </button>
    </div>
  </header>

  {/* Main Content */}
  <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
    {myStream && (
      <div className="relative bg-white rounded-md shadow-md border border-gray-300 overflow-hidden">
        <h2 className="absolute top-2 left-2 bg-opacity-80 bg-black text-white px-3 py-1 rounded-sm text-sm font-medium">
          My Video
        </h2>
        <ReactPlayer playing muted height="100%" width="100%" url={myStream} className="rounded-md" />
        <p className="absolute bottom-2 left-2 bg-opacity-80 bg-black text-white px-3 py-1 rounded-sm text-sm font-medium">
          {focused ? "You are focused" : "You seem distracted"}
        </p>
      </div>
    )}
    {remoteStream && (
      <div className="relative bg-white rounded-md shadow-md border border-gray-300 overflow-hidden">
        <h2 className="absolute top-2 left-2 bg-opacity-80 bg-black text-white px-3 py-1 rounded-sm text-sm font-medium">
          Interviewer
        </h2>
        <ReactPlayer playing muted height="100%" width="100%" url={remoteStream} className="rounded-md" />
      </div>
    )}
  </main>

  {/* Call Controls */}
  <footer className="flex justify-center items-center p-4 bg-white shadow-sm border-t border-gray-300">
    <button
      onClick={handleToggleMute}
      className="px-3 py-2 mx-2 rounded-md bg-gray-200 hover:bg-gray-300 transition duration-200 text-gray-700 text-sm font-medium shadow-sm"
    >
      {/* <span className="material-icons align-middle">{isMuted ? "mic_off" : "mic"}</span> */}
      <span className="ml-2 align-middle">{isMuted ? "Unmute" : "Mute"}</span>
    </button>
    <button
      onClick={handleToggleCamera}
      className="px-3 py-2 mx-2 rounded-md bg-gray-200 hover:bg-gray-300 transition duration-200 text-gray-700 text-sm font-medium shadow-sm"
    >
      {/* <span className="material-icons align-middle">{isCameraOn ? "videocam_off" : "videocam"}</span> */}
      <span className="ml-2 align-middle">{isCameraOn ? "Turn On Camera" : "Turn Off Camera"}</span>
    </button>
    {remoteSocketId && (
      <button
        onClick={handleCallUser}
        className="px-4 py-2 mx-2 rounded-md bg-green-600 hover:bg-green-700 transition duration-200 text-white text-sm font-medium shadow-sm"
      >
        {/* <span className="material-icons align-middle">call</span> */}
        <span className="ml-2 align-middle">Call</span>
      </button>
    )}
  </footer>
</div>




  );
};

export default RoomPage;
