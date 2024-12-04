"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image from "next/image";
import image4 from "../../assets/image/img4.jpg";
import image2 from "../../assets/image/img2.jpg";

const ParallaxEffectPage = () => {
  const parallaxRef = useRef(null);

  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
    <h1 style={{
              paddingTop: "80px",
              textAlign:'center'
            }}>Wildlife here....</h1>
      <Parallax ref={parallaxRef} pages={2}>
        <ParallaxLayer
          offset={1.3}
          speed={-0.5}
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              position: "relative",
              width: "35%",
              marginLeft: "60%",
              height: "300px",
            }}
          >
            <Image
              src={image4}
              alt="Parallax Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              position: "relative",
              width: "35%",
              marginLeft: "40%",
              height: "400px",
            }}
          >
            <Image
              src={image2}
              alt="Parallax Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxEffectPage;
