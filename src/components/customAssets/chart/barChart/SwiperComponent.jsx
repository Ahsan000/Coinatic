import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import "./styles.css";
import TinyBarChart from "./TinyBarChart";
import { Paper } from "@mui/material";
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function SwiperComponent() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <TinyBarChart id={`chart-${i}`} />
      </SwiperSlide>
    );
  }

  const thumbs = [];
  for (let i = 0; i < 5; i += 1) {
    thumbs.push(
      <SwiperSlide
        key={`thumb-${i}`}
        tag="li"
        style={{ listStyle: "none" }}
        style={{ backgroundColor: "#262525" }}
        // sx={{ backgroundColor: "#262525" }}
      >
        <TinyBarChart id={`chart-${i}`} />
      </SwiperSlide>
    );
  }

  const slides2 = [];

  return (
    <React.Fragment>
      <Paper sx={{ backgroundColor: "#262525" }}>
        <Swiper
          id="main"
          thumbs={{ swiper: thumbsSwiper }}
          controller={{ control: controlledSwiper }}
          tag="section"
          wrapperTag="ul"
          navigation
          spaceBetween={5}
          slidesPerView={4}
          onInit={(swiper) => console.log("Swiper initialized!", swiper)}
          onSlideChange={(swiper) => {
            console.log("Slide index changed to: ", swiper.activeIndex);
          }}
          onReachEnd={() => console.log("Swiper end reached")}
        >
          {slides}
        </Swiper>

        <Swiper id="controller" onSwiper={setControlledSwiper}>
          {slides2}
        </Swiper>
      </Paper>
    </React.Fragment>
  );
}

export default SwiperComponent;
