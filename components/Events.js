import { Typography } from '@pr1sm/refracted';
import Event from './Event';

export default function Events({ events }) {
  events.sort((a, b) => new Date(b.start) - new Date(a.start)).reverse();

  return (
    <div>
      <Typography variant="h6" component="h2" className="mt-2">
        Events
      </Typography>
      <Typography variant="body" component="p" className="mt-2">
        Kommende Events, welche entweder von uns veranstaltet oder besucht werden. Besuche unseren Discord, wenn du mehr
        über ein Event erfahren möchtest.
      </Typography>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {events.map((event, index) => (
          <Event {...event} key={index} />
        ))}
      </div>
    </div>
  );
}
