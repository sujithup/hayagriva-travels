import Image from "next/image";

const travelPackages = [
  {
    id: "FT",
    title: "Kashi Yatra",
    price: "40,000",
    image: "/images/package/kashi.jpg",
  },
  {
    id: "KG",
    title: "Chardham Yatra",
    price: "65,000",
    image: "/images/package/kedar.jpg",
  },
  {
    id: "Q8",
    title: "Karnataka Tour",
    price: "9,999",
    image: "/images/package/murudeshwara.jpg",
  },
  {
    id: "F8",
    title: "Tamil Nadu Tour",
    price: "16,999",
    image: "/images/package/srirangam.jpg",
  },
  {
    id: "Q2",
    title: "Golden Triangle Tour",
    price: "24,999",
    image: "/images/package/taj.jpg",
  },
  {
    id: "FD",
    title: "Vaishnodevi",
    price: "59,999",
    // vaishnodevi pic
    image: "/images/temple1.jpg",
  },
];

export default function PackagesCarousel() {
  return (
    <section id="packages">
      <div className="p-8 mt-4">
        <h1 className="text-3xl font-bold mb-1">Our Packages</h1>
        <p className="text-sm *text-gray-500 mb-10">Lowest Prices of 2025!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
          {travelPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white shadow rounded-lg overflow-hidden relative"
            >
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                <div className="text-sm font-bold">{pkg.title}</div>
                <div className="text-xs mt-1">
                  Starts From{" "}
                  <span className="font-semibold">₹{pkg.price}*</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
