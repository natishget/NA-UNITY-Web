import Image from "next/image";
import { Globe, Target, CircleCheckBig, CornerDownRight } from "lucide-react";

export default function About() {
  return (
    <>
      {/* Page Container - scrollable */}
      <div className="relative min-h-screen overflow-y-auto  text-white">
        {/* === Fixed Background Image (stays still when scrolling) === */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/Addis-Ababa.png"
            alt="Main Background"
            fill
            className="object-cover "
            priority
          />
        </div>

        {/* === Hero Section (scrolls normally) === */}
        <section className="relative h-[750px] md:h-[850px] w-full flex items-center justify-center ">
          {/* Hero background (scrolls with section) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-about-us.jpg"
              alt="Hero Background"
              fill
              className="object-cover "
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="relative w-[80%] h-full z-10 flex flex-col justify-end pb-20 pt-10">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl font-light mb-10">
              Your trusted partner in global sourcing and logistics
            </p>
          </div>
        </section>

        {/* === Other Sections (scroll normally) === */}
        <section className="w-full bg-white mb-32 text-black">
          <div className="w-[80%] mx-auto py-20">
            <h2 className="md:text-5xl text-3xl font-bold mb-6 text-blue-600">
              Who we are?
            </h2>
            <p className="md:text-3xl text-2xl mb-4">
              NA Unity Trading PLC is a trusted sourcing and logistics company
              headquartered in Guangzhou, China, with a strong operational base
              in Addis Ababa, Ethiopia.
            </p>
          </div>
        </section>

        <section className="w-full h-[80vh]"></section>
        {/* Mission and Vision  */}
        <section className="w-full bg-gray-100 text-black">
          <div className="w-[80%] mx-auto py-20 flex flex-col md:flex-row justify-evenly">
            <div className="md:w-[40%] border-l-4 border-blue-600 rounded-xl p-4 mb-6 bg-white">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 flex items-center gap-3">
                <Target />
                <span className="text-black">Our Mission</span>
              </h2>
              <p className="md:text-xl text-base mb-4">
                To make global trade simple, secure, and accessible for every
                Ethiopian business. <br />
                We believe that every business, regardless of size, deserves
                access to world-class sourcing and logistics services. Our
                mission is to remove barriers to international trade and empower
                Ethiopian entrepreneurs to compete globally.
              </p>
            </div>
            <div className="md:w-[40%] border-l-4 border-blue-600 rounded-xl p-4 mb-6 bg-white">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 flex items-center gap-3">
                <Globe />
                <span className="text-black">Our Vision</span>
              </h2>
              <p className="md:text-xl text-base mb-4">
                To become Africa's most reliable sourcing and logistics partner,
                bridging trust and trade between continents. <br /> We envision
                a future where African businesses have seamless access to global
                markets, where supply chains are transparent and efficient, and
                where trade creates prosperity across borders.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values  */}
        <section className="w-full bg-white py-20">
          <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-evenly gap-10 md:gap-0">
            <Image
              src="/team-collaboration.jpg"
              alt="About Us"
              width={800}
              height={600}
              className="object-cover rounded-lg md:w-[40%]"
            />
            <div className="md:w-[40%] flex flex-col justify-center text-black">
              <h1 className="text-5xl font-bold">Our Values</h1>
              <ul className="flex flex-col gap-5">
                <li className=" mt-4">
                  <div className="flex items-center gap-3 font-bold text-lg">
                    <CircleCheckBig className="text-blue-600" />
                    Customer Focus
                  </div>
                  <div className="flex ml-5 items-center gap-3 font-gray-600">
                    <CornerDownRight />
                    <p>
                      Your success is our priority. We tailor solutions to meet
                      your unique business needs.
                    </p>
                  </div>
                </li>
                <li className=" mt-4">
                  <div className="flex items-center gap-3 font-bold text-lg">
                    <CircleCheckBig className="text-blue-600" />
                    Integrity
                  </div>
                  <div className="flex ml-5 items-center gap-3 font-gray-600">
                    <CornerDownRight />
                    <p>
                      Trust is the foundation of trade. We operate with complete
                      transparency and honesty.
                    </p>
                  </div>
                </li>
                <li className=" mt-4">
                  <div className="flex items-center gap-3 font-bold text-lg">
                    <CircleCheckBig className="text-blue-600" />
                    Innovation
                  </div>
                  <div className="flex ml-5 items-center gap-3 font-gray-600">
                    <CornerDownRight />
                    <p>
                      We continuously improve our processes to deliver
                      cutting-edge logistics solutions.
                    </p>
                  </div>
                </li>
                <li className=" mt-4">
                  <div className="flex items-center gap-3 font-bold text-lg">
                    <CircleCheckBig className="text-blue-600" />
                    Collaboration
                  </div>
                  <div className="flex ml-5 items-center gap-3 font-gray-600">
                    <CornerDownRight />
                    <p>
                      We work as partners with our clients, suppliers, and team
                      members globally.
                    </p>
                  </div>
                </li>

                <li className=" mt-4">
                  <div className="flex items-center gap-3 font-bold text-lg">
                    <CircleCheckBig className="text-blue-600" />
                    Excellence
                  </div>
                  <div className="flex ml-5 items-center gap-3 font-gray-600">
                    <CornerDownRight />
                    <p>
                      Precision, efficiency, and reliability in every step of
                      the supply chain.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us  */}
        <section className="w-full bg-gray-100 py-20">
          <div className="w-[80%] mx-auto flex flex-col justify-center text-black gap-10">
            <h1 className="text-5xl font-bold ">Why Choose Us?</h1>
            <Image
              src="/NA-truck2.jpg"
              alt="NA Truck"
              width={1500}
              height={1000}
              className="rounded-lg w-full"
            />
            <div className="flex flex-wrap md:flex-nowrap gap-10 text-xl">
              <div className="md:w-1/3 px-6 text-lg">
                <h1 className="font-bold text-2xl">Verified Suppliers</h1>
                <p className=" text-gray-600">
                  Every factory and supplier is thoroughly vetted and verified
                  to ensure quality, reliability, and ethical practices
                </p>
              </div>
              <div className="md:w-1/3 px-6 text-lg">
                <h1 className="font-bold text-2xl">Best Prices</h1>
                <p className=" text-gray-600">
                  Our direct relationships with factories allow us to negotiate
                  factory-direct prices and pass savings to you.
                </p>
              </div>
              <div className="md:w-1/3 px-6 text-lg">
                <h1 className="font-bold text-2xl">End-to-End Service</h1>
                <p className=" text-gray-600">
                  From sourcing to delivery, we handle every aspect of your
                  supply chain with expertise and care.
                </p>
              </div>
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
          <div className="absolute inset-0 z-0 w-[70%] mx-auto md:flex flex-row gap-10 md:h-1/3 h-fit bg-white text-black pr-3 hidden">
            <Image
              src="/cargo-plane2.jpg"
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
              Ready to Partner with NA UNITY?
            </h1>

            {/* CTA Buttons */}
            <div className="flex space-x-4">
              {/* Primary Button: "Ship a load today" (White background, black text) */}
              <a
                href="/services"
                className=" border-2 border-white text-white font-semibold py-3 px-6 rounded hover:bg-white hover:text-black transition duration-300 shadow-xl"
              >
                Our Service
              </a>

              {/* Secondary Button: "Haul with us" (Text-only with border) */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
