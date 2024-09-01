"use client";
import React, { createContext, useMemo, useContext } from "react";
import { io, Socket } from "socket.io-client";

type SocketContextType = Socket | null;

const SocketContext = createContext<SocketContextType>(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props: any) => {
  const socket = useMemo(
    () =>
      io(
        process.env.NODE_ENV === "production"
          ? process.env.SOCKET_URL!
          : "http://localhost:5000"
      ),
    []
  );

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
