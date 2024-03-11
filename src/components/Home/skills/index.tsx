"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import {
  FaReact,
  FaHtml5,
  SiNextdotjs,
  DiJavascript1,
  BiLogoRedux,
  BiLogoTypescript,
  SiExpress,
  FaNodeJs,
  SiRedis,
  FaAws,
  TbBrandVscode,
} from "@/assets/icons";
import { TypeAnimation } from "react-type-animation";
import SkillsCard from "./swiper";
import TiltCard from "./tiltCard";

const skills = [
  { icon: <FaHtml5 size={70} />, label: "HTML/CSS" },
  { icon: <DiJavascript1 size={70} />, label: "Java Scipt" },
  { icon: <BiLogoTypescript size={70} />, label: "Type Scipt" },
  { icon: <FaReact size={70} />, label: "React.js" },
  { icon: <SiNextdotjs size={70} />, label: "Next.js" },
  { icon: <BiLogoRedux size={70} />, label: "Redux" },
  { icon: <FaNodeJs size={70} />, label: "Node.js" },
  { icon: <SiExpress size={70} />, label: "Express.js" },
  { icon: <SiRedis size={70} />, label: "Redis" },
  { icon: <FaAws size={70} />, label: "S3 SDK" },
  { icon: <TbBrandVscode size={70} />, label: "Vs Code" },
];

const SkillsSection: React.FC = () => {
  const Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

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

  return (
    <motion.div
      className="flex items-end justify-center w-full"
      variants={Variants}
      transition={{ delay: 0.2 }}
      initial="hidden"
      whileInView="visible"
    >
      <div className="px-2 sm:px-4 md:px-8 lg:px-14 flex-col flex w-full max-w-[1350px]">
        <TypeingAnimation
          sequence={["_Skills", 1000, "_", 100]}
          className="font-semibold sm:font-semibold text-2xl md:text-3xl text-[#ff4593]"
        />
        <Separator className="my-4" />
        <motion.div
          className="w-full flex gap-5 md:gap-10 md:flex-wrap justify-center items-center my-10"
          variants={Variants}
          initial="hidden"
          whileInView={isInView ? "hidden" : "visible"}
          transition={{ delay: 0.8 }}
        >
          <SkillsCard />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
