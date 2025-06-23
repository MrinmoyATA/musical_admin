<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-content lg:max-w-[1070px] md:pt-[15px] md:px-[15px] md:pb-[75px]"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
        <div
          class="lg:ltr:mr-[30px] lg:rtl:ml-[30px]"
          id="productDetailsImageSlides"
        >
          <swiper
            :spaceBetween="10"
            :loop="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2"
          >
            <swiper-slide>
              <img
                class="rounded-md"
                src="@/assets/images/products/product-details1.jpg"
                alt="product-details-image"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="rounded-md"
                src="@/assets/images/products/product-details2.jpg"
                alt="product-details-image"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="rounded-md"
                src="@/assets/images/products/product-details3.jpg"
                alt="product-details-image"
              />
            </swiper-slide>
          </swiper>

          <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="25"
            :slidesPerView="3"
            :loop="true"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper mt-[20px] md:mt-[25px]"
          >
            <swiper-slide>
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/products/product-details1.jpg"
                alt="product-details-image"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/products/product-details2.jpg"
                alt="product-details-image"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/products/product-details3.jpg"
                alt="product-details-image"
              />
            </swiper-slide>
          </swiper>
        </div>

        <div>
          <span
            class="inline-block text-xs relative rounded-sm text-success-700 mb-[14px] bg-success-50 py-[4px] ltr:pr-[16px] rtl:pl-[16px] ltr:pl-[37px] rtl:pr-[37px]"
          >
            <i
              class="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-[12px] rtl:right-[12px] mt-[.2px] !text-[19px]"
            >
              check
            </i>
            in stock
          </span>
          <h6 class="font-medium text-lg leading-[1.5] mb-[16px]">
            Apple MacBook Pro 16.2" with Liquid Retina XDR Display, M2 Max Chip
            with 12-Core CPU
          </h6>
          <div
            class="leading-none border-b border-gray-100 dark:border-[#172036] pb-[20px] md:pb-[25px] mb-[21px] text-md text-warning-500 flex items-center"
          >
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <span
              class="text-xs text-gray-500 dark:text-gray-400 relative top-[2px] ltr:ml-[15px] rtl:mr-[15px]"
            >
              (76 reviews)
            </span>
          </div>
          <div class="flex items-center">
            <span class="text-black dark:text-white font-bold text-lg">
              $3,499
            </span>
            <span class="text-md ltr:ml-[7px] rtl:mr-[7px] line-through">
              $3,799
            </span>
          </div>
          <div class="mt-[20px]">
            <div class="flex items-center">
              <span> Style: </span>
              <span
                class="font-medium text-black dark:text-white ltr:ml-[3px] rtl:mr-[3px]"
              >
                Apple M1 Pro Chip
              </span>
            </div>
            <div class="mt-[7px]">
              <button
                type="button"
                class="inline-block text-xs py-[4px] px-[15px] rounded-[4px] ltr:mr-[6px] rtl:ml-[6px] border border-gray-100 dark:border-[#172036]"
              >
                Apple M1 Max Chip
              </button>
              <button
                type="button"
                class="inline-block text-xs py-[4px] px-[15px] rounded-[4px] ltr:mr-[6px] rtl:ml-[6px] border border-orange-400 text-black dark:text-white font-semibold"
              >
                Apple M1 Pro Chip
              </button>
            </div>
          </div>
          <div class="mt-[15px]">
            <div class="flex items-center">
              <span> Capacity: </span>
              <span
                class="font-medium text-black dark:text-white ltr:ml-[3px] rtl:mr-[3px]"
              >
                1 TB
              </span>
            </div>
            <div class="mt-[6px]">
              <button
                type="button"
                class="inline-block text-xs py-[4px] px-[15px] rounded-[4px] ltr:mr-[6px] rtl:ml-[6px] border border-gray-100 dark:border-[#172036]"
              >
                512 GB
              </button>
              <button
                type="button"
                class="inline-block text-xs py-[4px] px-[15px] rounded-[4px] ltr:mr-[6px] rtl:ml-[6px] border border-orange-400 text-black dark:text-white font-semibold"
              >
                1 TB
              </button>
            </div>
          </div>
          <div class="mt-[15px]">
            <div class="flex items-center">
              <span> Color: </span>
              <span
                class="font-medium text-black dark:text-white ltr:ml-[3px] rtl:mr-[3px]"
              >
                Silver
              </span>
            </div>
            <div class="mt-[6px]">
              <button
                type="button"
                class="inline-block ltr:mr-[7px] rtl:ml-[7px] rounded-full w-[29px] h-[29px] bg-gray-100 border border-orange-400"
              ></button>
              <button
                type="button"
                class="inline-block ltr:mr-[7px] rtl:ml-[7px] rounded-full w-[29px] h-[29px] bg-gray-200 border border-gray-200"
              ></button>
            </div>
          </div>
          <div class="mt-[26px] flex items-center gap-[8px]">
            <div class="counter-container relative w-[102px]" id="inputCounter">
              <button
                class="decrease-btn top-1/2 -translate-y-1/2 absolute text-[20px] ltr:left-[17px] rtl:right-[17px] text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                @click="decrement"
              >
                -
              </button>
              <input
                type="text"
                class="counter text-base h-[34px] rounded-md text-center block w-full bg-primary-50 dark:bg-[#15203c] text-black outline-0 font-medium dark:text-white"
                v-model="internalValue"
                readonly
              />
              <button
                class="increase-btn top-1/2 -translate-y-1/2 absolute text-[20px] ltr:right-[17px] rtl:left-[17px] text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                @click="increment"
              >
                +
              </button>
            </div>
            <button
              type="button"
              class="rounded-md inline-block font-medium py-[6.5px] px-[21px] text-white bg-primary-500"
            >
              <span class="inline-block relative ltr:pl-[24px] rtl:pr-[24px]">
                <i
                  class="ri-shopping-cart-line absolute ltr:left-0 rtl:right-0 text-[17px] top-1/2 -translate-y-1/2"
                ></i>
                Add To Cart
              </span>
            </button>
          </div>
          <button
            type="button"
            class="mt-[20px] inline-block font-medium text-black dark:text-white"
          >
            <span class="flex items-center">
              <i
                class="ri-heart-line w-[31px] h-[31px] text-lg text-gray-500 dark:text-gray-400 leading-[33px] text-center ltr:mr-[10px] rtl:ml-[10px] rounded-full inline-block bg-gray-100 dark:bg-[#172036]"
              ></i>
              Add to wishlist
            </span>
          </button>
          <div class="mt-[11px] flex items-center">
            <i
              class="material-symbols-outlined w-[31px] h-[31px] !text-lg text-gray-500 dark:text-gray-400 !leading-[33px] text-center ltr:mr-[10px] rtl:ml-[10px] rounded-full inline-block bg-gray-100 dark:bg-[#172036]"
            >
              visibility
            </i>
            565 people are viewing the products
          </div>
          <ul
            class="my-[19px] border-t border-b border-gray-100 py-[15px] dark:border-[#172036]"
          >
            <li
              class="relative ltr:pl-[27px] rtl:pr-[27px] mb-[7px] last:mb-0 text-black dark:text-white"
            >
              <i
                class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] text-success-700"
              >
                check
              </i>
              Free delivery today
            </li>
            <li
              class="relative ltr:pl-[27px] rtl:pr-[27px] mb-[7px] last:mb-0 text-black dark:text-white"
            >
              <i
                class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] text-success-700"
              >
                check
              </i>
              100% money back Guarantee
            </li>
            <li
              class="relative ltr:pl-[27px] rtl:pr-[27px] mb-[7px] last:mb-0 text-black dark:text-white"
            >
              <i
                class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] text-success-700"
              >
                check
              </i>
              7 days product return policy
            </li>
          </ul>
          <ul class="mb-[20px]">
            <li class="mb-[6px] last:mb-0">
              SKU:
              <span class="font-medium text-black dark:text-white">
                SMTGS6T45
              </span>
            </li>
            <li class="mb-[6px] last:mb-0">
              Category:
              <span class="font-medium text-black dark:text-white">
                computer
              </span>
            </li>
            <li class="mb-[6px] last:mb-0">
              Tags:
              <span class="font-medium text-black dark:text-white">
                laptop, macbook, PC
              </span>
            </li>
          </ul>
          <div class="flex items-center gap-[4px]">
            <span class="relative text-md ltr:mr-[5px] rtl:ml-[5px] -top-px">
              Share:
            </span>
            <a
              href="#"
              class="w-[23.844px] h-[23.844px] text-sm leading-[23.844px] text-black dark:text-white bg-gray-100 dark:bg-[#172036] rounded-full text-center transition-all hover:text-white hover:bg-primary-500"
              target="_blank"
            >
              <i class="ri-facebook-fill"></i>
            </a>
            <a
              href="#"
              class="w-[23.844px] h-[23.844px] text-sm leading-[23.844px] text-black dark:text-white bg-gray-100 dark:bg-[#172036] rounded-full text-center transition-all hover:text-white hover:bg-primary-500"
              target="_blank"
            >
              <i class="ri-twitter-x-fill"></i>
            </a>
            <a
              href="#"
              class="w-[23.844px] h-[23.844px] text-sm leading-[23.844px] text-black dark:text-white bg-gray-100 dark:bg-[#172036] rounded-full text-center transition-all hover:text-white hover:bg-primary-500"
              target="_blank"
            >
              <i class="ri-linkedin-fill"></i>
            </a>
            <a
              href="#"
              class="w-[23.844px] h-[23.844px] text-sm leading-[23.844px] text-black dark:text-white bg-gray-100 dark:bg-[#172036] rounded-full text-center transition-all hover:text-white hover:bg-primary-500"
              target="_blank"
            >
              <i class="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";

import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default defineComponent({
  name: "ProductsDetails",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref<SwiperClass | null>(null);
    const internalValue = ref(1);

    const setThumbsSwiper = (swiper: SwiperClass) => {
      thumbsSwiper.value = swiper;
    };

    const increment = () => {
      internalValue.value++;
    };

    const decrement = () => {
      if (internalValue.value > 0) {
        internalValue.value--;
      }
    };
    return {
      internalValue,
      increment,
      decrement,
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Thumbs],
    };
  },
});
</script>
