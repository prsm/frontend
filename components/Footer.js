import { Typography } from '@pr1sm/refracted';
import Link from 'next/link';
import Logo from '../public/logo_small.svg';
import VercelLogo from '../public/powered-by-vercel.svg';
import Socials from './Socials';

export default function Footer({ socials }) {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-start w-full p-8 border-t border-opacity-20 hover:border-opacity-100 transition duration-200 gap-2">
      <div className="flex flex-col justify-between items-start gap-2">
        <Link href="https://pr1sm.gg" passHref>
          <a>
            <Logo className="logo h-6 antialiased" />
          </a>
        </Link>
      </div>
      <div className="flex flex-col gap-4 justify-between items-start sm:items-end">
        <Link href="https://vercel.com/?utm_source=pr1sm&utm_campaign=oss" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <VercelLogo className="logo border-custom" />
          </a>
        </Link>
        <Socials socials={socials} />
        <Typography text="© 2020 - 2022, PR1SM, All rights reserved" variant="pretitle" color="white" />
      </div>
    </footer>
  );
}
