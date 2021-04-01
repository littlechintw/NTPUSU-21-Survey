<template>
  <div class="home">
    <br />
    <v-card elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="12" style="background-color: #e9e8e7">
            <v-row align="center" justify="center" length>
              <img src="../image/cover.png" width="100%" />
            </v-row>
            <v-row align="center" justify="center" length> <br /><br /> </v-row>
            <v-row align="center" justify="center" length>
              <p
                style="
                  font-size: 18px;
                  line-height: 18px;
                  background-color: #e9e8e7;
                "
              >
                國立臺北大學第八任校長遴選
              </p>
            </v-row>
            <v-row align="center" justify="center" length>
              <p
                style="
                  font-size: 30px;
                  line-height: 18px;
                  background-color: #e9e8e7;
                "
              >
                意向調查
              </p>
            </v-row>
            <br /><br /><br />
            <div v-show="!start_btn">
              <v-row align="center" justify="center" length>
                <v-btn
                  color="black"
                  elevation="12"
                  rounded
                  x-large
                  dark
                  v-on:click="start_btn = !start_btn"
                  style="font-size: 150%"
                  >開 始</v-btn
                >
              </v-row>
            </div>
            <transition name="fade">
              <div v-if="start_btn">
                <Description />
                <br /><br />
                <v-row align="center" justify="center" length>
                  <v-btn
                    color="#87C1A2"
                    elevation="12"
                    rounded
                    x-large
                    dark
                    v-on:click="cont_btn = !cont_btn"
                    style="font-size: 150%"
                    >我看完說明了！！</v-btn
                  >
                </v-row>
              </div>
            </transition>
            <transition name="fade">
              <div v-if="cont_btn">
                <br /><br /><br />
                <div v-show="formShow">
                  <v-row align="center" justify="center" length>
                    <v-form
                      ref="form"
                      v-model="valid"
                      lazy-validation
                      :disabled="formClose"
                    >
                      <v-card
                        elevation="0"
                        width="344px"
                        style="background-color: #e9e8e7"
                      >
                        <v-progress-linear
                          buffer-value="0"
                          color="blue"
                          reverse
                          stream
                          value="0"
                        ></v-progress-linear>
                        <v-text-field
                          v-model="studentId"
                          :rules="studentIdRules"
                          type="number"
                          label="學號"
                          required
                        ></v-text-field>
                        <v-checkbox
                          v-model="checkbox_rule"
                          :rules="[(v) => !!v || 'You must agree to continue!']"
                          label="已經詳閱說明且確認目前使用環境足以完成調查 （為提升安全性，送出申請後將會綁定此瀏覽器為主要投票環境，如未使用此瀏覽器與裝置，將會無法參與投票，且失去投票資格，也請使用正常模式瀏覽網頁，使用無痕模式將不保證能成功運作。簡單來說，如果擔心，請複製網址，並打開 Chrome 或相關瀏覽器，並且勿打開無痕模式，當收到確認信件時，再將專屬網址複製至現在使用的瀏覽器，並貼上專屬代碼完成調查！）"
                          required
                        ></v-checkbox>
                        <v-btn
                          :disabled="!valid"
                          color="#87C1A2"
                          dark
                          class="mr-4"
                          @click="validate"
                          >發送驗證代碼</v-btn
                        >
                        <br /><br />
                        <v-progress-linear
                          buffer-value="0"
                          color="blue"
                          stream
                          value="0"
                        ></v-progress-linear>
                      </v-card>
                    </v-form>
                  </v-row>
                </div>

                <div v-show="formLoadingShow">
                  <v-row align="center" justify="center" length>
                    <v-progress-circular
                      indeterminate
                      color="amber"
                    ></v-progress-circular>
                  </v-row>
                </div>
                <div v-show="formTipsShow">
                  <v-row align="center" justify="center" length>
                    <v-card width="344" elevation="0" :color="tipsColor">
                      {{ formTips }}
                    </v-card>
                  </v-row>
                  <div v-show="successApply">
                    <v-row align="center" justify="center" length>
                      <br />
                    </v-row>
                    <v-row align="center" justify="center" length>
                      <v-btn
                        color="#738E9B"
                        dark
                        href="https://webmail.ntpu.edu.tw/indexi.html"
                        target="_blank"
                      >
                        <v-icon left> mdi-mail </v-icon>北大信件系統</v-btn
                      >
                    </v-row>
                  </div>
                </div>
              </div>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <br /><br />
  </div>
</template>

<script>
// @ is an alias to /src
import Description from "@/components/Description.vue";

export default {
  name: "Home",
  components: {
    Description,
  },
  data() {
    return {
      start_btn: false,
      cont_btn: false,
      valid: true,
      studentId: "",
      checkbox_rule: false,
      studentIdRules: [
        (v) => !!v || "請輸入學號",
        (v) => (v && v.length === 9) || "請輸入學號正確格式",
      ],
      formShow: true,
      formLoadingShow: false,
      formTips: "",
      formTipsShow: true,
      tipsColor: "#BDFE63",
      formClose: false,
      successApply: false,
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.formShow = false;
        this.formLoadingShow = true;
        this.sendTokenByStudentId();
      }
    },
    sendTokenByStudentId() {
      let url =
        "https://script.google.com/macros/s/AKfycbx-kVG_DCwT0XcgxWbORsmT2cElVVyOl6-QUgP5aEV5np9W-C4K79kU16JRf1yr_Gfo0g/exec?m=s&i=" +
        this.studentId +
        "&fl=1&f1=1&f2=3&f3=45";
      this.$http
        .get(url)
        .then((response) => {
          console.log(response);
          if (response.data.errCode == 77) {
            this.formTips = "Error! 超出調查時間";
            this.tipsColor = "#FE7163";
          } else {
            this.formLoadingShow = false;
            this.formTipsShow = true;
            if (!response.data.err) {
              this.tipsColor = "#BDFE63";
              this.successApply = true;
              this.formTips =
                "正在寄信至 s" +
                this.studentId +
                "@webmail.ntpu.edu.tw，請到信箱找找 Token";
              localStorage.setItem("stuid", this.studentId);
            } else {
              this.formTips = "Error! 已經取得 Token 或其他錯誤";
              this.tipsColor = "#FE7163";
            }
          }
        })
        .catch((error) => {
          console.log(error);
          this.formShow = true;
          this.formTipsShow = true;
          this.formTips = "無法存取後端服務";
          this.tipsColor = "#FE7163";
        });
    },
  },
  mounted: function () {
    if (localStorage.getItem("stuid")) {
      this.formTipsShow = true;
      this.formClose = true;
      this.tipsColor = "#FE7163";
      this.formTips = "Error! 噢不，你還在進行調查中，請勿重新申請";
    }
  },
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
