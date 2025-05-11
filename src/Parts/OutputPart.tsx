import { Outputs } from "./Inner/Outputs";

export const OutputPart = () => {
  return (
    <div className="w-full bg-[#DADDD8] p-2 rounded-md shadow-md flex flex-col items-center justify-start text-black">
      <h2 className="uppercase font-bold text-xl">Performance Summary</h2>
      <div className="all-inputs w-full p-2 flex items-center justify-center">
        <Outputs />
      </div>
    </div>
  );
};
