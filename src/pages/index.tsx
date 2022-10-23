import type { NextPage } from 'next';
import Head from 'next/head';
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { WorkExperience } from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

       <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      <section id="workExperience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skill */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
