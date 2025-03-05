import React, { useState, useEffect, useRef } from "react";
import DefaultImage from "../images/default_news.webp";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading: "lazy";
}

const LazyImage: React.FC<LazyImageProps> = (props) => {
  const { src, alt, className, loading } = props;
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "500px",
      }
    );

    observer.observe(imageElement);

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : DefaultImage}
      alt={alt}
      className={className}
      loading={loading}
    />
  );
};

export default LazyImage;
