import { useState } from "react";

function TooltipPage({ text, children }) {
  const [visible, setvisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setvisible(true)}
      onMouseLeave={() => setvisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 whitespace-nowrap text-sm text-white bg-gray-300 rounded-md shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
}

export default function Tooltip() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <TooltipPage text="I am a Tooltip">
        <button className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 cursor-pointer">
          Hover Me
        </button>
      </TooltipPage>
    </div>
  );
}
