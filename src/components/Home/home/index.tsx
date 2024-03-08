import React from "react";
import { motion } from "framer-motion";
import Logo from "@/assets/logo.png";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import {
  HiOutlineLocationMarker,
  MdEventAvailable,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  FaXTwitter,
} from "@/assets/icons";

const HomeSection: React.FC = () => {
  const TypeingAnimation = ({
    sequence,
    className,
  }: {
    sequence: any;
    className: string;
  }) => {
    return (
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className={className}
        preRenderFirstString={false}
      />
    );
  };

  const Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={Variants}
      initial="hidden"
      whileInView="visible"
      className="flex items-end justify-center w-full min-h-[70dvh]"
    >
      <div className="p-2 py-16 sm:px-4 md:px-8 lg:px-14 md:flex-row flex flex-col-reverse justify-center items-center w-full max-w-[1350px]">
        <section className="md:w-[50%]">
          <span className="font-semibold sm:font-bold text-3xl md:text-4xl">
            <span>Hi, I&apos;m </span>
            <TypeingAnimation
              sequence={["Aayush 👋", 1000, "Developer 🖥️", 1000]}
              className="font-semibold sm:font-bold text-3xl md:text-4xl text-[#ff4593]"
            />
          </span>
          <hr className="my-4" />
          <p className="text-muted-foreground mt-5 text-justify">
            I&apos;m a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
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
            <a href="https://github.com/Aayush-Rathore" target="__blank">
              <IoLogoGithub
                size={30}
                className="hover:text-[#d45188] origin-center hover:-translate-y-1 transition-all duration-200"
              />
            </a>

            <a href="https://twitter.com/aayush_r_" target="__blank">
              <FaXTwitter
                size={30}
                className="hover:text-[#d45188] origin-center hover:-translate-y-1 transition-all duration-200"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/aayush-rathore-1a2ab0253/"
              target="__blank"
            >
              <IoLogoLinkedin
                size={30}
                className="hover:text-[#d45188] origin-center hover:-translate-y-1 transition-all duration-200"
              />
            </a>

            <a href="https://www.instagram.com/its.03aayu/" target="__blank">
              <IoLogoInstagram
                size={30}
                className="hover:text-[#d45188] origin-center hover:-translate-y-1 transition-all duration-200"
              />
            </a>
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
  );
};

export default HomeSection;
