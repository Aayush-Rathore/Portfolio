import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import TiltCard from "./tiltCard";

function SkillsCard() {
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
  return (
    <>
      <Swiper
        autoplay={true}
        freeMode={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 5,
            centeredSlides: true,
          },
          "@0.50": {
            slidesPerView: 3,
            spaceBetween: 5,
            centeredSlides: true,
          },
          "@0.75": {
            slidesPerView: 4,
            spaceBetween: 7,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 12,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <TiltCard className={`block`}>
              <div className="hover:text-[#ec619b] flex gap-5 flex-col justify-center items-center transition-all duration-200">
                {skill.icon}
                <p className="font-bold">{skill.label}</p>
              </div>
            </TiltCard>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default SkillsCard;
