<template>
  <div class="default">
    <slot />
  </div>
</template>

<script>
export default defineComponent({
  setup() {}
});
</script>

<style lang="scss">
html,
body,
#__nuxt {
  margin: 0;
}

.default {
  .header {
    width: 100%;
    height: 80px;
    backdrop-filter: blur(10px) brightness(90%);
    padding: 11px;
    box-sizing: border-box;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    h1 {
      margin: 0;
      font-size: 40px;
    }
  }
}
</style>