// src/App.tsx
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./App.css";
import HeroSection from "./Component/Hero-Section";

const App: React.FC = () => {
  return (
    <>
      <div>
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover -z-9999"
        >
          {" "}
          Hello
          <source src="./bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative min-h-screen overflow-hidden">
        <section className="relative h-screen w-full bg-black text-white">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover -z-20"
          >
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* 3D Sphere Background */}
          <div className="absolute inset-0 -z-10">
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
          <HeroSection />
        </section>

        {/* Scrollable Content Section */}
        <section className="h-screen bg-white text-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Discover New Places</h2>
            <p className="max-w-xl mx-auto text-lg">
              From breathtaking beaches to historic cities, we offer tours to
              the most beautiful locations in the world.
            </p>
          </div>
        </section>

        {/* Another Section */}
        <section className="h-screen bg-gray-100 text-gray-800 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Experience Adventures</h2>
            <p className="max-w-xl mx-auto text-lg">
              Whether you're seeking thrills or relaxation, our travel packages
              offer something for everyone.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-6 text-center">
          <p>© 2024 ExploreNow. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default App;
