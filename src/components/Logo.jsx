import Link from 'next/link';
import Image from 'next/image';
// import logoUni from '../images/logounivers.png';
const Logo = () => {
  return (
    <Link href='/'>
      {/* <Image src={logoUni} width={120} height={"100%"} alt='logo univers' /> */}
    </Link>
  );
};

export default Logo;
