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
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                    >登入</v-btn
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

    <Description />
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
      valid: true,
      studentId: "",
      studentIdRules: [
        (v) => !!v || "請輸入學號",
        (v) => (v && v.length === 9) || "請輸入學號正確格式",
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
      this.axios
        .get(
          "https://script.google.com/macros/s/AKfycbxbillG4f0kXyI1K-gO27-Hv1mJL7rF3ApXcu7dZP7R1dkdA_rJSLWCW6jT2IMRAv27nA/exec",
          {
            params: {
              m: "s",
              i: this.studentId,
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.formLoadingShow = false;
          this.formTipsShow = true;
          if (!response.data.err) {
            this.formTips = "請到信箱找找 Token";
          } else {
            this.formTips = "Error! 已經取得 Token 或其他錯誤";
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
  mounted: function () {},
};
</script>


<style>
</style>