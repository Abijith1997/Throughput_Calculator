import { InputPart } from "./Parts/InputPart";
import { OutputPart } from "./Parts/OutputPart";

function App() {
  return (
    <>
      <div className="whole-app min-h-screen w-screen flex flex-col lg:flex-row items-stretch justify-between lg:px-10 px-1 py-2 sm:py-10 gap-5 md:gap-10">
        <InputPart />
        <OutputPart />
      </div>
    </>
  );
}

export default App;
