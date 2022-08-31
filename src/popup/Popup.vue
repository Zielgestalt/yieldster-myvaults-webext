<script setup lang="ts">
import { darkMode, storageDemo } from '~/logic/storage'

const mode = computed(() => {
  if (darkMode.value)
    return 'dark'
  else
    return ''
})

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <main :data-theme="mode">
    <div class="container text-flow">
      <div class="is-centered">
        <Logo />
      </div>

      <div>Popup</div>
      <p class="mt-2 opacity-50">
        This is the popup page
      </p>
      <button class="btn mt-2" @click="openOptionsPage">
        Open Options
      </button>
      <div class="mt-2">
        <span class="opacity-50">Storage:</span> {{ storageDemo }}
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  main {
    min-height: 600px;
    width: 100%;
  }
</style>
