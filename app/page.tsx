import Hero from "../component/Hero";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />

        <section className="bg-white text-black">
          <div className="w-full md:w-[80%] mx-auto md:p-22 py-12 px-4">
            <h1 className="font-bold md:text-3xl text-xl">
              Your Ethiopian Bridge to Canton Fair
            </h1>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between mt-16">
              <div className="bg-black text-white md:w-[48%] pb-8">
                <Image
                  src="/containers.jpg"
                  alt="Shippers image"
                  width={650}
                  height={200}
                  className="pb-5"
                />
                <h2 className="font-bold text-5xl m-4 mb-6">Sea Freight</h2>
                <p className="m-4 text-xl">
                  Cost-effective ocean shipping with full container load (FCL)
                  and less than container load (LCL) options.
                </p>
                <a href="" className="m-4 text-lg ">
                  Tell me more
                </a>
              </div>
              <div className="bg-black text-white md:w-[48%] pb-8">
                <Image
                  src="/plane.jpg"
                  alt="Carriers image"
                  width={650}
                  height={200}
                  className="pb-5"
                />
                <h2 className="font-bold text-5xl m-4 mb-6">Air Cargo</h2>
                <p className="m-4 text-xl">
                  Fast, reliable air freight for time-sensitive shipments with
                  real-time tracking and insurance.
                </p>
                <a href="" className="m-4 text-lg ">
                  Tell me more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Move a load today */}
        <section className="relative h-[900px] md:h-[1000px]  overflow-hidden bg-gray-900 flex items-center justify-center">
          {/* 2. Background Graphic Container (Absolute and fills the section) */}
          <div className="absolute inset-0 z-0">
            {/* NOTE: To replicate the exact look, you would use a dark image/graphic.
                  If you have a globe image named 'dark-globe.png' in your 'public' folder: */}

            <Image
              src="/cargo-ship.png"
              alt="Intelligent Logistics Background"
              layout="fill"
              objectFit="cover"
              className="opacity-100 hover:opacity-100 transition duration-300" // Adjust opacity as needed
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
          <div className="relative w-[80%] h-full flex flex-col justify-end gap-10 mb-34 z-10 text-white  pt-4 sm:pt-10 lg:pt-22">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Move a load today
            </h1>

            {/* CTA Buttons */}
            <div className="flex space-x-4">
              {/* Primary Button: "Ship a load today" (White background, black text) */}
              <a
                href="#"
                className="bg-black text-white font-semibold py-3 px-6 rounded hover:bg-gray-700 transition duration-300 shadow-xl"
              >
                Get instant quote
              </a>

              {/* Secondary Button: "Haul with us" (Text-only with border) */}
              <a
                href="#"
                className="bg-white text-black font-semibold py-3 px-6 hover:bg-gray-200 rounded border border-white  transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* about us */}
        <section className="bg-white text-black py-20 w-full ">
          <div className="w-[80%] mx-auto flex flex-col md:flex-row gap-10 justify-evenly mb-22">
            <Image
              src="/about1.jpg"
              alt="About us image"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="md:w-[40%] flex flex-col justify-center md:p-10 p-4">
              <h2 className="text-5xl font-bold mb-4">Who We are?</h2>
              <p className="text-xl text-gray-600 mb-8 ">
                NA Unity Logistics & Sourcing is a trusted global partner
                connecting China and Ethiopia through efficient logistics and
                reliable sourcing solutions. We specialize in air cargo, ocean
                freight, and truck transport, ensuring your goods move safely,
                quickly, and affordably across borders.
              </p>
              <Link
                href="/about"
                className="text-white px-3 py-2 bg-black w-fit rounded hover:bg-gray-600"
              >
                Find out More
              </Link>
            </div>
          </div>
          <div className="md:w-[80%] mx-auto flex flex-col md:flex-row gap-10 justify-evenly mb-22">
            <div className="md:w-[40%] flex flex-col justify-center md:p-10 p-4">
              <h2 className="text-5xl font-bold mb-4">Industries we serve</h2>
              <p className="text-xl text-gray-600 mb-8 pl-5">
                Industrial Machinery & Equipment <br />
                Electrical & Electronic Goods <br />
                Construction Materials & Tools <br />
                Vehicles & EV Trucks
                <br />
                Chemical & Pharmaceutical Machinery <br /> Apparel & Textiles{" "}
                <br />
                Household, Furniture & General Goods
              </p>
              <Link
                href="/industries"
                className="text-white px-3 py-2 bg-black w-fit rounded hover:bg-gray-600"
              >
                Find out More
              </Link>
            </div>
            <Image
              src="/about2.jpg"
              alt="About us image"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="md:w-[80%] mx-auto flex flex-col md:flex-row gap-10 justify-evenly mb-22">
            <Image
              src="/about3.jpg"
              alt="About us image"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="md:w-[40%] flex flex-col justify-center p-10">
              <h2 className="text-5xl font-bold mb-4">Services we offer</h2>
              <p className="text-xl text-gray-600 mb-8 ">
                Sourcing & Supplier Verification <br />
                Price Negotiation & Purchasing <br /> Quality Control &
                Pre-Shipment Inspections <br /> Warehousing & Consolidation{" "}
                <br /> Logistics & Delivery Management
                <br /> Payment & Transaction Support <br />
                Customs & Mediation
              </p>
              <Link
                href="/services"
                className="text-white px-3 py-2 bg-black w-fit rounded hover:bg-gray-600"
              >
                Find out More
              </Link>
            </div>
          </div>
        </section>

        {/* road to sustainability */}
        <section className="relative h-[800px] md:h-[900px]  overflow-hidden bg-gray-900 flex items-center justify-center">
          {/* 2. Background Graphic Container (Absolute and fills the section) */}
          <div className="absolute inset-0 z-0">
            {/* NOTE: To replicate the exact look, you would use a dark image/graphic.
                  If you have a globe image named 'dark-globe.png' in your 'public' folder: */}

            <Image
              src="/road.png"
              alt="Intelligent Logistics Background"
              layout="fill"
              objectFit="cover"
              className="opacity-100 hover:opacity-100 transition duration-300" // Adjust opacity as needed
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
          <div className="relative w-[80%] h-full flex flex-col justify-end gap-10 mb-44 z-10 text-white  pt-4 sm:pt-10 lg:pt-22">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              The drive begins here
            </h1>

            {/* CTA Buttons */}
            <div className="flex space-x-4">
              {/* Primary Button: "Ship a load today" (White background, black text) */}
              <a
                href="#"
                className="bg-black text-white font-semibold py-3 px-6 rounded hover:bg-gray-700 transition duration-300 shadow-xl"
              >
                Find out more
              </a>

              {/* Secondary Button: "Haul with us" (Text-only with border) */}
            </div>
          </div>
        </section>

        {/* CTA  */}
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
          <div className="absolute inset-0 z-50 w-[70%] mx-auto md:flex gap-3 md:gap-10 h-fit md:h-1/3 bg-white text-black pr-3 hidden">
            <Image
              src="/truck.jpg"
              alt="Intelligent Logistics Background"
              width={800}
              height={600}
            />
            <div className="flex flex-col justify-center gap-7 p-6">
              <h6 className="text-lg">
                Chris Kozak , Associate Director of Contract Carriers, Tyson
                Foods
              </h6>
              <p className="text-xl">
                "Over the years as we’ve expanded and developed new
                consumer-appealing food products, Uber Freight has adapted its
                transportation management technologies to support us in staying
                at the forefront of our industry. Uber Freight consistently
                rises to our toughest logistics challenges and remains flexible
                to the day-to-day changes in our dynamic schedules." Sign up and
                get started with Uber Freight today!
              </p>
            </div>
          </div>

          {/* 3. Content Overlay (Text and Buttons) */}
          <div className="relative w-[80%] h-full flex flex-col justify-end gap-10 mb-44 z-10 text-white  pt-4 sm:pt-10 lg:pt-22">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Are you ready to work with us?
            </h1>

            {/* CTA Buttons */}
            <div className="flex space-x-4">
              {/* Primary Button: "Ship a load today" (White background, black text) */}
              <a
                href="#"
                className=" border-2 border-white text-white font-semibold py-3 px-6 rounded hover:bg-white hover:text-black transition duration-300 shadow-xl"
              >
                Contact Us
              </a>

              {/* Secondary Button: "Haul with us" (Text-only with border) */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
