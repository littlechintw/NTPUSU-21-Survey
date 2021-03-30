<template>
  <div class="home">
    <br />
    <v-card elevation="0">
      <v-container fluid>
        <v-row style="background-color: #e9e8e7">
          <v-col cols="12">
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
            <br /><br />
            <div v-show="formShow">
              <v-row align="center" justify="center" length>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="studentId"
                    :rules="studentIdRules"
                    type="number"
                    label="學號"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="token"
                    :rules="tokenRules"
                    label="專屬代碼"
                    required
                  ></v-text-field>
                  <v-radio-group v-model="select_radios" :rules="selectRules">
                    <v-radio value="6e384735-2c6b-4cee-9c57-8abc83e6d076">
                      <template v-slot:label>
                        <div>
                          選擇
                          <strong class="success--text">測試人物 A</strong>
                        </div>
                      </template>
                    </v-radio>
                    <v-radio value="89c3cc62-92d6-49cb-8015-715eb729fcd7">
                      <template v-slot:label>
                        <div>
                          選擇
                          <strong class="success--text">測試人物 B</strong>
                        </div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                  <v-btn
                    :disabled="!valid"
                    color="#87C1A2"
                    class="mr-4"
                    @click="validate"
                    >選擇完成</v-btn
                  >
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
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <br /><br /><br /><br />

    <!-- <Description /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Description from "@/components/Description.vue";
let base64 = require("js-base64").Base64;
import md5 from "js-md5";

export default {
  name: "Home",
  components: {
    // Description,
  },
  data() {
    return {
      valid: true,
      studentId: "",
      studentIdRules: [
        (v) => !!v || "請輸入學號",
        (v) => (v && v.length === 9) || "請輸入學號正確格式",
      ],
      token: "",
      tokenRules: [
        (v) => !!v || "請輸入專屬代碼",
        (v) => (v && v.length === 40) || "請輸入專屬代碼正確格式",
      ],
      selectRules: [
        (v) =>
          v === "6e384735-2c6b-4cee-9c57-8abc83e6d076" ||
          v === "89c3cc62-92d6-49cb-8015-715eb729fcd7" ||
          "請做出選擇",
      ],
      select_radios: "N/A",
      formShow: true,
      formLoadingShow: false,
      formTips: "",
      formTipsShow: true,
      tipsColor: "#BDFE63",
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.formShow = false;
        this.formLoadingShow = true;
        if (
          this.select_radios === "6e384735-2c6b-4cee-9c57-8abc83e6d076" ||
          this.select_radios === "89c3cc62-92d6-49cb-8015-715eb729fcd7"
        ) {
          if (this.studentId === base64.decode(this.$route.params.id)) {
            this.sendTokenByStudentId();
          } else {
            alert("Oh! 請檢查輸入資料");
            this.formShow = true;
            this.formLoadingShow = false;
          }
        } else {
          alert("沒有選擇到呢..");
          this.formShow = true;
          this.formLoadingShow = false;
        }
      }
    },
    sendTokenByStudentId() {
      let url =
        "https://script.google.com/macros/s/AKfycbz2NO92j4yNf-esodG9iSz8-xwqJQ67kRKHTgi1hmf1YIVWoCL_Ns2k_MqblYgZNtRXpg/exec?m=v&i=" +
        this.studentId +
        "&d=" +
        md5(this.token) +
        "&s=" +
        this.select_radios +
        "&fl=1&f1=5&f2=9&f3=32";
      this.$http
        .get(url)
        .then((response) => {
          console.log(response);
          this.formLoadingShow = false;
          this.formTipsShow = true;
          if (!response.data.err) {
            this.formTips = "成功投票";
            this.tipsColor = "#BDFE63";
            localStorage.removeItem("stuid");
          } else {
            this.formTips = "Error! Token 輸入錯誤或其他錯誤";
            this.tipsColor = "#FE7163";
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
    let params_id = this.$route.params.id;
    if (!localStorage.getItem("stuid")) {
      alert("你不能用這種方式繞過");
      this.$router.push("/");
    }
    if (!params_id) {
      alert("你不能用這種方式繞過");
      this.$router.push("/");
    }

    var decodeStuId = "N/A";
    try {
      decodeStuId = base64.decode(params_id);
    } catch (e) {
      alert("你不能用這種方式繞過");
      this.$router.push("/");
    }

    if (decodeStuId != localStorage.getItem("stuid")) {
      alert("你不能用這種方式繞過");
      this.$router.push("/");
    }
  },
};
</script>


<style>
</style>
