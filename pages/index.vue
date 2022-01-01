<template>
  <div class="homepage">
    <div class="item fake-item">
      <div class="start-container">
        <button class="play-btn" @click="onBtnPlay">play</button>
        <div class="start-logo">
          <img src="/ckjs-logo.png" />
          <p>The skilager opinion</p>
        </div>
      </div>
    </div>
    <div class="item" v-for="i in 12" :key="`question-${i}`">
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
    const audio = ref(null);
    const audioPlaying = ref(false);

    onMounted(() => {
      const teilnehmerData = window.localStorage.getItem('teilnehmerData');
      if (teilnehmerData) {
        const teilnehmerDataObj = Papa.parse(teilnehmerData);
        console.log(teilnehmerDataObj);
      }
      audio.value = new Audio('/soundtrack.mp3');
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
      const questionIndex = index;
      const teilnehmerData = window.localStorage.getItem('teilnehmerData');
      const teilnehmerDataObj = Papa.parse(teilnehmerData);
      console.log(teilnehmerDataObj);
      const returnData = { data: {}, title: 'null' };
      let description = true;
      teilnehmerDataObj.data.forEach((answer) => {
        // debugger;
        if (description) {
          returnData.title = answer[questionIndex];
        } else if (answer[questionIndex]) {
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

    const onBtnPlay = () => {
      if (audioPlaying.value) {
        audio.value.pause();
        audioPlaying.value = false;
      } else {
        audio.value.play();
        audioPlaying.value = true;
      }
    };

    return { csvData, getDataForQuestion, onBtnPlay, audio };
  }
});
</script>

<style lang="scss">
@font-face {
  font-family: 'Summit';
  src: local('Summit'),
    url(/Summit_TrueType/SummitRegular-Display.ttf) format('truetype');
}
.homepage {
  scroll-snap-type: x mandatory;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  .fake-item {
    width: 100vw;

    .start-container {
      width: 100vw;
      height: 100%;
      display: flex;
      position: relative;

      .play-btn {
        position: absolute;
        width: 400px;
        height: 400px;
        opacity: 0;
      }

      .start-logo {
        margin: auto;
        font-size: 5rem;
        font-family: 'Summit';
        display: flex;
        flex-direction: column;

        img {
          width: 700px;
          margin: 0 auto;
        }
      }
    }
  }

  .item {
    scroll-snap-align: start;
    height: 98vh;
    width: 100vw;
  }
}
</style>
