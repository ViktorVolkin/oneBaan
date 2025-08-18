"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export function ApartmentImageSwiper({ images }: { images: string[] }) {
	return (
		<Swiper
			modules={[Pagination]}
			pagination={{ clickable: true }}
			slidesPerView={1}
			loop={true}
			style={{ width: "100%", height: "100%" }}
		>
			{images.map((src, index) => (
				<SwiperSlide key={index}>
					<img
						loading="lazy"
						src={src}
						alt={`Apartment image ${index + 1}`}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
