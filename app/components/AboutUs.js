import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div className="grid grid-nogutter surface-0 text-800">
      <div className="col-2  md:col-span-3 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <span className="block text-3xl font-bold mb-1">
            About Us
          </span>
          {/* <div className="text-6xl text-primary font-bold mb-3">
            your visitors deserve to see
          </div> */}
          <p className="mt-0 mb-4 text-700 line-height-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button
            label="Learn More"
            type="button"
            className="mr-3 p-button-raised"
          />
          <button
            label="Live Demo"
            type="button"
            className="p-button-outlined"
          />
        </section>
      </div>
      <div className="col-12 md:col-8 overflow-hidden">
        <Image
          src="/images/temple1.jpg"
          alt="hero-1"
          width={600}
          height={300}
          className="md:ml-auto block md:h-full"
          style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
        />
      </div>
    </div>
  );
}

export default AboutUs;
