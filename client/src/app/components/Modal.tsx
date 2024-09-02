import { FC } from "react";

interface ModalProps {
  title: string;
  message: string;
  onClose: () => void;
  myStream?: MediaStream | undefined;
  usersInRoom : number;
  remoteSocketId : string;
  handleCallUser: () => Promise<void>;
}

const Modal: FC<ModalProps> = ({ title, message, onClose ,myStream , usersInRoom , remoteSocketId,handleCallUser}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        {(myStream && usersInRoom >= 2) ||
            (remoteSocketId) ? (
              <button
                onClick={() => {
                  handleCallUser();
                  onClose();
                }}
                className="px-4 py-2 mx-2 rounded-md bg-green-600 hover:bg-green-700 transition duration-200 text-white text-sm font-medium shadow-sm"
              >
                <span className="align-middle">Call Accepted</span>
              </button>
            ) : null}
      </div>
    </div>
  );
};

export default Modal;