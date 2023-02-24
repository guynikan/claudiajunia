<template>
    <section>
        <div class="xl:w-full xl:px-24 xl:pt-24 sm:pt-7 xl:pb-12 flex bg-gradient-to-t from-secondary banner-bg justify-center">
            <div class="pt-5 px-5 pb-2 flex flex-col justify-center z-10 items-center w-full">
                <div class="flex w-full xl:w-8/12 justify-between flex-col items-center">
                    <div class="highlight-container w-11/12 xl:w-8/12 xl:p-6">
                        <h1 class="text-center text-2xl xl:text-6xl px-8 text-secondary block w-full m-auto highlight xl:pb-2">{{  banner[0].title }}, </h1>
                    </div>
                    <h2 class="text-center text-2xl xl:text-6xl px-12 pb-10 xl:px-32 text-tertiary block w-full xl:w-10/12 m-auto relative"> {{  banner[0].subtitle }}</h2>
                </div>
            <div class="hidden xl:flex justify-between items-center w-full">
                <div class="xl:justify-center jis py-10 z-10 items-center flex">
                    <a href="https://www.linkedin.com/in/claudiajunia/" class="ml-3 text-tertiary z-10">
                            <Icon name="logos:linkedin-icon" size="2rem" />
                    </a>
                    <a href="https://www.behance.net/claudiajunia" class="ml-3 text-tertiary z-10">
                            <Icon name="logos:behance" size="7rem" />
                    </a>
                </div>
                    <div class="w-3/6 xl:w-1/6 xl:pb-3">

                    <Swiper :modules="[SwiperAutoplay]" :slidesPerView="3" :loop="true" :autoplay="{
                        delay: 2000,
                    }">
                        <SwiperSlide v-for="tool in tools" :key="slide">
                            <Icon :name="tool" size="2em" />
                        </SwiperSlide>
                    </Swiper>
                    </div>
            </div>
                <p class="text-tertiary text-center text-md xl:text-xl w-full xl:w-8/12 m-auto">{{  banner[0].description }}
                </p>
                <div class="flex xl:hidden justify-between items-center w-full">
                <div class="xl:justify-center jis py-3 z-10 items-center flex">
                    <a href="https://www.linkedin.com/in/claudiajunia/" class="ml-3 text-tertiary z-10">
                            <Icon name="logos:linkedin-icon" size="1.5rem" />
                    </a>
                    <a href="https://www.behance.net/claudiajunia" class="ml-3 text-tertiary z-10">
                            <Icon name="logos:behance" size="4rem" />
                    </a>
                </div>
                    <div class="w-3/6 xl:w-1/6 pb-3">

                    <Swiper :modules="[SwiperAutoplay]" :slidesPerView="3" :loop="true" :autoplay="{
                        delay: 2000,
                    }">
                        <SwiperSlide v-for="tool in tools" :key="slide">
                            <Icon :name="tool" size="1.5rem" />
                        </SwiperSlide>
                    </Swiper>
                    </div>
            </div>
                
            </div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>

    </section>
</template>

<script setup>
const tools = ['logos:adobe-photoshop', 'logos:adobe-illustrator', 'logos:adobe-indesign', 'logos:adobe-after-effects', 'logos:adobe-premiere', 'logos:figma']

const query = groq`*[_type == "banner"]{ title, subtitle, description }`
const { data: banner } = useSanityQuery(query)

</script>

<style scoped>

.banner-bg {
    overflow: hidden;
    position: relative;
}

.highlight-container, .highlight {
  position: relative;
}

.highlight-container {
  display: inline-block;
}
.highlight-container:before {
  content: " ";
  display: block;
  height: 95%;
  width: 85%;
  position: absolute;
  background: #a80e0b;
/*   transform: rotate(2deg); */
  top: 3px;
  left: 20px;
/*   border-radius: 20% 25% 20% 24%; */
  padding: 10px 3px 3px 10px;
}

@media only screen and (min-width: 1280px) {
    .highlight-container:before {
        height: 90%;
        width: 95%;
        top: 6px;
        left: 6px;
    }
}

.wave {
    background-color: #e6e8e6;
    border-radius: 1000% 1000% 0 0;
    position: absolute;
    width: 200%;
    height: 20em;
    animation: wave 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
    bottom: 0;
    left: 0;
    z-index: 1;
}

.wave:nth-of-type(2) {
    bottom: -1.25em;
    animation: wave 18s linear reverse infinite;
    opacity: 0.8;
}

.wave:nth-of-type(3) {
    bottom: -2.5em;
    animation: wave 20s -1s reverse infinite;
    opacity: 0.9;
}


@keyframes wave {
    2% {
        transform: translateX(1);
    }

    25% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(1);
    }
}
</style>