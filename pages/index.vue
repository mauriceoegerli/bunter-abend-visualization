<template>
  <div class="homepage">
    <div class="item" v-for="i in 11" :key="`question-${i}`">
      <ClientOnly>
        <chart :chartData="getDataForQuestion(i)" />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import Papa from 'papaparse';

export default defineComponent({
  setup() {
    onMounted(() => {
      const teilnehmerData = window.localStorage.getItem('teilnehmerData');
      if (teilnehmerData) {
        const teilnehmerDataObj = Papa.parse(teilnehmerData);
        console.log(teilnehmerDataObj);
      }
    });

    const csvData = {
      labels: ['chimichanga', 'helikopter', 'moonmen'],
      datasets: [
        {
          data: [7, 3, 2],
          label: 'Titel der Frage'
        }
      ]
    };
    const getDataForQuestion = (index) => {
      const questionIndex = index + 1;
      const teilnehmerData = window.localStorage.getItem('teilnehmerData');
      const teilnehmerDataObj = Papa.parse(teilnehmerData);
      console.log(teilnehmerDataObj);
      const returnData = { data: {}, title: 'null' };
      let description = true;
      teilnehmerDataObj.data.forEach((answer) => {
        // debugger;
        if (description) {
          returnData.title = answer[questionIndex];
        } else {
          if (returnData.data[answer[questionIndex]]) {
            returnData.data[answer[questionIndex]] =
              returnData.data[answer[questionIndex]] + 1;
          } else {
            returnData.data[answer[questionIndex]] = 1;
          }
        }
        description = false;
      });
      return returnData;
    };
    return { csvData, getDataForQuestion };
  }
});
</script>

<style lang="scss">
.homepage {
  scroll-snap-type: x mandatory;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  .item {
    scroll-snap-align: start;
    height: 98vh;
    width: 100vw;
  }
}
</style>
