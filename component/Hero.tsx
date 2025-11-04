import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[650px] md:h-[700px]  overflow-hidden bg-gray-900 flex items-center justify-center">
      {/* 2. Background Graphic Container (Absolute and fills the section) */}
      <div className="absolute inset-0 z-0">
        {/* NOTE: To replicate the exact look, you would use a dark image/graphic.
          If you have a globe image named 'dark-globe.png' in your 'public' folder: */}

        <Image
          src="/dark.jpg"
          alt="Intelligent Logistics Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50" // Adjust opacity as needed
        />

        {/* The following divs are a pure Tailwind/CSS placeholder to mimic the dark, glossy effect: */}

        {/* <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            // Simulation of a dark, slightly glowing graphic effect
            backgroundImage:
              "radial-gradient(circle at 60% 40%, rgba(100, 100, 200, 0.3) 0%, rgba(0, 0, 0, 0.9) 70%)",
          }}
        ></div> */}
      </div>

      {/* 3. Content Overlay (Text and Buttons) */}
      <div className="relative w-[80%] z-10 text-white  pt-4 sm:pt-10 lg:pt-22">
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
          Trade Made Simple
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-light mb-10">
          Connecting Ethiopian businesses with trusted global suppliers — from
          factory sourcing to final delivery.
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          {/* Primary Button: "Ship a load today" (White background, black text) */}
          <Link
            href="#"
            className="bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-200 transition duration-300 shadow-xl"
          >
            Request a Quote
          </Link>

          {/* Secondary Button: "Haul with us" (Text-only with border) */}
          <Link
            href="/contact"
            className="text-white font-semibold py-3 px-6 rounded border border-white hover:bg-white hover:text-black transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
