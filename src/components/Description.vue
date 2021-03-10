<template>
  <div>
    <h1>操作說明</h1>
    <v-divider></v-divider><br />
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1"> 輸入學號 </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">
          複製專屬代碼
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3"> 做出選擇 </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12 mx-auto" color="grey lighten-2">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  輸入學號以獲得專屬代碼與連結
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-container fluid style="text-align: center">
              <p>
                在輸入框輸入學號，將會於您的
                <strong>s{StudentID} [at] webmail.ntpu.edu.tw</strong>
                信箱內收到專屬代碼信件，如無收到，請在垃圾信件找尋。
              </p>
            </v-container>
          </v-card>
          <v-btn color="primary" @click="e1 = 2"> 下一步 </v-btn>
          <v-btn
            color="grey lighten-2"
            href="https://webmail.ntpu.edu.tw/indexi.html"
            target="_blank"
          >
            <v-icon left> mdi-mail </v-icon>北大信件系統
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12 mx-auto" color="grey lighten-2">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  複製專屬代碼
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-container fluid style="text-align: center">
              <p>複製信箱內的專屬代碼，並將代碼於信件內專屬連結內貼上。</p>
              <p>
                <b>注意！</b
                >專屬連結僅能在使用送出驗證代碼的裝置與瀏覽器上使用，否則將會失效且喪失調查資格，代碼亦不再補發。
              </p>
            </v-container>
          </v-card>
          <v-btn color="primary" @click="e1 = 3"> 下一步 </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12 mx-auto" color="grey lighten-2">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  做出選擇
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-container fluid style="text-align: center">
              <p>選擇心中理想的答案吧！</p>
            </v-container>
          </v-card>
          <v-btn color="primary" @click="e1 = 1"> 下一步 </v-btn>
        </v-stepper-content>
      </v-stepper-items>
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
