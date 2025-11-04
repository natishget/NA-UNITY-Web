import Image from "next/image";
import { CircleCheck } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="relative min-h-screen overflow-y-auto  text-white">
        {/* === Fixed Background Image (stays still when scrolling) === */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/about3.jpg"
            alt="Main Background"
            fill
            className="object-cover "
            priority
          />
        </div>

        <div className="absolute inset-0 w-full h-full bg-black/60 "></div>

        {/* === Hero Section (scrolls normally) === */}
        <section className="relative h-[650px] md:h-[750px]  w-full flex flex-col items-center justify-center ">
          {/* Hero Content */}

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl font-light mb-10">
            Comprehensive solutions for every step of your supply chain
          </p>
        </section>

        {/* === Other Sections (scroll normally) === */}
        <section className="relative w-full bg-black mb-92 text-white">
          <div className="w-[80%] flex flex-col md:flex-row justify-evenly gap-10 md:gap-0 items-center mx-auto py-20">
            <div className="md:w-[40%]">
              <h2 className="text-5xl font-bold mb-6 text-blue-600">
                Sourcing & Supplier Verification
              </h2>
              <p className="text-3xl mb-4">
                We connect you with pre-verified factories across China and the
                world, protecting you from fraud and unreliable partners.
              </p>
              <ul className="list-none mt-6 flex flex-col gap-4 text-lg text-gray-400">
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Factory audits and certifications
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Supplier background verification
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Quality standards assessment
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Compliance and regulatory checks
                </li>
              </ul>
            </div>
            <Image
              src="/sourcing-factory.jpg"
              alt="Sourcing Factory"
              width={800}
              height={500}
              className="md:w-[45%]"
            />
          </div>
        </section>

        <section className="relative w-full bg-black mb-92 text-white">
          <div className="w-[80%] flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly items-center mx-auto py-20">
            <Image
              src="/price-negotiation.jpg"
              alt="Sourcing Factory"
              width={800}
              height={500}
              className="md:w-[45%]"
            />
            <div className="md:w-[40%]">
              <h2 className="text-5xl font-bold mb-6 text-blue-600">
                Price Negotiation & Purchasing
              </h2>
              <p className="text-3xl mb-4">
                Our experts negotiate factory-direct prices and favorable
                payment terms to secure the best deals for your business.
              </p>
              <ul className="list-none mt-6 flex flex-col gap-4 text-lg text-gray-400">
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Factory-direct pricing
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Volume discounts negotiation
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Flexible payment terms
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Contract management
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quality Control & Pre-Shipment Inspections */}
        <section className="relative w-full bg-black mb-92 text-white">
          <div className="w-[80%] flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly items-center mx-auto py-20">
            <div className="md:w-[40%]">
              <h2 className="text-5xl font-bold mb-6 text-blue-600">
                Quality Control & Pre-Shipment Inspections
              </h2>
              <p className="text-3xl mb-4">
                We perform factory audits, sample testing, and inspections
                before shipping to ensure top quality standards.
              </p>
              <ul className="list-none mt-6 flex flex-col gap-4 text-lg text-gray-400">
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Factory inspections
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Sample testing and validation
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Quality assurance reports
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Defect documentation
                </li>
              </ul>
            </div>
            <Image
              src="/quality-control.jpg"
              alt="Sourcing Factory"
              width={800}
              height={500}
              className="md:w-[45%]"
            />
          </div>
        </section>

        {/* Warehousing & Consolidation */}
        <section className="relative w-full bg-black mb-92 text-white">
          <div className="w-[80%] flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly items-center mx-auto py-20">
            <Image
              src="/warehouse-storage.jpg"
              alt="Sourcing Factory"
              width={800}
              height={500}
              className="md:w-[45%]"
            />
            <div className="md:w-[40%]">
              <h2 className="text-5xl font-bold mb-6 text-blue-600">
                Warehousing & Consolidation
              </h2>
              <p className="text-3xl mb-4">
                We provide storage and order combination services in China and
                Ethiopia to optimize costs and reduce shipping times.
              </p>
              <ul className="list-none mt-6 flex flex-col gap-4 text-lg text-gray-400">
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Secure warehouse facilities
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Order consolidation services
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Inventory management
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Cost optimization
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Logistics & Delivery Management */}
        <section className="relative w-full bg-black mb-92 text-white">
          <div className="w-[80%] flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly items-center mx-auto py-20">
            <div className="md:w-[40%]">
              <h2 className="text-5xl font-bold mb-6 text-blue-600">
                Logistics & Delivery Management
              </h2>
              <p className="text-3xl mb-4">
                From factory to doorstep, we handle air, sea, and rail freight
                with complete tracking and documentation.
              </p>
              <ul className="list-none mt-6 flex flex-col gap-4 text-lg text-gray-400">
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Air, sea, and rail freight
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Customs clearance
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Shipping documentation
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Route planning and tracking
                </li>
              </ul>
            </div>
            <Image
              src="/logistics-tracking.jpg"
              alt="Sourcing Factory"
              width={800}
              height={500}
              className="md:w-[45%]"
            />
          </div>
        </section>

        {/* Payment & Transaction Support */}
        <section className="relative w-full bg-black mb-92 text-white">
          <div className="w-[80%] flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly items-center mx-auto py-20">
            <Image
              src="/payment-processing.jpg"
              alt="Sourcing Factory"
              width={800}
              height={500}
              className="md:w-[45%]"
            />
            <div className="md:w-[40%]">
              <h2 className="text-5xl font-bold mb-6 text-blue-600">
                Payment & Transaction Support
              </h2>
              <p className="text-3xl mb-4">
                We manage safe, transparent, verified payment channels, ideal
                for first-time importers and established businesses.
              </p>
              <ul className="list-none mt-6 flex flex-col gap-4 text-lg text-gray-400">
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Secure payment processing
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Multiple payment methods
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Transaction verification
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Fraud protection
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Customer & mediation */}
        <section className="relative w-full bg-black mb-92 text-white">
          <div className="w-[80%] flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly items-center mx-auto py-20">
            <div className="md:w-[40%]">
              <h2 className="text-5xl font-bold mb-6 text-blue-600">
                Customs & Mediation
              </h2>
              <p className="text-3xl mb-4">
                Our teams in China and Ethiopia manage all customs, paperwork,
                and dispute resolution, ensuring smooth trade flow.
              </p>
              <ul className="list-none mt-6 flex flex-col gap-4 text-lg text-gray-400">
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Customs documentation
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Regulatory compliance
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Dispute resolution
                </li>
                <li className=" w-fit gap-3 flex justify-center">
                  <CircleCheck />
                  Trade facilitation
                </li>
              </ul>
            </div>
            <Image
              src="/customs-clearance.jpg"
              alt="Sourcing Factory"
              width={800}
              height={500}
              className="md:w-[45%]"
            />
          </div>
        </section>

        {/* CTA Section */}
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
          <div className="absolute inset-0 z-0 w-[70%] mx-auto md:flex gap-10 h-fit bg-white text-black pr-3 hidden">
            <Image
              src="/cargo-plane.jpg"
              alt="Intelligent Logistics Background"
              width={300}
              height={600}
            />
            <div className="flex flex-col justify-center gap-7 p-6">
              <h6 className="text-2xl font-bold ">Why Choose Our Services</h6>
              <p className="text-xl">
                <span className="font-semibold">Global Network</span>: Leverage
                our extensive network of carriers and logistics partners to
                streamline your supply chain. <br />
                <span className="font-semibold">Real-Time Tracking</span>: Stay
                informed with our advanced tracking systems, providing
                transparency at every step. <br />
                <span className="font-semibold">Customized Solutions</span>: We
                tailor our logistics services to meet your unique business needs
                and goals.
              </p>
            </div>
          </div>

          {/* 3. Content Overlay (Text and Buttons) */}
          <div className="relative w-[80%] h-full flex flex-col justify-end gap-10 mb-44 z-10 text-white  pt-4 sm:pt-10 lg:pt-22">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Are you ready to get our services?
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
      </div>
    </>
  );
}
