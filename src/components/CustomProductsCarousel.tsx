import "swiper/css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./productCard";
import SectionHead from "./UI/SectionHeader";
import { ProductItemTypes } from "../utils/user-types";

const CustomProductsCarousel = ({
  text,
  products,
}: {
  text: string;
  products: ProductItemTypes[];
}) => {
  return (
    <div className="section-sm">
      <div className="container custom-products-box">
        <SectionHead text={text} />
        <Swiper
          grabCursor={true}
          modules={[Autoplay]}
          slidesPerView="auto"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {products.map((product: ProductItemTypes) => (
            <SwiperSlide key={product._id} style={{ width: "24rem" }}>
              <ProductCard key={product._id} item={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomProductsCarousel;
