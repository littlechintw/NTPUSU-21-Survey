<template>
  <div class="home">
    <v-card></v-card>
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
    return {};
  },
};
</script>