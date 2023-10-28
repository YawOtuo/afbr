"use client"
import { styled } from "@stitches/react";
// import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import SwiperSlideControls from "./SwiperSlideControls";
import TypeForm from "./TypeForm";
import DogDetailsForm from "./DogDetailsForm";
import UserDetailsForm from "./UserDetailsForm";
import { Form, Formik } from "formik";
import { Navigation, Pagination } from "swiper/modules";


export const RegistrationSlide = (props) => {
  const swiper = useSwiper()
  return (
    <Root>
      <div
        className="hero"
        style={{
          backgroundImage: "url('/images/litter-registrations-1.png')",
        }}>
        <div className="text-white text-uppercase">
          {props.type}

        </div>
      </div>
      <div className="w-100 my-5 pt-5 pb-20  text-left px-5 mx-5">
        <div className="pt-5 mt-5 register-text">
          <span className="brand-yellow-font">Register</span> your litter with us today

        </div>

        <Swiper className="domestic-swiper">

          <SwiperSlideControls />


          <SwiperSlide className="py-5">
            Price: $30
          </SwiperSlide>
          <SwiperSlide className="py-5">
            Price: $50hj

          </SwiperSlide>


        </Swiper>


      </div>
      <Formik>
        <Form>
          <Swiper

            // navigation
            modules={[Navigation]}
          >
            <SwiperSlide><TypeForm /></SwiperSlide>
            <SwiperSlide><DogDetailsForm /></SwiperSlide>
            <SwiperSlide><UserDetailsForm /></SwiperSlide>

          </Swiper>
        </Form>
      </Formik>

    </Root>
  )

};

const Root = styled('section', {
  ".hero": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "800",
    minHeight: "70vh",
    fontSize: "40px",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

  }
  ,
  ".register-text": {
    fontSize: "48px",
  },
  ".domestic-swiper": {
    paddingTop: "5%",
    width: "100%",
    textAlign: "left",
    display: "flex",
    flexDirection: "column-reverse",

  },
  ".domestic-tabs": {
    gap: "10px"
  }

})