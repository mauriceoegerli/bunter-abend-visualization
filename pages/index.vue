<template>
  <div></div>
</template>

<script>
import Papa from 'papaparse';

export default defineComponent({
  setup() {
    onMounted(() => {
      const teilnehmerData = window.localStorage.getItem('teilnehmerData');
      const teilnehmerDataObj = Papa.parse(teilnehmerData);
      console.log(teilnehmerDataObj);
    });

    return {};
  }
});
</script>

<style lang="scss"></style>
