import Logo from '../public/logo.svg';
import Socials from './Socials';

export default function Header({ socials }) {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start top-0 left-0 right-0 sticky w-full p-4 border-b navbar-blurred z-10 border-opacity-20 hover:border-opacity-100 transition duration-200">
      <Logo className="logo" />
      <Socials socials={socials} />
    </header>
  );
}
