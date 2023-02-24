<script lang="ts" setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

</script>
<template>
  <Popover class="relative bg-white z-20">
    <div class="mx-auto w-full px-5 xl:px-24">
      <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="popover">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900">Início</a>
          <a href="#services" class="text-base font-medium text-gray-500 hover:text-gray-900">Serviços</a>
          <a href="#jobs" class="text-base font-medium text-gray-500 hover:text-gray-900">Jobs</a>
          <NuxtLink to="/about" class="text-base font-medium text-gray-500 hover:text-gray-900">Sobre mim</NuxtLink>

        </PopoverGroup>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary">Vamos conversar</a>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
            
                <a href="#services" class="text-base font-medium text-gray-900 hover:text-gray-700">Serviços</a>
                <a href="#jobs" class="text-base font-medium text-gray-900 hover:text-gray-700">Jobs</a>
                <NuxtLink to="/about" class="text-base font-medium text-gray-900 hover:text-gray-700">Sobre mim</NuxtLink>
                <a href="#contact" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm">Vamos conversar</a>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
<style scoped lang="postcss">
.popover {
  @apply inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500;
}
</style>