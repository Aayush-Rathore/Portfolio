"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeToggler } from "../themeToggler/themeToggler";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FiMenu } from "@/assets/icons";
import styles from "./navbar.module.css";
import Image from "next/image";
import Logo from "@/assets/Ar.png";

type NavItemProps = {
  text: string;
  href: string;
  active?: boolean;
  onClick?: any;
};

const NavItem: React.FC<NavItemProps> = ({ text, href, active, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`font-medium text-lg hover:text-[#D8005B] md:before:w-full ${
        active && "decoration-slice"
      }`}
      id={styles.links}
    >
      <Link href={href}>{text}</Link>
    </li>
  );
};

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/" },
  { text: "Contact", href: "/" },
];

const Navbar: React.FC = () => {
  const [isActive, setActive] = useState(0);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    const previous: any = scrollY.getPrevious();
    if (value > previous) {
      console.log(hidden);
      setHidden(true);
    } else {
      console.log(hidden);
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        hidden: { y: "-100%" },
        visible: {
          y: 0,
          transition: {
            delay: 0.4,
          },
        },
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      className="flex justify-between items-center p-5 md:px-20 md:py-6 sticky top-0 bg-background shadow-lg"
    >
      <Image src={Logo} alt="Logo" className="w-16 sm:w-20 md:w-24" />
      <nav className="flex justify-center items-center gap-6">
        <ul className="hidden md:flex justify-center items-center gap-6">
          {MENU_LIST.map((item, index) => {
            return (
              <NavItem
                key={index}
                href={item.href}
                text={item.text}
                active={index === isActive}
                onClick={() => setActive(index)}
              />
            );
          })}
        </ul>
        <ThemeToggler />
        <div
          className="hidden sm:flex flex-row relative before:rounded-full after:rounded-full before:bg-black after:bg-foreground before:bg-foreground before:w-[35px] after:w-[35px] before:h-[35px] after:h-[35px] before:absolute before:left-0"
          id={styles.btnDiv}
        >
          <Button className="relative hover:translate-x-[35px] transition-all duration-300 hover:bg-primary/900">
            Download CV
          </Button>
        </div>
        <span className="block md:hidden">
          <Popover>
            <PopoverTrigger onClick={() => setOpen(!isOpen)}>
              <FiMenu size={26} />
            </PopoverTrigger>
            <PopoverContent className="md:hidden flex flex-col justify-center gap-3">
              <ul className="flex flex-col justify-center gap-1">
                {MENU_LIST.map((item, index) => {
                  return (
                    <NavItem
                      key={index}
                      href={item.href}
                      text={item.text}
                      active={index === isActive}
                      onClick={() => setActive(index)}
                    />
                  );
                })}
              </ul>
              <Button className="sm:hidden">Download CV</Button>
            </PopoverContent>
          </Popover>
        </span>
      </nav>
    </motion.header>
  );
};

export default Navbar;
