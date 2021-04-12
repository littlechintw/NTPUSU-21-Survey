<template>
  <div>
    <v-row>
      <v-col cols="12" style="background-color: #e9e8e7">
        <v-row align="center" justify="center" length>
          <h1>操作說明</h1>
        </v-row>
        <v-row align="center" justify="center" length>
          <v-divider></v-divider><br />
        </v-row>
        <v-row align="center" justify="center" length>
          <br />
        </v-row>
        <v-row align="center" justify="center" length>
          <h1 style="color: red">請使用單一裝置與單一瀏覽器完成調查</h1>
        </v-row>
        <v-row align="center" justify="center" length>
          <h2 style="color: red">
            請避免使用 Facebook、IG、Line
            等瀏覽器，請複製連結(包含本連結與專屬連結)到其他慣用瀏覽器 (如
            Chrome、Firefox、Safari 等)
          </h2>
        </v-row>
        <v-row align="center" justify="center" length>
          <br />
        </v-row>
        <v-row align="center" justify="center" length>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_u27HEj7IVY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-row>
        <v-row align="center" justify="center" length> <br /><br /> </v-row>
      </v-col>
    </v-row>

    <v-stepper v-model="e1" vertical>
      <v-stepper-step :complete="e1 > 1" step="1">
        輸入學號
        <!-- <small>Summarize if needed</small> -->
      </v-stepper-step>

      <v-stepper-content step="1">
        <p>
          在輸入框輸入學號，將會於您的
          <strong style="color: #a86262"
            >s{StudentID} [at] webmail.ntpu.edu.tw</strong
          >
          信箱內收到專屬代碼信件，如無收到，請在垃圾信件找尋。
        </p>
        <v-btn color="primary" @click="e1 = 2"> 繼續 </v-btn>
        <v-btn
          color="#738E9B"
          dark
          href="https://webmail.ntpu.edu.tw/indexi.html"
          target="_blank"
        >
          <v-icon left> mdi-mail </v-icon>北大信件系統</v-btn
        >
      </v-stepper-content>

      <v-stepper-step :complete="e1 > 2" step="2">
        複製專屬代碼
      </v-stepper-step>

      <v-stepper-content step="2">
        <p>複製信箱內的專屬代碼，並將代碼於信件內專屬連結內貼上。</p>
        <p style="color: #a86262">
          <b>注意！</b
          >專屬連結僅能在使用送出驗證代碼的裝置與瀏覽器上使用，否則將會失效且喪失調查資格，代碼亦不再補發。
        </p>
        <v-btn color="primary" @click="e1 = 3"> 繼續 </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e1 > 3" step="3"> 做出選擇 </v-stepper-step>

      <v-stepper-content step="3">
        <p>選擇心中理想的答案吧！</p>
        <v-btn color="primary" @click="e1 = 1"> 繼續 </v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: "Description",

  data: () => ({
    e1: 1,
  }),
};
</script>
