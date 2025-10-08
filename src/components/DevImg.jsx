import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} ` }>
      <Image src={imgSrc} fill priority alt=''  style={{objectFit:"cover",objectPosition:5}} />
      
    </div>
  );
};

export default DevImg;
