<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Serviços</h2>
        <p>O que eu posso fazer por você:</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="(service, key) in services" :key="key" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <component :is="service.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ service.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ service.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { react } from '@babel/types';
import { ArrowPathIcon } from '@heroicons/vue/24/outline'

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
    icon: ArrowPathIcon
  }, 
  "UI/UX": {
    name: "",
    description: "",
    icon: ArrowPathIcon
  }, 
  "Marca": {
    name: "",
    description: "",
    icon: ArrowPathIcon
  }, 
  "Logotipo": {
    name: "",
    description: "",
    icon: ArrowPathIcon
  }, 
})

onMounted(() => {
  data.value?.forEach((service: IServiceItem) => {
    const { name, description } = service
    Object.assign(services, { [service.name]: { ...services[name as keyof IService], name, description}})
  })
})
</script>