import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-black  ">
      <div className="w-[80%] mx-auto text-white py-20">
        <div className=" flex gap-5 items-center">
          <Image
            src="/NA-Unity.png"
            alt="NA UNITY LOGO"
            width={50}
            height={50}
            className=""
          />
          <h1 className="font-extrabold text-3xl">NA UNITY</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-40 mt-10 mb-5 text-2xl">
          <div>
            <h1 className="font-bold ">Solutions</h1>
            <ul className="text-gray-300 flex flex-col gap-4 mt-3">
              <li>Verified suppliers with audits & inspections</li>
              <li>Transparent quotes with no hidden fees</li>
              <li>Bilingual mediation (Amharic/English + Chinese) </li>
              <li>End-to-end logistics from sourcing to delivery</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold">Company</h1>
            <ul className="text-gray-300 flex flex-col gap-2 mt-3">
              <li>Home</li>
              <li>About US</li>
              <li>Service</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold">Resource</h1>
            <ul className="text-gray-300 flex flex-col gap-2 mt-3">
              <li className="flex items-center gap-2">
                <Mail />: info@naunity.com
              </li>
              <li className="flex items-center gap-2">
                <Phone />: +251 911 123 456
              </li>
            </ul>
          </div>
        </div>

        <section>
          <div>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </section>

        <section className="flex justify-between mt-10 pb-10">
          <p>@ 2025 NA UNITY </p>
          <p>Powered By Think Hub ET</p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
