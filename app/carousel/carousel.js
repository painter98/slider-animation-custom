"use client";
import React, { useState, useEffect, useRef } from "react";
import image1 from "../../assets/image/img1.jpg";
import image2 from "../../assets/image/img2.jpg";
import image3 from "../../assets/image/img3.jpg";
import image4 from "../../assets/image/img4.jpg";
import "./carousel.css";
import Image from "next/image";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);

  const images = [
    {
      src: image1,
      author: "ELEPHANT",
      title: "CATEGORY",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      src: image2,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      src: image3,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      src: image4,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 7000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentSlide]);

  return (
    <div className="carousel">
      <div className="list">
        {images.map((image, index) => (
          <div
            className={`item ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <Image src={image.src} alt={image.title} />
            <div className="content">
              <div className="author">{image.author}</div>
              <div className="title">{image.title}</div>
              <div className="topic">{image.topic}</div>
              <div className="des">{image.description}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {images.map((image, index) => (
          <div
            className={`item ${index === currentSlide ? "active" : ""}`}
            key={index}
            onClick={() => setCurrentSlide(index)}
          >
            <Image src={image.src} alt={image.title} />
            <div className="content">
              <div className="title">{image.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button id="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default Carousel;
