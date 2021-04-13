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
                學生意向調查
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
                          <strong class="success--text"
                            >一號候選人 - 李承嘉教授</strong
                          >
                        </div>
                      </template>
                    </v-radio>
                    <v-radio value="89c3cc62-92d6-49cb-8015-715eb729fcd7">
                      <template v-slot:label>
                        <div>
                          選擇
                          <strong class="success--text"
                            >二號候選人 - 黃朝盟教授</strong
                          >
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
            <div v-show="confirmPage">
              <v-card elevation="0" style="background-color: #fe63a2">
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <p style="font-size: 150%">
                          確定要投給
                          <strong style="color: #ffddec">{{
                            selectPerson
                          }}</strong>
                          嗎？
                        </p>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
              <br /><br />
              <v-row style="background-color: #e9e8e7">
                <v-col cols="12">
                  <v-row align="center" justify="center" length>
                    <v-btn
                      color="black"
                      elevation="12"
                      rounded
                      x-large
                      dark
                      v-on:click="confirmAndSend(true)"
                      style="font-size: 150%"
                      >確 定</v-btn
                    >
                    <v-btn
                      color="white"
                      elevation="12"
                      rounded
                      large
                      v-on:click="confirmAndSend(false)"
                      style="font-size: 100%"
                      >重 選</v-btn
                    >
                  </v-row>
                </v-col>
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
              <br /><br />
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
                  <p>
                    打開下方貼文並完成指定動作抽 Homepod
                    mini、雙人電影票，趕快行動吧！如無顯示，請到學生會粉專找尋。
                  </p>
                </v-row>
                <v-row align="center" justify="center" length>
                  <iframe
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowfullscreen="true"
                    frameborder="0"
                    height="712"
                    scrolling="no"
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNTPUSU%2Fposts%2F4018299674857366&amp;width=500&amp;show_text=true&amp;appId=460917074889007&amp;height=712"
                    style="border: none; overflow: hidden"
                    width="500"
                  ></iframe>
                </v-row>
              </div>
            </div>
            <br /><br />
            <v-card elevation="0">
              <v-row>
                <v-col cols="12" style="background-color: #e9e8e7">
                  <v-row align="center" justify="center" length>
                    <v-card
                      elevation="0"
                      max-width="344px"
                      style="background-color: #ebcfc4"
                    >
                      <p>
                        發生問題？ 寄信至
                        <br /><a href="mailto:ntpu-su-21th-it@googlegroups.com"
                          >ntpu-su-21th-it@googlegroups.com</a
                        >
                      </p>
                      <br>
                      <p style="color: red">信件撰寫請遵守信件禮儀，否則將有極大機率遭系統以垃圾郵件阻擋，進而導致無法收取信件</p>
                    </v-card>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <br /><br />

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
      confirmPage: false,
      selectPerson: "N/A",
      person: [
        {
          uuid: "6e384735-2c6b-4cee-9c57-8abc83e6d076",
          name: "一號候選人 - 李承嘉教授",
        },
        {
          uuid: "89c3cc62-92d6-49cb-8015-715eb729fcd7",
          name: "二號候選人 - 黃朝盟教授",
        },
      ],
      successApply: false,
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.formShow = false;
        // this.formLoadingShow = true;
        if (
          this.select_radios === "6e384735-2c6b-4cee-9c57-8abc83e6d076" ||
          this.select_radios === "89c3cc62-92d6-49cb-8015-715eb729fcd7"
        ) {
          if (this.studentId === base64.decode(this.$route.params.id)) {
            // this.sendTokenByStudentId();
            var searchFlag = false;
            for (var i = 0; i < this.person.length; i++) {
              // alert("start");
              if (this.select_radios === this.person[i].uuid) {
                // alert(this.select_radios);
                // alert(this.person[i].uuid);
                this.selectPerson = this.person[i].name;
                searchFlag = true;
              }
            }
            if (searchFlag) {
              this.confirmPage = true;
            } else {
              alert("那你很會駭欸");
              this.$router.push("/");
            }
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
    confirmAndSend(flag) {
      if (this.$refs.form.validate()) {
        this.formShow = false;
        this.confirmPage = false;
        this.formLoadingShow = true;
        if (
          this.select_radios === "6e384735-2c6b-4cee-9c57-8abc83e6d076" ||
          this.select_radios === "89c3cc62-92d6-49cb-8015-715eb729fcd7"
        ) {
          if (this.studentId === base64.decode(this.$route.params.id)) {
            if (flag) {
              this.sendTokenByStudentId();
            } else {
              this.formShow = true;
              this.formLoadingShow = false;
            }
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
      this.formTipsShow = false;
      let url =
        "https://script.google.com/macros/s/AKfycbyC6_nqD3wgMbSGYzlIoP2IKtjmVDcqJ5X_rpmkDRZu_TpJe0QLxOXyXRZeFgfVgY7LRw/exec?m=v&i=" +
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
          if (response.data.errCode == 403) {
            this.formTips = "Error! 現在非調查時間";
            this.tipsColor = "#FE7163";
            this.formLoadingShow = false;
            this.formTipsShow = true;
          } else {
            this.formLoadingShow = false;
            this.formTipsShow = true;
            if (!response.data.err) {
              this.formTips = "成功投票";
              this.tipsColor = "#BDFE63";
              this.successApply = true;
              localStorage.removeItem("stuid");
            } else {
              if (response.data.errCode == 3) {
                this.formTips = "Error! Token 輸入錯誤或其他錯誤";
              } else {
                this.formTips =
                  "Error! 你可能因嘗試攻擊或嘗試次數已達上限，故代碼已經封鎖，且無法再次申請";
              }
              this.formShow = true;
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
