import { useState } from "react";

function AccordianItem({ title, content, isOpen, onClick }) {
  return (
    <div className=" mb-2 bg-amber-300 rounded-lg">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-4 py-2 text-left font-medium bg-amber-200 rounded-lg hover:bg-amber-300 border-none cursor-pointer"
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="px-4 py-2 text-gray-700">{content}</div>}
    </div>
  );
}

function AccordianPage() {
  const [openAccord, setOpenAccord] = useState(null);

  const toggle = (index) => {
    setOpenAccord(openAccord === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <AccordianItem
        title="section 1"
        content="this is my first 1 item container"
        isOpen={openAccord === 0}
        onClick={() => toggle(0)}
      />
      <AccordianItem
        title="section 2"
        content="this is my second 2 item container"
        isOpen={openAccord === 1}
        onClick={() => toggle(1)}
      />
      <AccordianItem
        title="section 3"
        content="this is my third 3 item container"
        isOpen={openAccord === 2}
        onClick={() => toggle(2)}
      />
    </div>
  );
}

export default function Accordian() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AccordianPage />
    </div>
  );
}
