import { Typography } from '@pr1sm/refracted';
import Image from 'next/image';

export default function Event({ title, description, location, href, start, end, organiser }) {
  const dateToStrippedString = (date) => {
    let dateString = new Date(date).toDateString();
    let dateTime = new Date(date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    return dateString.substring(dateString.indexOf(' '), dateString.length) + " " + dateTime;
  };

  const startDate = dateToStrippedString(start);
  const endDate = dateToStrippedString(end);

  return (
    <a
      className="border border-custom rounded p-2 text-brand-white text-opacity-40 hover:text-opacity-100"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Typography text={title} variant="h6" component="h3" />
      <Typography text={organiser} variant="subtitle" component="div" className=" mb-4" color="red" />
      <div className="flex flex-row space-x-2 items-start">
        <Image src="/clock.svg" height="24" width="24" layout="intrinsic" />
        <div className="flex flex-col  ">
          <div className="flex flex-row space-x-2">
            <Typography text="Von:" variant="body" component="p" className="mt-0" />
            <Typography text={startDate} variant="strong" component="p" className="mt-0" />
          </div>
          <div className="flex flex-row justify-start space-x-2">
            <Typography text="Bis:" variant="body" component="p" className="mt-0" />
            <Typography text={endDate} variant="strong" component="p" className="mt-0" />
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-2 items-start">
        <Image src="/location.svg" height="24" width="24" layout="intrinsic" />
        <Typography text={location} variant="strong" component="p" className="mt-0" />
      </div>
      <Typography text={description} variant="body" component="p" className="" />
    </a>
  );
}
