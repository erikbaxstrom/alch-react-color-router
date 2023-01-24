import { useParams } from 'react-router-dom';

export default function ColorDisplay() {
  const { redValue, greenValue, blueValue } = useParams();

  const compliment = (value) => {
    return 127 - value;
  };

  return (
    <div style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})` }}>
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
