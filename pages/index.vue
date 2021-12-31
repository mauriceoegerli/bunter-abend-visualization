<template>
  <div class="homepage">
    <!-- <div class="visualization-1">
      <div
        class="balken"
        v-for="(percent, index) in testdata"
        :key="index"
        :style="{ width: `${percent}%` }"
      ></div>
    </div>
    <div class="visualization-2">
      <div class="item" v-for="(percent, index) in testdata2" :key="index">
        {{ percent }}
      </div>
    </div> -->
    <ClientOnly>
      <bar-chart
        :data="[
          ['Work', 32],
          ['Play', 1492]
        ]"
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
      const returnData = [[]];

      const data = "[['Work', 32],['Play', 1492]]";
    };
    return { csvData };
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
