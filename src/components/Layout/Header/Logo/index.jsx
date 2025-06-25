import Image from 'next/image';
import Link from 'next/link';
import { GiStaryu } from "react-icons/gi";
const Logo= () => {

  return (
    <Link href="/" className='flex items-center text-black dark:text-white text-2xl font-semibold gap-4'>
     
      <GiStaryu  size={40 } color='orange'/>
Artistly
    </Link>
  );
};

export default Logo;
