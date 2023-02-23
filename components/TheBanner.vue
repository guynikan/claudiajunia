<template>
    <section class="text-gray-600 body-font">
        <div class="w-full pl-5 pr-32 py-24 flex bg-gradient-to-t from-secondary banner-bg">
            <div class="pr-32">
                <div class="img-container z-10">
                    <img src="https://picsum.photos/id/823/720" width="360" height="360" alt="">
                </div>
                <div class="flex justify-center py-10 z-10">
                    <a class="ml-3 text-secondary z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a class="ml-3 text-secondary z-10">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                            </path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </div>

            </div>
            <div class="p-5 flex flex-col items-start w-3/6 justify-center z-10">
                <h1 class="text-center text-3xl pb-3 text-primary">Claudia Junia</h1>
                <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in enim urna. Maecenas
                    fringilla vel tortor
                    eu bibendum. Donec elit libero, vestibulum vel dui eget, molestie aliquam metus. Nunc tortor massa,
                    condimentum et enim at, scelerisque varius arcu. Nullam augue quam, posuere hendrerit ligula ac, mattis
                    posuere mi. Curabitur tempor vitae mi vel venenatis.</p>
            </div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>

    </section>
</template>

<script setup>

</script>

<style scoped>
.img-container {
    position: relative;
    padding: 30px;
}

.img-container::after {
    content: '';
    border-radius: 999px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: conic-gradient(from 30deg,
            #A80E0B,
            #E6E8E6 46%,
            transparent 46%);
    -webkit-mask: radial-gradient(farthest-side,
            transparent calc(100% - 3px),
            #fff calc(100% - 3px + 1px));
    mask: radial-gradient(farthest-side,
            transparent calc(100% - 3px),
            #fff calc(100% - 3px + 1px));
}

img {
    border-radius: 999px;
    display: block;
}

.banner-bg {
    overflow: hidden;
    position: relative;
}

@keyframes gradient {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
}

.wave {
    background-color: #2a3d45;
    border-radius: 1000% 1000% 0 0;
    position: absolute;
    width: 200%;
    height: 32em;
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