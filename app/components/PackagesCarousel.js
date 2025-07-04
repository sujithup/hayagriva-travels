import Image from 'next/image';

const travelPackages = [
  {
    id: 'FT',
    title: 'THAILAND',
    price: '75,000',
    image: '/images/heroBg.jpg'
  },
  {
    id: 'KG',
    title: 'GLORIOUS Golden Temple',
    price: '62,000',
    image: '/images/goldenTemple.png'
  },
  {
    id: 'Q8',
    title: 'SINGAPORE MALAYSIA ECONOMY',
    price: '1,02,000',
    image: '/images/temple1.jpg'
  },
  {
    id: 'F8',
    title: 'SINGAPORE MALAYSIA',
    price: '1,31,000',
    image: '/images/temple2.jpg'
  },
  {
    id: 'Q2',
    title: 'SINGAPORE THAILAND MALAYSIA ECONOMY',
    price: '1,34,000',
    image: '/images/goldenTemple.png'
  },
  {
    id: 'FD',
    title: 'BEST OF VIETNAM',
    price: '1,30,000',
    image: '/images/temple1.jpg'
  }
];

export default function PackagesCarousel() {
  return (
    <div className="p-8 mt-4">
      <h1 className="text-3xl font-bold mb-1">Our Packages</h1>
      <p className="text-sm *text-gray-500 mb-10">Lowest Prices of 2025!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
        {travelPackages.map(pkg => (
          <div key={pkg.id} className="bg-white shadow rounded-lg overflow-hidden relative">
            <Image
              src={pkg.image}
              alt={pkg.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
              <div className="text-sm font-bold">{pkg.title}</div>
              <div className="text-xs mt-1">Starts From <span className="font-semibold">₹{pkg.price}*</span></div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}
