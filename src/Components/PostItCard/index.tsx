"use client";

import "swiper/css";
import React, { useEffect, useRef, useState } from "react";
import { SwiperPostIts } from "../SwiperPostIts";

export const PostItCards = () => {
  const [windowWidth, setWindowWidth] = useState<number | false>(
    typeof window !== "undefined" && window.innerWidth
  );
  const [slidesPerView, setSlidesPerView] = useState<number>(1);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      breakpoints(window.innerWidth);
    };

    if (windowWidth) breakpoints(windowWidth);

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowWidth]);

  const breakpoints = (width: number) => {
    if (width > 1440) {
      return setSlidesPerView(4);
    } else if (width > 1024) {
      return setSlidesPerView(3);
    } else if (width > 768) {
      return setSlidesPerView(2);
    }
    return setSlidesPerView(1);
  };

  return (
    <React.Fragment>
      <SwiperPostIts slidesPerView={slidesPerView} />
    </React.Fragment>
  );
};
