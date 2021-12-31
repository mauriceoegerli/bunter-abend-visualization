<template>
  <div class="chart">
    <p class="chart-title"></p>
    <div
      class="chart-item"
      v-for="(value, name, index) in chartData.data"
      :key="`chart-item-${name}`"
    >
      <div class="chart-bar-container">
        <div
          class="chart-bar"
          :style="{
            width: `${(100 / maxValue) * value}%`,
            'background-color': colors[index]
          }"
        >
          <p class="chart-label">{{ name }}</p>
          <p class="chart-percent">{{ value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    chartData: Object
  },
  setup(props) {
    const maxValue = computed(() => {
      let arr = Object.values(props.chartData.data);
      let max = Math.max(...arr);
      return max;
    });

    const colors = [
      '#8cb3a7',
      '#8382ff',
      '#fcb9f7',
      '#e6e78c',
      '#e6e78c',
      '#f692eb',
      '#89ce9e',
      '#b7b3f5'
    ];

    return {
      maxValue,
      colors
    };
  }
});
</script>

<style lang="scss">
.chart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;

  .chart-item {
    flex-grow: 1;
    padding: 20px 0;
    .chart-bar-container {
      height: 100%;
      .chart-bar {
        position: relative;
        height: 100%;
        max-height: 80px;

        .chart-label {
          position: absolute;
          font-size: 50px;
          height: 100%;
          margin: 0 0 0 15px;

          width: 100vw;
        }

        .chart-percent {
          position: absolute;
          font-size: 50px;
          height: 100%;
          left: 87vw;
          margin: 0 0 0 15px;
        }
      }
    }
  }
}
</style>