"use client";
import { TypeAnimation } from "react-type-animation";
import {
  HiOutlineLocationMarker,
  MdEventAvailable,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  FaXTwitter,
} from "@/assets/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Home() {
  const TypeingAnimation = () => {
    return (
      <TypeAnimation
        sequence={["Aayush 👋", 1000, "Developer 🖥️", 1000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        style={{ color: "#FF4593" }}
        className="font-semibold sm:font-bold text-3xl md:text-4xl"
      />
    );
  };

  const Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.div
        variants={Variants}
        initial="hidden"
        whileInView="visible"
        className="flex items-end justify-center w-full"
      >
        <div className="p-2 py-16 sm:px-4 md:px-8 lg:px-14 md:flex-row flex flex-col-reverse justify-center items-center w-full max-w-[1350px]">
          <section className="md:w-[50%]">
            <span className="font-semibold sm:font-bold text-3xl md:text-4xl">
              <span>Hi, I&apos;m </span>
              <TypeingAnimation />
            </span>
            <hr className="my-4" />
            <p className="text-muted-foreground mt-5 text-justify">
              I&apos;m a full stack developer (React.js & Node.js) with a focus
              on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive.
            </p>
            <div className="flex flex-col gap-2 mt-3">
              <span className="flex flex-row gap-3">
                <HiOutlineLocationMarker size={25} />
                <p className="text-muted-foreground">Madhya Pradesh, India</p>
              </span>
              <span className="flex flex-row gap-3">
                <MdEventAvailable size={25} />
                <p className="text-muted-foreground">
                  Available for new projects
                </p>
              </span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-start items-center gap-5 mt-5">
              <HoverCard>
                <HoverCardTrigger>
                  <IoLogoGithub size={25} className="hover:text-[#d45188]" />
                </HoverCardTrigger>
                <HoverCardContent>
                  The React Framework – created and maintained by @vercel.
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <IoLogoInstagram size={25} className="hover:text-[#d45188]" />
                </HoverCardTrigger>
                <HoverCardContent>
                  The React Framework – created and maintained by @vercel.
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <IoLogoLinkedin size={25} className="hover:text-[#d45188]" />
                </HoverCardTrigger>
                <HoverCardContent>
                  The React Framework – created and maintained by @vercel.
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <FaXTwitter size={25} className="hover:text-[#d45188]" />
                </HoverCardTrigger>
                <HoverCardContent>
                  The React Framework – created and maintained by @vercel.
                </HoverCardContent>
              </HoverCard>
            </div>
          </section>
          <section className="flex justify-center md:justify-end items-center p-10 md:w-[50%]">
            <Image
              src={Logo}
              alt="logo"
              width={266}
              height={266}
              priority
              className="w-[200px] sm:w-[250px] overflow-hidden"
            />
          </section>
        </div>
      </motion.div>
    </>
  );
}
