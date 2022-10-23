import Link from "next/link";
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackgroundCircle } from '../BackgroundCircles';
import { HeroButton } from "./HeroButton";

type Props = {};

export function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Thiago Pedrozo",
      'Guy-who-loves-coffee.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        src="https://github.com/tpedrozo.png"
        className="relative rounded-full h-32 w-32 object-cover"
        style={{ marginTop: 0 }}
        alt="Thiago Pedrozo"
      />
      <div className="relative" >
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Front-end
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="mt-5">
          <Link href="#about">
            <HeroButton className="hero__button" text="About" />
          </Link>
          <Link href="#experience">
            <HeroButton className="hero__button" text="Experience" />
          </Link>
          <Link href="#skills">
            <HeroButton className="hero__button" text="Skills" />
          </Link>
          <Link href="#projects">
            <HeroButton className="hero__button" text="Projects" />
          </Link>
        </div>
      </div>
    </div>
  );
}
