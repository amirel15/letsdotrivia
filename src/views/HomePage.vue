<script setup>
</script>

<template>
  <div class="brand">
    <img class="logo" src="logo.svg" alt="logo" />
    <h1 class="title">Let's Do Trivia</h1>
    <img class="logo" src="logo.svg" alt="logo" />
  </div>
  <div class="categories">
    <RouterLink v-for="n in 24" :key="n" :to="`/question/category/${n}`" class="category">
      Category - {{ n }}
    </RouterLink>
  </div>
</template>

<style lang="postcss" scoped>
.brand {
  @apply flex items-center justify-center gap-4;
  & .logo {
    @apply h-12 w-12;
  }
  & .title {
    @apply text-5xl font-semibold uppercase tracking-widest text-indigo-900;
  }
}
.categories {
  @apply grid flex-grow grid-cols-4 gap-12;
  & .category {
    @apply flex h-32 w-40 items-center justify-center rounded-lg border-4 border-cyan-500 py-4 font-bold uppercase text-slate-600 transition-colors duration-300;
    &:hover {
      @apply cursor-pointer border-sky-800 bg-sky-600 text-white;
    }
  }
}
</style>