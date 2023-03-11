<script setup>
import { onMounted, ref } from 'vue'
import useApi from '@/composables/useApi'
import BaseTitle from "@/components/BaseTitle.vue"

const api = useApi();
const categories = ref([]);

onMounted(async () => {
  categories.value = await api.getCategories();
});
</script>

<template>
  <!-- -->
  <BaseTitle>
    <template #logo>
      <img src="logo.svg" alt="logo"/>
    </template>
    Let's Do Trivia
  </BaseTitle>
  <div class="categories">
    <RouterLink v-for="category in categories"
      :key="category.id"
      :to="`/question/category/${category.id}`"
      class="category">
</template>

<style lang="postcss" scoped>
.categories {
  @apply grid flex-grow grid-cols-4 gap-12;
  & .category {
    @apply flex h-32 items-center justify-center rounded-lg border-4 border-cyan-500 py-4 font-bold uppercase text-center text-slate-600 transition-colors duration-300;
    &:hover {
      @apply cursor-pointer border-sky-800 bg-sky-600 text-white;
    }
  }
}
</style>