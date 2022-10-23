import { motion } from 'framer-motion';

type Props = {};
export function About({}: Props) {
  return (
    <motion.div 
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 1.5 }}
     
     className="flex flex-col relative h-screen text-center md:text-start md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl w-56 text-end">
        About
      </h3>
      <motion.img
        src="https://github.com/tpedrozo.png"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 md:h-95 xl:w-[300px] xl:h-[400px]"
      />

      <div className=" space-y-10 px-0 md:px-10 ">
        <h4 className="font-semibold text-4xl">
          Here is a{' '}
          <span className="underline decoration-[#F7ab0a]/50 text-[#F7ab0a]">little</span>
          {'  '} background{' '}
        </h4>
        <p className="text-base">
          Passionate about education and changing people's lives through
          programming. More than 200,000 people have already undergone one of my
          trainings.
        </p>
      </div>
    </motion.div>
  );
}

