// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//  import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
// import {
//   RxCrop,
//   RxPencil2,
//   RxDesktop,
//   RxReader,
//   RxRocket,
//   RxArrowTopRight,
// } from "react-icons/rx";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxCode,
  RxLayers,
  RxDashboard,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";

// // service data
// const serviceData = [
//   {
//     icon: <RxCrop />,
//     title: "Branding",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxPencil2 />,
//     title: "Design",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxDesktop />,
//     title: "Development",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxReader />,
//     title: "Copywriting",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxRocket />,
//     title: "SEO",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];

const serviceData = [
  {
    icon: <RxCode />,
    title: "Full-Stack",
    description: "Full-Stack, Build complete apps using the MERN stack.",
  },
  {
    icon: <RxDesktop />,
    title: "Frontend ",
    description: "Create responsive interfaces with modern React tools.",
  },
  {
    icon: <RxLayers />,
    title: "Backend",
    description: "Develop APIs and servers using Node.js and Express.",
  },
  {
    icon: <RxDashboard />,
    title: "Dashboard",
    description: "Custom admin panels for content and user management.",
  },
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Develop consistent UI components with reusable designs.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Convert UI/UX designs into responsive web layouts.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Implement basic SEO practices in React applications.",
  },
  {
    icon: <RxRocket />,
    title: " Optimization",
    description: "Deploy and optimize apps for fast performance.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 
            flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
             hover:bg-[rgba(89,65,169,0.15)] transation-all duration-300"
            >
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-none">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transation-all duration-300 " />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
