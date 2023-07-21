import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Sphere,
  OrbitControls,
  PointMaterial,
} from "@react-three/drei";
import { ArrowSection } from "./ArrowSection";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

export const Hero = () => {
  const animation = useAnimation();
  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section
        id="home"
        className="h-[100vh] bg-primary flex items-center w-full flex-col"
      >
        <div className="container mx-auto h-full flex justify-center">
          <motion.div className="content-wrapper flex items-center" initial={{opacity:0, scale:0.7}} animate={animation}>
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex">
                <div className="w-1 mr-8 md:h-45 bg-gradient-to-br from-violet-500 via-pink-500 to-red-500" />
                <div className="text-content">
                  <h1 className="text-4xl lg:text-5xl pb-4 font-bold">
                    My name is <span className="text-fuchsia-800">Ewan</span>
                  </h1>
                  <p className="pb-4 max-w-[480px] text-lg text-left">
                    I'm a M-Biotech graduate with experience in data
                    engineering, analysis, and visualisation. I also love to
                    design, build and create. I am passionate about the maker
                    space and love tinkering with microcontrollers, 3-D
                    printing, and smart home technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-full lg:block hidden relative">
              <Canvas className="absolute inset-0">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.9} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={0.8}>
                  <MeshDistortMaterial
                    color="#86198F"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Canvas>
            </div>
          </motion.div>
        </div>
        <div className="bg-primary flex items-center justify-center">
          <ArrowSection />
        </div>
      </section>
    </InView>
  );
};
