import { Typography } from '@pr1sm/refracted';
import ButtonGroup from './ButtonGroup';

export default function ContactBox({ buttons }) {
  return (
    <div className="w-full p-2 rounded border border-custom">
      <Typography variant="h6" component="h2" className="mt-2">
        Haben wir dein Interesse geweckt?
      </Typography>
      <Typography variant="body" component="p" className="mt-2">
        Hier erfährst du mehr über unseren Verein:
      </Typography>
      <ButtonGroup buttons={buttons} />
    </div>
  );
}
