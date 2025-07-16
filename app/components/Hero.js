import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full aspect-[5/4] mt-16 md:mt-0 md:aspect-auto">
      <Image
        src="/images/heroBg2.png"
        alt="Page Banner"
        width={2000}
        height={811}
        priority
        className="hidden md:block z-0"
      />
      <Image
        src="/images/heroBg2.png"
        alt="Page Banner"
        priority
        fill
        className="block md:hidden z-0"
      />
      <div className="absolute inset-0 max-w-[690px]  z-10 flex flex-col  justify-center items-start px-8 md:px-10 w-fit">
        <div className=" w-full mt-6 md:mt-0 pl-6 rounded  md:bg-white/10  md:backdrop-blur-xl md:backdrop-opacity-30">
          <h1 className="text-white  text-2xl md:text-6xl font-bold max-w-[700px] leading-tight mb-2 md:mb-6">
            Begin Your Spiritual Journey with Us
          </h1>
          <p className="text-white text-lg md:text-xl mb-1 md:mb-8 max-w-[600px]">
            Explore sacred destinations across India. Discover peace, devotion,
            and a deeper connection.
          </p>
          <div className="flex gap-4 mb-4">
            <a href="tel:9606943215" aria-label="Call 18002661100">
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
