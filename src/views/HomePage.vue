<template>
  <div class="home-page__content">
    <h1 class="home-page__title">{{ title }}</h1>
    <div class="data__container">
      <PersonDataTable :personsList="currentPersonsList"></PersonDataTable>
    </div>
    <button class="download-button" @click="downloadPhoneBook">Download</button>
  </div>
</template>

<script>
import PersonDataTable from "../components/PersonDataTable";
import instance from "axios";

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
  },
  methods: {
    downloadPhoneBook() {
      instance({
        url: "http://localhost:3000/contacts/phonebook",
        method: "GET",
        responseType: "blob"
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "phonebook.txt");
        document.body.appendChild(link);
        link.click();
      });
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
