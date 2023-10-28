"use client"
import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useSwiper } from 'swiper/react';

type Props = {
  count?: number;
};
const BackAndNextControls = ({ count }: Props) => {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(0);
  const [active, setActive] = useState("domestic")

  useEffect(() => {
    const handleSlideChange = () => {
      // console.log('Slide changed:', swiper.activeIndex);
      setActiveIndex(swiper.activeIndex);
    };

    if (swiper) {
      swiper.on('slideChange', handleSlideChange);

      return () => {
        swiper.off('slideChange', handleSlideChange);
      };
    }
  }, [swiper]);

  return (
    <Root>
      <div className=" flex">
        <button className='bg-transparent border-2 border-yellow1 w-[229px] h-[52px] flex items-center justify-center rounded-[32px] text-lg text-white font-semibold'
          onClick={() => { 
            swiper.slidePrev();
            setActive("intenational");
          }}
        >
          Back
        </button>


        <button
          className='bg-yellow1  w-[229px] h-[52px] flex items-center justify-center rounded-[32px] text-white text-lg font-semibold'
          onClick={() => {
            swiper.slideNext();
            setActive("intenational");
          }}
        >
          Next
        </button>
      </div>

    </Root>
  );
};

const Root = styled('div', {
  '& .arrow': {
    maxWidth: '24px',
    maxHeight: '24px',
    width: '24px',
    height: '24px',
    color: 'white',
  },
  "div:first-child": {
    gap: "2%"
  },
  '& .arrow-container': {
    maxWidth: '83px',
    maxHeight: '83px',
    width: '83px',
    height: '83px',
    backgroundColor: '#DDB771',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media screen and (max-width:500px)': {
      width: '61px',
      height: '61px',
    },
  },
});

export default BackAndNextControls;
