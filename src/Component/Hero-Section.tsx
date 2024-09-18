import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import React from "react";
// import "./App.css";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-black text-white">
      <div className="absolute inset-0 -z-20">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} />
          <Sphere
            visible
            args={[1.5, 100, 200]}
            scale={2.5}
            position={[0, 0, 0]}
          >
            <MeshDistortMaterial
              color="#0077b6"
              attach="material"
              distort={0.5}
              speed={1}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold mb-6"
        >
          Welcome to ExploreNow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl mb-12"
        >
          Your journey to the world's best destinations starts here.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Explore Now
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
