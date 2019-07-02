<template>
  <div class="home-page__content">
    <h1 class="home-page__title">{{ title }}</h1>
    <div class="data__container">
      <PersonDataTable :personsList="currentPersonsList"></PersonDataTable>
    </div>
    <button class="download-button" @click="$store.dispatch('GET_TEXT_FILE')">Download</button>
  </div>
</template>

<script>
import PersonDataTable from "../components/PersonDataTable";
export default {
  name: "HomePage",
  components: { PersonDataTable },
  props: {
    title: {
      type: String,
      required: true,
      default: "Default app title"
    }
  },
  created() {
    this.$store.dispatch("GET_CONTACTS_LIST");
  },
  computed: {
    currentPersonsList() {
      return this.$store.getters.getCurrentPersonsList;
    }
  }
};
</script>

<style scoped lang="scss">
.download-button {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
}
</style>
