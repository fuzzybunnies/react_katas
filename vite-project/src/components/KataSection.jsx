import { Children } from "react";

function KataSection({ headerText, children }) {
  return (
    <div className="w-full p-2 rounded-xl border-2 border-blue-500">
      <div className="text-xl font-bold mb-4 text-center">{headerText}</div>
      <div className="flex justify-center">{children}</div>
    </div>
  );
}

export default KataSection;
