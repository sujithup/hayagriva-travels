import Image from "next/image";

const Hero = () => {
    return (
      <div className="">
        <Image
              src="/images/heroBg.jpg"
              loading="eager"
              width={2000}
              height={811}
              alt="Page Banner"
              objectFit="contain"
              className="mx-auto mt-20"
            />
          
      </div>
    );
  };
  
  export default Hero;