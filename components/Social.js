import Image from 'next/image';
export default function Social({ name, logo, href }) {
  return (
    <li>
      <a
        className="p-2 rounded flex justify-between items-center border border-custom bg-brand-white bg-opacity-5  sm:ml-2 sm:mr-0 mr-2 hover:bg-opacity-10"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <Image src={logo} quality="100" width="24" height="24" layout="intrinsic" />
      </a>
    </li>
  );
}
