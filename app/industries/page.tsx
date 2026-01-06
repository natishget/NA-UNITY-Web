"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Industries() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const industries = [
    {
      name: "Industrial Machinery & Equipment",
      description:
        "Heavy machinery, manufacturing equipment, and industrial tools sourced directly from verified Chinese manufacturers.",
      icon: "⚙️",
      image: "/machinery-equipment.jpg",
      details: [
        "Factory equipment",
        "CNC machines",
        "Industrial tools",
        "Spare parts",
      ],
    },
    {
      name: "Electrical & Electronic Goods",
      description:
        "Solar panels, home appliances, electronics, and electrical components for residential and commercial use.",
      icon: "📱",
      image: "/electronics-goods.jpg",
      details: [
        "Solar systems",
        "Home appliances",
        "Electronics",
        "LED lighting",
      ],
    },
    {
      name: "Construction Materials & Tools",
      description:
        "Building materials, construction equipment, and tools for infrastructure and development projects.",
      icon: "🏗️",
      image: "/construction-materials.jpg",
      details: [
        "Building materials",
        "Power tools",
        "Safety equipment",
        "Hardware",
      ],
    },
    {
      name: "Vehicles & EV Trucks",
      description:
        "Commercial vehicles, electric trucks, motorcycles, and automotive parts for transportation and logistics.",
      icon: "🚗",
      image: "/vehicles-trucks.jpg",
      details: [
        "Commercial vehicles",
        "EV trucks",
        "Motorcycles",
        "Auto parts",
      ],
    },
    {
      name: "Chemical & Pharmaceutical Machinery",
      description:
        "Specialized equipment for chemical processing, pharmaceutical manufacturing, and laboratory applications.",
      icon: "⚗️",
      image: "/chemicals-equipment.jpg",
      details: [
        "Processing equipment",
        "Lab machinery",
        "Pharmaceutical tools",
        "Safety systems",
      ],
    },
    {
      name: "Apparel & Textiles",
      description:
        "Clothing, fabrics, textiles, and fashion products sourced from reliable manufacturers across China.",
      icon: "👔",
      image: "/fashion-textiles.jpg",
      details: ["Clothing", "Fabrics", "Textiles", "Fashion accessories"],
    },
    {
      name: "Household, Furniture & General Goods",
      description:
        "Furniture, home décor, kitchenware, and general consumer goods for retail and wholesale distribution.",
      icon: "🏠",
      image: "/household-furniture.jpg",
      details: ["Furniture", "Home décor", "Kitchenware", "Consumer goods"],
    },
  ];
  return (
    <>
      {/* Hero */}
      <section className="relative h-[650px] md:h-[700px]  overflow-hidden bg-gray-900 flex items-center justify-center">
        {/* 2. Background Graphic Container (Absolute and fills the section) */}
        <div className="absolute inset-0 z-0">
          {/* NOTE: To replicate the exact look, you would use a dark image/graphic.
            If you have a globe image named 'dark-globe.png' in your 'public' folder: */}

          {/* <Image
            src="/cont.jpg"
            alt="Intelligent Logistics Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50" // Adjust opacity as needed
          /> */}

          <img
            src="/cont.jpg"
            alt="Intelligent Logistics Background"
            className="opacity-50 object-cover w-full h-full" // Adjust opacity as needed
          />

          <div className="w-full h-full bg-black opacity-50"></div>

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
        <div className="relative w-[80%] h-full flex flex-col justify-end pb-28 z-10 text-white  pt-4 sm:pt-10 lg:pt-22">
          {/* Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            Industries We Serve
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl font-light mb-10">
            Expertise across multiple sectors to meet Ethiopia's growing import
            demand
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-200 transition duration-300 shadow-xl"
            >
              Request a Quote
            </a>

            <a
              href="#"
              className="text-white font-semibold py-3 px-6 rounded border border-white hover:bg-white hover:text-black transition duration-300"
            >
              Contact Us
            </a>
          </div> */}
        </div>
      </section>

      {/* Industries Grid */}
      <div className="bg-white py-20 shadow-2xl">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className={`group bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#cccccc] hover:border-[#0000FF]
                  
              `}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 bg-black overflow-hidden">
                {/* <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                /> */}

                <img
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                />
                <div className="absolute inset-0 bg-[#0000FF] opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 ">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white">
                    {industry.name}
                  </h3>
                </div>
                <p className="text-white mb-4 leading-relaxed">
                  {industry.description}
                </p>

                {/* Details */}
                <div className="mb-6">
                  <p className="text-sm font-bold text-[#0000FF] mb-2">
                    What we source:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.details.map((detail) => (
                      <span
                        key={detail}
                        className="text-xs bg-ray-800 text-white px-3 py-1 rounded-full border border-[#cccccc]"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#0000FF] font-bold hover:text-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* success Section */}
      <div className="bg-gray-100">
        <div className="w-[80%] mx-auto py-20 flex flex-col gap-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-4">
              Success Across Industries
            </h2>
            <p className="text-lg text-[#262626]">
              Real results from businesses we've helped
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`bg-white p-8 rounded-lg border-l-4 border-[#0000FF] ${
                isLoaded ? "animate-fade-in-up" : ""
              }`}
            >
              <div className="text-4xl font-bold text-[#0000FF] mb-2">500+</div>
              <p className="text-[#262626] font-bold mb-2">
                Successful Shipments
              </p>
              <p className="text-[#262626] text-sm">
                Across all industries and sectors
              </p>
            </div>
            <div
              className={`bg-white p-8 rounded-lg border-l-4 border-[#0000FF] ${
                isLoaded ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: "100ms" }}
            >
              <div className="text-4xl font-bold text-[#0000FF] mb-2">98%</div>
              <p className="text-[#262626] font-bold mb-2">
                Quality Satisfaction
              </p>
              <p className="text-[#262626] text-sm">Client satisfaction rate</p>
            </div>
            <div
              className={`bg-white p-8 rounded-lg border-l-4 border-[#0000FF] 
                ${isLoaded ? "animate-fade-in-up" : ""}
            `}
              style={{ animationDelay: "200ms" }}
            >
              <div className="text-4xl font-bold text-[#0000FF] mb-2">7</div>
              <p className="text-[#262626] font-bold mb-2">Industry Sectors</p>
              <p className="text-[#262626] text-sm">Specialized expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="relative h-[600px] md:h-[750px]  overflow-hidden bg-gray-900 flex items-center justify-center">
        {/* 2. Background Graphic Container (Absolute and fills the section) */}
        <div className="absolute inset-0 z-0">
          {/* NOTE: To replicate the exact look, you would use a dark image/graphic.
                                If you have a globe image named 'dark-globe.png' in your 'public' folder: */}

          {/* <Image
                            src="/road.jpg"
                            alt="Intelligent Logistics Background"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-100 hover:opacity-100 transition duration-300" // Adjust opacity as needed
                          /> */}

          {/* The following divs are a pure Tailwind/CSS placeholder to mimic the dark, glossy effect: */}

          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              // Simulation of a dark, slightly glowing graphic effect
              backgroundImage:
                "radial-gradient(circle at 60% 40%, rgba(100, 100, 200, 0.3) 0%, rgba(0, 0, 0, 0.9) 70%)",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 z-0 w-[70%] mx-auto md:flex hidden gap-10 h-fit bg-white text-black pr-3">
          {/* <Image
            src="/large-cargo.jpg"
            alt="Intelligent Logistics Background"
            width={300}
            height={600}
          /> */}

          <img
            src="/large-cargo.jpg"
            alt="Intelligent Logistics Background"
            width={300}
            height={600}
          />
          <div className="flex flex-col justify-center gap-7 p-3">
            <h6 className="text-2xl font-bold ">Tailored Solutions</h6>
            <div className="flex gap-15 justify-between w-full">
              <div>
                <h1>What We Offer</h1>
                <p>
                  → Industry-specific supplier networks <br /> → Quality
                  standards compliance <br /> → Regulatory documentation <br />{" "}
                  → Specialized logistics handling
                </p>
              </div>
              <div>
                <h1>Our Commitment</h1>
                <p>
                  → On-time delivery every time <br /> → Transparent pricing and
                  communication <br /> → Dedicated account management <br /> →
                  24/7 support and tracking
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Content Overlay (Text and Buttons) */}
        <div className="relative w-[80%] h-full flex flex-col justify-end gap-10 mb-44 z-10 text-white  pt-4 sm:pt-10 lg:pt-22">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Find Your Industry Solution
          </h1>

          {/* CTA Buttons */}
          <div className="flex space-x-4">
            {/* Primary Button: "Ship a load today" (White background, black text) */}
            <a
              href="#"
              className=" border-2 border-white text-white font-semibold py-3 px-6 rounded hover:bg-white hover:text-black transition duration-300 shadow-xl"
            >
              Request Industry-Specific Quote
            </a>

            {/* Secondary Button: "Haul with us" (Text-only with border) */}
          </div>
        </div>
      </section>
    </>
  );
}
