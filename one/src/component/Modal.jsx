import React, { useState } from "react";

function ModalPage({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="rounded-lg shadow-lg bg-white p-6 w-80">
        <h2 className="text-lg font-bold mb-4">Simple Modal</h2>
        <p className="text-gray-700 mb-6">This is a Simple modal example 🚀.</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"
          >
            Close
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 cursor-pointer"
      >
        Open Modal
      </button>

      <ModalPage isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Modal;
