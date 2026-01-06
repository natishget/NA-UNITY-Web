import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  AtSign,
  Linkedin,
  Facebook,
  Instagram,
  CircleDotDashed,
  Send,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-black  ">
      <div className="w-[80%] mx-auto text-white py-20">
        <div className=" flex gap-5 items-center">
          {/* <Image
            src="/NA-Unity.png"
            alt="NA UNITY LOGO"
            width={50}
            height={50}
            className=""
          /> */}
          <img
            src="/NA-Unity.png"
            alt="NA UNITY LOGO"
            width={50}
            height={50}
            className=""
          />
          <h1 className="font-extrabold text-3xl">NA UNITY</h1>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 lg:gap-30 gap-20 mt-10 mb-5 text-2xl">
          <div>
            <h1 className="font-bold ">Solutions</h1>
            <ul className="text-gray-300 flex flex-col gap-4 mt-3">
              <li className="flex gap-2 items-center">
                {" "}
                <CircleDotDashed /> Verified suppliers with audits & inspections
              </li>
              <li className="flex gap-2 items-center">
                <CircleDotDashed /> Transparent quotes with no hidden fees
              </li>
              <li className="flex gap-2 items-center">
                <CircleDotDashed /> Bilingual mediation (Amharic/English +
                Chinese)
              </li>
              <li className="flex gap-2 items-center">
                <CircleDotDashed />
                End-to-end logistics from sourcing to delivery
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold">Company</h1>
            <ul className="text-gray-300 flex flex-col gap-2 mt-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About US</Link>
              </li>
              <li>
                <Link href="/services">Service</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold">Contacts</h1>
            <ul className="text-gray-300 flex flex-col gap-2 mt-3">
              <li>
                <a
                  href="mailto:info@naunity.com"
                  className="flex items-center gap-2"
                >
                  <Mail />: info@naunity.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="tel:+251911123456" className="flex items-center gap-2">
                  <Phone />: +251 911 123 456
                </a>
              </li>
            </ul>
          </div>
        </div>

        <section>
          <div className="flex gap-5 text-3xl">
            <a href="https://web.facebook.com/profile.php?id=61581694134430">
              <Facebook />
            </a>
            <a href="https://www.tiktok.com/@na_sourcing?is_from_webapp=1&sender_device=pc">
              <AtSign />
            </a>
            <a href="https://www.linkedin.com/in/na-unity-trading-165922386/">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/na_unitytrading/?hl=en">
              <Instagram />
            </a>
            <a href="https://t.me/NA_Sourcing">
              <Send />
            </a>
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
