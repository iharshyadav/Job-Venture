"use client"
import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSocket } from "@/app/components/SocketProvider";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const router = useRouter();

  
  const handleSubmitForm = useCallback(
    (e:any) => {
      e.preventDefault();
      console.log("first")
      console.log(socket)
      socket?.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data:any) => {
      const { email, room } = data;
      router.push(`${room}`);
    },
    [router]
  );

  useEffect(() => {
    socket?.on("room:join", handleJoinRoom);
    return () => {
      socket?.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <h1 className="font-semibold underline text-3xl">Lobby</h1>
      <form onSubmit={handleSubmitForm} className="flex flex-col">
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          value={email}
          className=" text-black border-2 border-black p-1"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="room">Room Number</label>
        <input
          type="text"
          id="room"
          className=" text-black border-2 border-black p-1"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button className="p-1 align-middle rounded-md pr-4 pl-4 bg-black text-white">Join</button>
      </form>
    </div>
  );
};

export default LobbyScreen;