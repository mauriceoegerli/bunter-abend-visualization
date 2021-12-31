<template>
  <div class="homepage">
    <ClientOnly>
      <bar-chart
        :data="getDataForQuestion(i).data"
        v-for="i in 18"
        :key="`question-${i}`"
      ></bar-chart>
    </ClientOnly>
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
        debugger;
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
  .visualization-1 {
    width: 100%;
    display: flex;
    flex-direction: column;

    .balken {
      background-color: blue;
      flex-grow: 1;
      margin: 20px 0;
      height: 80px;
    }
  }
  .visualization-2 {
    width: 100%;
    display: flex;
    flex-direction: row;

    .item {
      padding: 10px;
      box-shadow: 0 0 5px black;
    }
  }
}
</style>
