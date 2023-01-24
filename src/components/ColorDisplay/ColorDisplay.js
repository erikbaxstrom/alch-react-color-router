import { useParams } from 'react-router-dom';

export default function ColorDisplay() {
  const { redValue, greenValue, blueValue } = useParams();

  return (
    <p style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})` }}>
      You have chosen {redValue}, {greenValue}, {blueValue}
    </p>
  );
}
