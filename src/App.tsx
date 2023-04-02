import { useRef, useState } from "react";
import Setup, { ISetupData } from "./components/Setup";
import Timer from "./components/Timer";

export default function App() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const setupDataRef = useRef<ISetupData>({
    breathe_in_hold: 1,
    breathe_in_time: 3,
    breathe_out_hold: 10,
    breathe_out_time: 3,
  });

  const onStart = (data: ISetupData) => {
    setupDataRef.current = data;
    setIsRunning(true);
  };

  const onStop = () => {
    setIsRunning(false);
  };

  return (
    <div className="bg-gray-50 p-10">
      {isRunning ? (
        <Timer data={setupDataRef.current} onStop={onStop} />
      ) : (
        <Setup initial={setupDataRef.current} onStart={onStart} />
      )}
    </div>
  );
}
