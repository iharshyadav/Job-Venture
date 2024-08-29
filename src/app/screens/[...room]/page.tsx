"use client"
import { useSocket } from '@/app/components/SocketProvider';
import peer from '@/app/lib/peer';
import { FC, useCallback, useEffect, useState } from 'react'
import ReactPlayer from "react-player";

interface RoomPageProps {
  
}

const RoomPage: FC<RoomPageProps> = ({}) => {

  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState('');
  const [myStream, setMyStream] = useState<MediaStream | undefined>();
  const [remoteStream, setRemoteStream] = useState();
  const [focused, setFocused] = useState(true);

  const handleUserJoined = useCallback(({ email, id } : {email : string , id : string}) => {
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
    setMyStream(stream)
    startDetection(stream);
  },[remoteSocketId, socket])

  const handleIncommingCall = useCallback(
    async ({ from, offer } : {from : string , offer : any}) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket?.emit("call:accepted", { to: from, ans });
      startDetection(stream);
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    if (myStream) {
      for (const track of myStream.getTracks()) {
        peer.peer.addTrack(track, myStream);
      }
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans } : {from : string , ans : any}) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

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

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }: {from : string , offer : any}) => {
      const ans = await peer.getAnswer(offer);
      socket?.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans } : {ans : any}) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev:any) => {
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
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal
  ]);

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

  const startDetection = (stream: MediaStream) => {
    const videoTrack = stream.getVideoTracks()[0];
    // @ts-ignore
    const imageCapture = new ImageCapture(videoTrack);

    const sendFrameToModel = async () => {
      const bitmap = await imageCapture.grabFrame();
      const canvas = document.createElement('canvas');
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(bitmap, 0, 0);
      const base64Image = canvas.toDataURL('image/jpeg');

      // Send this base64Image to your backend API for ML processing
      const response = await fetch('/api/detect-focus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64Image }),
      });

      const { focused } = await response.json();
      setFocused(focused);
    };

    setInterval(sendFrameToModel, 2000); // Send a frame every 2 seconds
  };

  return (
    <div className="h-screen w-full">
      <h1>Room Page</h1>
      <h4>{remoteSocketId ? "Connected" : "No one in room"}</h4>
      {myStream && <button onClick={sendStreams}>Send Stream</button>}
      {remoteSocketId && <button onClick={handleCallUser}>CALL</button>}
      <div className="flex items-center justify-center">
        {myStream && (
          <>
            <h1>My Stream</h1>
            <ReactPlayer
              playing
              muted
              height="600px"
              width="700px"
              url={myStream}
            />
            <button onClick={handleScreenShare}>Share Screen</button>
            <p>Status: {focused ? "Focused" : "Unfocused"}</p>
          </>
        )}
        {remoteStream && (
          <>
            <h1>Remote Stream</h1>
            <ReactPlayer
              playing
              muted
              height="600px"
              width="700px"
              url={remoteStream}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default RoomPage