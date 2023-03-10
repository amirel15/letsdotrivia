<script setup></script>

<template>
  <main>
    <div class="card">
      <RouterView />
    </div>
  </main>
  <p class="score">Score: 100</p>
</template>

<style lang="postcss" scoped>
  main {
    @apply h-screen flex justify-center items-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900;
    & .card {
      @apply flex h-5/6 min-h-fit w-11/12 flex-col items-center gap-16 overflow-auto rounded-lg bg-gray-100 p-8 shadow-lg;
    }
  }

  .score {
  @apply absolute bottom-6 right-8 text-2xl font-bold uppercase text-slate-200;
}
</style>