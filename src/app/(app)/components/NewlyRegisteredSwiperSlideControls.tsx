// import { styled } from '@stitches/react';
// import { useEffect, useState } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import { useSwiper } from 'swiper/react';

// type Props = {
//   count?: number;
// };
// const NewlyRegisteredSwiperSlideControls = ({ count }: Props) => {
//   const swiper = useSwiper();
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const handleSlideChange = () => {
//       // console.log('Slide changed:', swiper.activeIndex);
//       setActiveIndex(swiper.activeIndex);
//     };

//     if (swiper) {
//       swiper.on('slideChange', handleSlideChange);

//       return () => {
//         swiper.off('slideChange', handleSlideChange);
//       };
//     }
//   }, [swiper]);

//   return (
//     <Root>
//       <div className="mt-5 flex w-full items-center justify-center">
//         <button
//           onClick={() => {
//             swiper.slidePrev();
//             setActiveIndex(swiper.activeIndex);
//           }}
//         >
//           <div className="arrow-container">
//             <IoIosArrowBack className="arrow" />
//           </div>
//         </button>

//         <div className="flex items-center justify-center gap-2 px-5 md:px-10 xl:px-24 flex-wrap">
//           {Array.from({ length: count })
//             .fill({})
//             .map((r, index) => (
//               <div
//                 className={
//                   index == activeIndex ? 'pag-circles-active' : 'pag-circles'
//                 }
//               ></div>
//             ))}
//         </div>
//         <button
//           onClick={() => {
//             swiper.slideNext();
//             setActiveIndex(swiper.activeIndex);
//           }}
//         >
//           <div className="arrow-container">
//             <IoIosArrowForward className="arrow" />
//           </div>
//         </button>
//       </div>
//     </Root>
//   );
// };

// const Root = styled('div', {
//   '& .arrow': {
//     maxWidth: '24px',
//     maxHeight: '24px',
//     width: '24px',
//     height: '24px',
//     color: 'white',
//   },
//   '& .pag-circles': {
//     maxWidth: '27px',
//     maxHeight: '27px',
//     width: '27px',
//     height: '27px',
//     color: 'white',
//     backgroundColor: '#D9D9D9',
//     borderRadius: '50%',
//     '@media screen and (max-width:500px)': {
//       width: '18px',
//       height: '17px',
//     },
//   },
//   '& .pag-circles-active': {
//     maxWidth: '27px',
//     maxHeight: '27px',
//     width: '27px',
//     height: '27px',
//     color: 'white',
//     backgroundColor: '#DDB771',
//     borderRadius: '50%',
//     '@media screen and (max-width:500px)': {
//       width: '18px',
//       height: '17px',
//     },
//   },
//   '& .arrow-container': {
//     maxWidth: '83px',
//     maxHeight: '83px',
//     width: '83px',
//     height: '83px',
//     backgroundColor: '#DDB771',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     '@media screen and (max-width:500px)': {
//       width: '61px',
//       height: '61px',
//     },
//   },
// });

// export default NewlyRegisteredSwiperSlideControls;
