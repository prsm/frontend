import { Typography } from '@pr1sm/refracted';
import Image from 'next/image';

export default function Button({ text, icon, onClick }) {
  return (
    <a className="flex flex-row items-center justify-center p-2 border rounded border-custom w-full cursor-pointer">
      {icon && (
        <div className="mr-2 inline-flex">
          <Image src={icon} width="24" height="24" layout="intrinsic" />
        </div>
      )}
      <Typography variant="button" component="span" text={text} />
    </a>
  );
}
