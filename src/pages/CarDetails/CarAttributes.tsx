import seatSVG from "../../assets/images/abs.svg";
import airConditionSVG from "../../assets/images/air-condition.svg";
import audioSVG from "../../assets/images/audio.svg";
import audioInputSVG from "../../assets/images/audio-input.svg";

export default function CarAttributes() {
  return (
    <>
      <p className="text-gray-700 font-bold mt-4">ATTRIBUTES:</p>
      <div className="text-gray-700 mt-2 flex flex-wrap gap-4">
        <div className="flex items-center space-x-1">
          <img src={seatSVG} alt="seat svg" className="size-8" />
          <span>5 Seats</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src={airConditionSVG} alt="seat svg" className="size-8" />
          <span>Air Condition</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src={audioSVG} alt="seat svg" className="size-8" />
          <span>Audio</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src={audioInputSVG} alt="seat svg" className="size-8" />
          <span>Audio Input</span>
        </div>
      </div>
    </>
  );
}
