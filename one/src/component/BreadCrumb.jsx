export default function BreadCrumb() {
  const language = ["Javascripts", "C++", "Java", "Cotlin", "Python"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 space-x-3 ">
      {language.map((items, idx) => (
        <span key={idx} className="">
          <span
            className={`${
              idx === language.length - 1
                ? "bg-blue-600 font-semibold text-white px-2 py-1 rounded-xl"
                : "hover:underline cursor-pointer"
            }`}
          >
            {items}
          </span>
          {idx < language.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </div>
  );
}
