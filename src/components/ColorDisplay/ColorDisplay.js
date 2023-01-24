import { useParams } from 'react-router-dom';

export default function ColorDisplay() {
  const { redValue, greenValue, blueValue } = useParams();

  return (
    <p>
      You have chosen {redValue}, {greenValue}, {blueValue}
    </p>
  );
}
