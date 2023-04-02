import { useEffect, useRef, useState } from "react";
import { ISetupData } from "./Setup";
import Button from "./ui/Button";

interface ITimerProps {
  onStop: CallableFunction;
  data: ISetupData;
}

interface TimerState {
  currentState: string;
  currentTime: number;
  startTime: number;
}

export default function Timer({ onStop, data }: ITimerProps) {
  const statesRef = useRef<TimerState[]>([
    {
      currentState: "Breathe in",
      currentTime: data.breathe_in_hold,
      startTime: data.breathe_in_time,
    },
    {
      currentState: "Hold",
      currentTime: 0,
      startTime: data.breathe_in_hold,
    },
    {
      currentState: "Breathe out",
      currentTime: 0,
      startTime: data.breathe_out_time,
    },
    {
      currentState: "Hold",
      currentTime: 0,
      startTime: data.breathe_out_hold,
    },
  ]);

  const currentStateRef = useRef<number>(0);

  const [currentStateData, setCurrentStateData] = useState<TimerState>(
    statesRef.current[currentStateRef.current]
  );

  const [totalTime, setTotalTime] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (statesRef.current[currentStateRef.current].currentTime <= 0) {
        if (currentStateRef.current < statesRef.current.length - 1) {
          currentStateRef.current += 1;
        } else {
          currentStateRef.current = 0;
        }

        statesRef.current[currentStateRef.current].currentTime =
          statesRef.current[currentStateRef.current].startTime;
      } else {
        statesRef.current[currentStateRef.current].currentTime--;
      }

      setCurrentStateData(statesRef.current[currentStateRef.current]);

      setTotalTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  console.log("render");

  return (
    <div>
      <div className="text-center">
        <h1 className="mb-5 text-lg">{currentStateData.currentState}</h1>

        <div className="mb-10">
          <span className="inline-block rounded-full bg-blue-500 px-10 text-7xl text-blue-100">
            {currentStateData.currentTime}
          </span>
        </div>

        <div>{totalTime}</div>

        <div className="mt-10">
          <Button intent="secondary" onClick={() => onStop()}>
            Stop
          </Button>
        </div>
      </div>
    </div>
  );
}

/*
setCurrentState((prevState) => {
        console.log("prevState", prevState);

        let nextStateId = 0;

        if (statesRef.current[prevState].currentTime <= 0) {
          if (prevState < statesRef.current.length - 1) {
            nextStateId = prevState + 1;
          } else {
            nextStateId = 0;
          }

          statesRef.current[prevState].currentTime =
            statesRef.current[prevState].startTime;

          return nextStateId;
        } else {
          statesRef.current[prevState].currentTime--;

          console.log(prevState, statesRef.current[prevState]);
          setCurrentStateData(statesRef.current[currentState]);
          return prevState;
        }
      });
*/
