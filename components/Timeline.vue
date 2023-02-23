<script setup>
const query = groq`*[_type == "timeline"]{ name, description, year}`
const { data: timeline } = useSanityQuery(query)

</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div v-for="(item, index) in timeline" class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div
          class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
          {{  index + 1  }}</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <div class="flex">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">{{  item.name }} - </h2>
            <span class="ml-1"> {{  item.year }}</span>
            </div>
            <p class="leading-relaxed">{{  item.description }}</p>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<style scoped></style>
