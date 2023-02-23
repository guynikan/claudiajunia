<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="w-full px-8 lg:px-16">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="font-semibold leading-8 tracking-tight text-tertiary text-6xl pb-8">Serviços</h2>
        <p class="text-xl">O que eu posso fazer por você:</p>
      </div>
      <div class="w-full mt-16 sm:mt-20 lg:mt-24">
        <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-20 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="(service, key) in services" :key="key" class="relative flex flex-col items-center">
              <div class="top-0 left-0 flex h-24 w-24 items-center justify-center rounded-lg bg-primary">
                <component :is="service.icon" class="h-16 w-16 text-white" aria-hidden="true" />
              </div>
            <dt class="font-semibold leading-7 text-tertiary text-2xl pt-6">
              {{ service.name }}
            </dt>
            <dd class="mt-2 text-xl leading-7 text-tertiary text-center">{{ service.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BookOpenIcon, UsersIcon, FingerPrintIcon, PresentationChartBarIcon } from '@heroicons/vue/24/outline'

export interface IServiceItem {
  name: string,
  description: string,
  icon: any
}

export interface IService {
  "Identidade Visual": IServiceItem
}

const query = groq`*[_type == "services"]{ name, description }`
const { data } = useSanityQuery<[] | null>(query)

let services: IService  = reactive({
  "Identidade Visual": {
    name: "",
    description: "",
    icon: FingerPrintIcon
  }, 
  "Apresentações": {
    name: "",
    description: "",
    icon: PresentationChartBarIcon
  }, 
  "Stationary": {
    name: "",
    description: "",
    icon: BookOpenIcon
  }, 
  "Endomarketing": {
    name: "",
    description: "",
    icon: UsersIcon
  }, 
})

onMounted(() => {
  data.value?.forEach((service: IServiceItem) => {
    const { name, description } = service
    Object.assign(services, { [service.name]: { ...services[name as keyof IService], name, description}})
  })
})
</script>