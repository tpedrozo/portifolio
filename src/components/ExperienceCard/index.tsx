import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
            y: -100,
            opacity: 0
        }}
        src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png"
        alt="sanity"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
    </article>
  );
}