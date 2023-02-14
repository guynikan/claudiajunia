<script setup>
const query = groq`*[_type == "jobs"]{ name, "cover": cover.asset._ref, alt, mainOne, mainTwo }`
const { data: jobs } = useSanityQuery(query)

const firstPart = computed(() => {
  return jobs.value.filter(job => !job.mainOne && !job.mainTwo).slice(0, 2)
})

const secondPart = computed(() => {
  return jobs.value.filter(job => !job.mainOne && !job.mainTwo).slice(2, 4)
})

const mainOne = computed(() => {
  return jobs.value.find((job) =>
    job.mainOne
  )
})

const mainTwo = computed(() => {
  return jobs.value.find((job) =>
    job.mainTwo
  )
})
</script>

<template>
  <!--   <ul>
   <li v-for="job in data" >
      <h2>
        {{ job.name }}
      </h2>
      <SanityImage :asset-id="job.cover" w="300" />
    </li>
  </ul> -->
  <section id="jobs" class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex w-full mb-20 flex-wrap">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Jobs</h1>
      </div>
      <div class="flex flex-wrap md:-m-2 -m-1">
        <div class="flex flex-wrap w-1/2">
          <div v-for="job in firstPart" class="md:p-2 p-1 w-1/2">
            <SanityImage :asset-id="job.cover" w="501" h="300" :alt="job.alt"
              class="w-full object-cover h-full object-center block" />
          </div>
          <div class="md:p-2 p-1 w-full">
            <SanityImage :asset-id="mainOne.cover" w="800" :alt="mainOne.alt"
              class="w-full h-full object-cover object-center block" />
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-full">
            <SanityImage :asset-id="mainTwo.cover" w="800" :alt="mainTwo.alt"
              class="w-full h-full object-cover object-center block" />
          </div>
          <div v-for="job in secondPart" class="md:p-2 p-1 w-1/2">
            <SanityImage :asset-id="job.cover" w="501" h="300" :alt="job.alt"
              class="w-full object-cover h-full object-center block" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
