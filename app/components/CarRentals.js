import Image from "next/image";
import { CiAlignLeft, CiAlignRight } from "react-icons/ci";

const escapeImages = [
  "/images/car/swift.webp",
  "/images/car/crysta.jpg",
  "/images/car/urbania.jpg",
];

export default function CarRentals() {
  return (
    <section id="rentals">
      <div className="bg-green-50 p-8 mt-8">
        <h1 className=" text-3xl text-center font-bold mb-1">Book Rentals</h1>
        <p className="text-sm *text-gray-500 text-center mb-10">
          Reliable Cab Rentals for Every Journey: Sedans, SUVs, Tempo Travellers
          & More.
        </p>
        <div className=" bg-green-500  max-w-5xl mx-auto my-12 p-6 bg-cover bg-center rounded-3xl text-white relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold leading-tight">
                Family <span className="text-white">Adventures</span>{" "}
                <span className="font-light text-white/70"> Start Here</span>
              </h1>
              <p className="text-sm mt-4 text-white/90 max-w-md">
                Spacious, safe, and ready for every memory—find the perfect car
                for your next family getaway, whether it’s a weekend trip or a
                cross-country adventure.
              </p>
              <div className="flex gap-4 mt-6">
                <button className="bg-black/50 rounded-full p-3 hover:bg-black/70">
                  <CiAlignLeft className="w-5 h-5 text-white" />
                </button>
                <button className="bg-black/50 rounded-full p-3 hover:bg-black/70">
                  <CiAlignRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {escapeImages.map((src, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-lg w-full h-full md:w-40 md:h-64"
                >
                  <Image
                    src={src}
                    alt={`Car Image ${i}`}
                    width={160}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
