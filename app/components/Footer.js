import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="px-4 border-t-1 border-gray-100 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <Image
              src="/images/hh_Logo2.png"
              alt="logo"
              loading="eager"
              width="180"
              height="180"
            />
          </Link>
          <div className="mt-1 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Embark on transformative spiritual journeys with Hayagriva
              Holidays. Explore sacred sites, connect with ancient wisdom, and
              find inner peace.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              9606943215
            </p>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <Link
              href="mailto:hayagrivaholidays@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
             hayagrivaholidays@gmail.com
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              #27, Padmanabhanagar, Bangalore-70
            </p>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <Link
              href="/"
              title="twitter"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                {/* Twitter Icon */}
              </svg>
            </Link>
            <Link
              href="/"
              title="facebook"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                {/* Facebook Icon */}
              </svg>
            </Link>
            <Link
              href="/"
              title="insta"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                {/* Instagram Icon */}
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright {new Date().getFullYear()} Hayagriva. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
