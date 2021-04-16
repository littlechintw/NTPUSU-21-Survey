<template>
  <div>
    <v-row>
      <v-col cols="12" style="background-color: #e9e8e7">
        <v-row align="center" justify="center" length>
          <h1>最終結果</h1>
        </v-row>
        <v-row align="center" justify="center" length>
          <v-divider></v-divider><br />
        </v-row>
        <v-row align="center" justify="center" length>
          <strong class="--text">一號候選人 - 李承嘉教授</strong>
          <v-progress-linear v-model="person1" color="#9B7575" height="25">
            <template>
              <strong>213 人</strong>
            </template>
          </v-progress-linear>

          <br /><br />

          <strong class="--text">二號候選人 - 黃朝盟教授</strong>
          <v-progress-linear v-model="person2" color="#9B7575" height="25">
            <template>
              <strong>121 人</strong>
            </template>
          </v-progress-linear>

          <br /><br />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Final",

  data: () => ({
    person1: (213 / (213 + 121)) * 100,
    person2: (121 / (121 + 213)) * 100,
  }),
};
</script>
