<template>
  <div>
    <p>The lager opinion</p>
    <input
      id="teilnehmer-data"
      name="teilnehmer-data"
      type="file"
      @change="uploadData"
    />
  </div>
</template>

<script>
export default defineComponent({
  setup() {
    const uploadData = (e) => {
      console.log('event: ' + e);
      const teilnehmerFileElement = e.target;
      const teilnehmerFile = teilnehmerFileElement.files[0];
      console.log('teilnehmer file: ' + teilnehmerFile);
      const reader = new FileReader();
      reader.addEventListener('loadend', () => {
        const csvString = reader.result;
        window.localStorage.setItem('teilnehmerData', csvString);
      });
      reader.readAsText(teilnehmerFile);
    };
    return { uploadData };
  }
});
</script>

<style lang="scss"></style>
