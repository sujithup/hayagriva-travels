import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <section id="aboutus">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center surface-0 text-800 px-4 py-8 gap-0 ">
        <div className="text-center md:text-left ">
          <span className="block text-3xl font-bold mb-4">About Us</span>

          {/* Image placed after heading, before text */}
          <div className="mb-4 md:hidden">
            <Image
              src="/images/temple1.jpg"
              alt="About Us Image"
              width={600}
              height={300}
              className="mx-auto"
            />
          </div>

          <p className="text-700 text-justify mb-6">
            Since 1992, we have been a trusted name in the travel industry,
            proudly serving spiritual and leisure travelers for over 33 years.
            With a rich legacy rooted in excellence and authenticity, we have
            successfully organized 2,000+ group tours, touching the lives of
            10,000+ happy travelers across India. Our core expertise lies in
            spiritual tourism, curating deeply immersive journeys to sacred
            destinations that connect the soul and soothe the spirit. Over the
            decades, we have become a preferred partner for pilgrimage groups,
            corporate retreats, and leisure travelers alike.
            <br />
            <br />
            Our passion for service, deep local expertise, and customer-first
            approach have made us a trusted travel companion for thousands.
            Whether you are booking a spiritual retreat or need a reliable
            vehicle for your journey, we are here to take care of every mile
            with care and commitment. Join us and experience travel, the soulful
            way.
          </p>
        </div>

        {/* Image shown only on md+ screens */}
        <div className="hidden md:block">
          <Image
            src="/images/package/hampi.png"
            alt="hero-1"
            width={600}
            height={600}
            className="md:ml-auto block md:h-full rounded-md"
            style={{
              clipPath: "polygon(6% 0, 100% 0%, 100% 100%, 0 100%)",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
