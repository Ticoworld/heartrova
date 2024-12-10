import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const reviewsData = [
  {
    id: 1,
    userImage: "/sugar_daddy.webp",
    name: "Anonymous",
    userType: "Sugar Daddy",
    review: `I know it can be difficult to trust dating apps, especially the ones that promise discretion, but Find Love on heartrova actually sticks to its word. .`,
  },
  {
    id: 2,
    userImage: "/sugar_baby.webp",
    name: "Anonymous",
    userType: "Sugar Baby",
    review: `Omo! Thanks to heartrova o. My sugar daddy became my mentor, guiding me through tough career decisions. So much more than just a dating app!`,
  },
  {
    id: 3,
    userImage: "/sugar_daddy.webp",
    name: "Anonymous",
    userType: "Sugar Daddy",
    review: `Find Love on heartrova has completely transformed my experience. The quality of people here is unmatched, I love the platform's privacy and discretion .`,
  },
  {
    id: 4,
    userImage: "/sugar_baby.webp",
    name: "Anonymous",
    userType: "Sugar Baby",
    review: `My sugar daddy took me on my first trip outside Nigeria, and I had the best time! He also sends me flowers and gifts weekly! I struck gold! Thank you, Heartrova`,
  },
  {
    id: 5,
    userImage: "/sugar_daddy.webp",
    name: "Anonymous",
    userType: "Sugar Daddy",
    review: `I never thought I would find someone who shared the same interests and values as me. heartrova has been incredible in helping me connect with someone special.`,
  },
];

const Reviews = () => {
  return (
    <div className="lg:px-32 lg:py-28 px-10 py-24 bg-backgroundColor md:min-h-[90vh]">
      <h2 className="text-center text-4xl font-bold mb-8">
        What Our Members Say
      </h2>
      {/* <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="mySwiper"> */}

<Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={30}
        slidesPerView={1} // Default for mobile
        breakpoints={{
          640: {
            slidesPerView: 2, // For tablets
          },
          1024: {
            slidesPerView: 3, // For desktops
          },
        }}
        // navigation={true}
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        className="mySwiper"
      >
        {reviewsData.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <img
                  src={review.userImage}
                  alt="user"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.userType}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-700">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <button className="swiper-button-prev bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600">
          <FaChevronLeft />
        </button>
        <button className="swiper-button-next bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
