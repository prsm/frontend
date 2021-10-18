import Social from './Social';

export default function Socials({ socials }) {
  return (
    <ul className="flex sm:justify-between mt-2 sm:mt-0 flex-row-reverse">
      {socials.map((social, index) => (
        <Social {...social} key={index} />
      ))}
    </ul>
  );
}
