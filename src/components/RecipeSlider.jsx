import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import RecipeCard from './RecipeCard';

function RecipeSlider({ recipes }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1.3} 
      centeredSlides={true} 
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {recipes.map((recipe) => (
        <SwiperSlide key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default RecipeSlider;
