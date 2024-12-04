"use client";
import Image from "next/image.js";
import Carousel from "./carousel/carousel.js";
import ParallaxEffectPage from "./parallax/page.js";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
    <div>
     <Carousel />
     <ParallaxEffectPage/>
    </div>
    </ParallaxProvider>
  );
}
