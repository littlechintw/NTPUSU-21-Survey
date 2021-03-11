<template>
  <div class="home">
    <br />
    <v-card elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center" length>
              <p style="font-size: 64px">2021 校長遴選意向調查</p>
            </v-row>
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
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                    >發送驗證代碼</v-btn
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
                <v-card width="344" elevation="0" color="#BDFE63">
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
      formShow: true,
      formLoadingShow: false,
      formTips: "",
      formTipsShow: true,
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
        "https://script.google.com/macros/s/AKfycbxbillG4f0kXyI1K-gO27-Hv1mJL7rF3ApXcu7dZP7R1dkdA_rJSLWCW6jT2IMRAv27nA/exec?m=v&i=" +
        this.studentId +
        "&d=" +
        md5(this.token) +
        "&s=6e384735-2c6b-4cee-9c57-8abc83e6d076";
      this.$http
        .get(url)
        .then((response) => {
          console.log(response);
          this.formLoadingShow = false;
          this.formTipsShow = true;
          if (!response.data.err) {
            this.formTips = "成功投票";
            localStorage.setItem("stuid", this.studentId);
          } else {
            this.formTips = "Error! Token 輸入錯誤或其他錯誤";
          }
        })
        .catch((error) => {
          console.log(error);
          this.formShow = true;
          this.formTipsShow = true;
          this.formTips = "無法存取後端服務";
        });
    },
  },
  mounted: function () {
    let params_id = this.$route.params.id;
    if (!localStorage.getItem("stuid")) {
      alert("你不能用這種方式繞過0");
      this.$router.push("/");
    }
    if (!params_id) {
      alert("你不能用這種方式繞過1");
      this.$router.push("/");
    }

    var decodeStuId = "N/A";
    try {
      decodeStuId = base64.decode(params_id);
    } catch (e) {
      alert("你不能用這種方式繞過2");
      this.$router.push("/");
    }

    if (decodeStuId != localStorage.getItem("stuid")) {
      alert("你不能用這種方式繞過3");
      this.$router.push("/");
    }
  },
};
</script>


<style>
</style>