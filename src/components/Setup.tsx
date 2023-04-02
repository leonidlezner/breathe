import { ChangeEvent, useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";

interface ISetupProps {
  onStart: CallableFunction;
  initial: ISetupData;
}

export interface ISetupData {
  breathe_in_time: number;
  breathe_in_hold: number;
  breathe_out_time: number;
  breathe_out_hold: number;
}

export default function Setup({ onStart, initial }: ISetupProps) {
  const [data, setData] = useState<ISetupData>(initial);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;

    setData((prevData) => {
      return { ...prevData, [id]: parseInt(value) };
    });
  };

  const handleStart = () => {
    onStart(data);
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="mb-3 text-lg font-bold">Breathe in</h2>
        <div className="flex space-x-1">
          <div>
            <Label htmlFor="breathe_in_time">Breathe time</Label>
            <Input
              id="breathe_in_time"
              type="number"
              value={data.breathe_in_time}
              onChange={handleInput}
            />
          </div>
          <div>
            <Label htmlFor="breathe_in_hold">Hold time</Label>
            <Input
              id="breathe_in_hold"
              type="number"
              value={data.breathe_in_hold}
              onChange={handleInput}
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-lg font-bold">Breathe out</h2>
        <div className="flex space-x-1">
          <div>
            <Label htmlFor="breathe_out_time">Breathe time</Label>
            <Input
              id="breathe_out_time"
              type="number"
              value={data.breathe_out_time}
              onChange={handleInput}
            />
          </div>
          <div>
            <Label htmlFor="breathe_out_hold">Hold time</Label>
            <Input
              id="breathe_out_hold"
              type="number"
              value={data.breathe_out_hold}
              onChange={handleInput}
            />
          </div>
        </div>
      </div>
      <div>
        <Button onClick={handleStart}>Start</Button>
      </div>
    </div>
  );
}
