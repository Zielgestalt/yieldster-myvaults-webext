<script setup lang="ts">
import { darkMode, storageDemo } from '~/logic/storage'

const mode = computed(() => {
  if (darkMode.value)
    return 'dark'
  else
    return ''
})
</script>

<template>
  <main :data-theme="mode">
    <div class="container text-flow is-flow-6">
      <div class="is-centered">
        <Logo />
      </div>
      <p>
        This is the options page
      </p>

      <label for="storageDemo">
        Label for Storage Demo:
        <input id="storageDemo" v-model="storageDemo" name="storageDemo">
      </label>

      <div class="toggle">
        <p>Dark Mode:</p>
        <label class="switch">
          <input v-model="darkMode" type="checkbox">
          <span class="slider round" />
        </label>
      </div>

      <div class="mt-4">
        Powered by Vite <pixelarticons-zap class="align-middle" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  label, fieldset legend {
    display: block;
    margin-bottom: calc(var(--size-5) * .25);
    font-weight: var(--fw-4);
  }

  .toggle {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 2.5rem;
    height: calc(1rem + 2px);
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    left: 1px;
    bottom: 1px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(1.25rem);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  </style>
