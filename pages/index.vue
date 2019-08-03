<template>
  <div class="container">
    <div>
      <logo />

      <h1 class="font-sans font-light text-5xl text-gray-700 tracking-wide">
        David Hahn
      </h1>

      <h2 class="subtitle">
        The future of your yesterday is my now.
      </h2>

      <div class="links">
        <a
          href="https://twitter.com/_hahnzilla"
          target="_blank"
        >
          <font-awesome-icon size="3x" :icon="['fab', 'twitter']" />
        </a>

        <a
          href="https://github.com/dhahn"
          target="_blank"
          class="ml-4"
        >
          <font-awesome-icon size="3x" :icon="['fab', 'github']" />
        </a>

        <a
          href="https://www.linkedin.com/in/david-michael-hahn"
          target="_blank"
          class="ml-4"
        >
          <font-awesome-icon size="3x" :icon="['fab', 'linkedin']" />
        </a>

        <a
          href="mailto:davidmichaelhahn@gmail.com"
          target="_blank"
          class="ml-4"
        >
          <font-awesome-icon size="3x" :icon="['fas', 'envelope-open']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
