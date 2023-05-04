import { Children } from "react";

function KataSection({ headerText, children, implemented = false }) {
  const borderColor = implemented ? "border-blue-500" : "border-red-600";

  return (
    <div
      className={`w-full max-w-md py-4 px-2 rounded-xl border-4 ${borderColor}`}
    >
      <div className="text-xl font-bold mb-4 text-center">{headerText}</div>
      <div className="flex justify-center">{children}</div>
    </div>
  );
}

export default KataSection;
