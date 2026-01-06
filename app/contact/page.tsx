"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const myMessage = `service request: %0A - Full Name: ${formData.name}%0A - Email: ${formData.email}%0A - Phone: ${formData.phone}%0A - Company Name: ${formData.company}%0A - Subject: ${formData.subject}%0A - Message: ${formData.message}%0A%0A%0A Powered By Think HUB ET Innovations!!`;

      const token = "";
      const chat_id = "";
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${myMessage}&parse_mode=html`;

      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();

      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      alert("Message failed to send. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="w-full bg-white  ">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#0000FF] to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          {/* <Image
            src="/hero-contact.jpg"
            alt="Background"
            fill
            className="object-cover"
          /> */}

          <img
            src="/hero-contact.jpg"
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Let's Simplify Trade Together
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Have a sourcing or logistics request? Reach out to our team today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <div className="bg-white w-full py-20">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className={`${isLoaded ? "animate-slide-in-left" : ""}`}>
            <h2 className="text-4xl font-bold text-[#262626] mb-8">
              Get in Touch
            </h2>

            {/* China Office */}
            <div className="mb-8 p-6 bg-[#f5f5f5] rounded-lg border-l-4 border-[#0000FF]">
              <div className="flex items-start gap-4 mb-4">
                <MapPin
                  className="text-[#0000FF] flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-bold text-[#262626] mb-2">
                    China Office
                  </h3>
                  <p className="text-[#262626]">Guangzhou, Guangdong, China</p>
                </div>
              </div>
            </div>

            {/* Ethiopia Office */}
            <div className="mb-8 p-6 bg-[#f5f5f5] rounded-lg border-l-4 border-[#0000FF]">
              <div className="flex items-start gap-4 mb-4">
                <MapPin
                  className="text-[#0000FF] flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-bold text-[#262626] mb-2">
                    Ethiopia Office
                  </h3>
                  <p className="text-[#262626]">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-8 p-6 bg-[#f5f5f5] rounded-lg border-l-4 border-[#0000FF]">
              <div className="flex items-start gap-4">
                <Mail className="text-[#0000FF] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-[#262626] mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@naunity.com"
                    className="text-[#0000FF] hover:underline"
                  >
                    info@naunity.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8 p-6 bg-[#f5f5f5] rounded-lg border-l-4 border-[#0000FF]">
              <div className="flex items-start gap-4">
                <Phone
                  className="text-[#0000FF] flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-bold text-[#262626] mb-2">
                    Phone
                  </h3>
                  <p className="text-[#262626] mb-1">China: +86 XXX XXX XXXX</p>
                  <p className="text-[#262626]">Ethiopia: +251 XXX XXX XXX</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-[#f5f5f5] rounded-lg border-l-4 border-[#0000FF]">
              <div className="flex items-start gap-4">
                <Clock
                  className="text-[#0000FF] flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-bold text-[#262626] mb-2">
                    Business Hours
                  </h3>
                  <p className="text-[#262626] mb-1">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-[#262626]">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isLoaded ? "animate-slide-in-right" : ""}`}>
            <div className="bg-[#f5f5f5] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#262626] mb-6">
                Send us a Message
              </h3>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">✓</div>
                  <h4 className="text-xl font-bold text-green-700 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-green-600">
                    We've received your message and will get back to you within
                    24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-black">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-[#262626] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-[#0000FF] focus:ring-2 focus:ring-[#0000FF] focus:ring-opacity-20"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-[#262626] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-[#0000FF] focus:ring-2 focus:ring-[#0000FF] focus:ring-opacity-20"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-[#262626] mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-[#0000FF] focus:ring-2 focus:ring-[#0000FF] focus:ring-opacity-20"
                      placeholder="+251 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-bold text-[#262626] mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-[#0000FF] focus:ring-2 focus:ring-[#0000FF] focus:ring-opacity-20"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-bold text-[#262626] mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-[#0000FF] focus:ring-2 focus:ring-[#0000FF] focus:ring-opacity-20 text-black"
                    >
                      <option value="">Select a subject</option>
                      <option value="sourcing">Sourcing Request</option>
                      <option value="logistics">Logistics Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-[#262626] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-[#cccccc] rounded focus:outline-none focus:border-[#0000FF] focus:ring-2 focus:ring-[#0000FF] focus:ring-opacity-20 resize-none"
                      placeholder="Tell us about your sourcing or logistics needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#0000FF] text-white rounded font-bold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Office Image */}
      <div className="bg-[#f5f5f5]">
        <div className="w-[80%] mx-auto py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-4">
              Our Offices
            </h2>
            <p className="text-lg text-[#262626]">
              Professional spaces where we serve our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`rounded-lg overflow-hidden shadow-lg ${
                isLoaded ? "animate-scale-in" : ""
              }`}
            >
              {/* <Image
                src="/office-guangzhou.jpg"
                alt="China Office"
                width={500}
                height={400}
                className="w-full h-96 object-cover"
              /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469661.48059154203!2d112.89820136266466!3d23.125255243103886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3402f895a35c2bc7%3A0xe59e075adeae415!2sGuangzhou%2C%20Guangdong%20Province%2C%20China!5e0!3m2!1sen!2set!4v1761909926989!5m2!1sen!2set"
                width="500"
                height="400"
                loading="lazy"
                className="w-full h-96 object-cover"
              ></iframe>

              <div className="p-6 bg-black">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Guangzhou, China
                </h3>
                <p className="text-white">
                  Our div sourcing hub with direct access to manufacturers
                </p>
              </div>
            </div>
            <div
              className={`rounded-lg overflow-hidden shadow-lg ${
                isLoaded ? "animate-scale-in" : ""
              }`}
              style={{ animationDelay: "100ms" }}
            >
              {/* <Image
                src="/office-addis-ababa.jpg"
                alt="Ethiopia Office"
                width={500}
                height={400}
                className="w-full h-96 object-cover"
              /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.1183993542!2d38.695743821630046!3d8.963167731097077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1761909660261!5m2!1sen!2set"
                width="500"
                height="400"
                loading="lazy"
                className="w-full h-96 object-cover"
              ></iframe>
              <div className="p-6 bg-black">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Addis Ababa, Ethiopia
                </h3>
                <p className="text-white">
                  Our operations center for logistics and customer support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white w-full py-20">
        <div className="w-[80%] mx-auto ">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#262626]">
              Quick answers to common inquiries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#262626] mb-3">
                What's the minimum order quantity?
              </h3>
              <p className="text-[#262626]">
                We work with businesses of all sizes. Minimum quantities vary by
                product. Contact us to discuss your specific needs.
              </p>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#262626] mb-3">
                How do you ensure product quality?
              </h3>
              <p className="text-[#262626]">
                We conduct factory audits, sample testing, and pre-shipment
                inspections. Quality is guaranteed.
              </p>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#262626] mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-[#262626]">
                We accept bank transfers, letters of credit, and other secure
                payment methods. We'll work with you to find the best option.
              </p>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#262626] mb-3">
                Do you provide after-sales support?
              </h3>
              <p className="text-[#262626]">
                Yes, we provide ongoing support including warranty claims,
                replacements, and technical assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-[#f5f5f5] py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-8">
            Follow Us
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://web.facebook.com/profile.php?id=61581694134430"
              className="w-12 h-12 bg-[#0000FF] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-xl"
            >
              f
            </a>
            <a
              href="https://www.linkedin.com/in/na-unity-trading-165922386/"
              className="w-12 h-12 bg-[#0000FF] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-xl"
            >
              in
            </a>
            <a
              href="https://www.tiktok.com/@na_sourcing?is_from_webapp=1&sender_device=pc"
              className="w-12 h-12 bg-[#0000FF] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-xl"
            >
              @
            </a>
          </div>
          <p className="text-[#262626] mt-6">
            @NAUnity on Instagram, TikTok, and LinkedIn
          </p>
        </div>
      </div>
    </div>
  );
}
