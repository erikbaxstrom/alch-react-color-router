import { useParams } from 'react-router-dom';
import './ColorDisplay.css';

export default function ColorDisplay() {
  const { redValue, greenValue, blueValue } = useParams();

  const compliment = (value) => {
    return Math.abs(127 - value);
  };

  return (
    <div
      className="display"
      style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})` }}
    >
      <p
        style={{
          color: `rgb(${compliment(redValue)}, ${compliment(greenValue)}, ${compliment(
            blueValue
          )})`,
        }}
      >
        You have chosen {redValue}, {greenValue}, {blueValue}
      </p>
    </div>
  );
}
