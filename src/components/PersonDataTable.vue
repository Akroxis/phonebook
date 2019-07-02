<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="person-data-table__container">
    <button class="add-contact__button" @click="isModalVisible = true">
      Add contact
    </button>
    <table
      class="person-data-table__content"
      cellpadding="0"
      v-if="checkPersonsList"
    >
      <thead>
        <tr class="table-titles">
          <th class="first-table-title table-title">Name</th>
          <th class="second-table-title table-title">Phone</th>
          <th class="third-table-title table-title">Edit</th>
          <th class="fourth-table-title table-title">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr class="person-data__body">
          <td v-for="person in personsList" :key="person.id">
            <PersonDataRow
              :name="person.name"
              :phone="person.phone"
              :id="person._id"
            ></PersonDataRow>
          </td>
        </tr>
      </tbody>
    </table>
    <AddContactPop
      v-if="isModalVisible"
      title="Add new contact"
      @close="isModalVisible = false"
    >
      <template v-slot:body>
        <input
          type="text"
          placeholder="Person's name"
          v-model="newContactName"
          ref="personNameInput"
        />
        <input
          type="text"
          placeholder="Person's phone"
          v-model="newContactPhone"
          ref="personPhoneInput"
        />
      </template>
      <template v-slot:footer>
        <button class="confirmAdd-btn" @click="addNewUser">Confirm</button>
      </template>
    </AddContactPop>
  </div>
</template>

<script>
import PersonDataRow from "./PersonDataRow";
import AddContactPop from "./DefaultPopUp";
export default {
  name: "PersonDataTable",
  components: { PersonDataRow, AddContactPop },
  data() {
    return {
      isModalVisible: false,
      newContactName: "",
      newContactPhone: ""
    };
  },
  props: {
    personsList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    checkPersonsList() {
      return !!this.$store.getters.getCurrentPersonsList.length;
    }
  },
  methods: {
    addNewUser() {
      const data = {
        name: this.newContactName,
        phone: this.newContactPhone
      };
      this.$store.dispatch("ADD_NEW_CONTACT", data).then(resolve => {
        this.isModalVisible = false;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.person-data-table__container {
  width: 60%;
  margin: 20px auto;
  display: flex;
  flex-flow: column nowrap;
}
.add-contact__button {
  display: flex;
  align-self: flex-end;
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 5px 15px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 10px;
}
.person-data-table__content {
  width: 100%;
  border-collapse: collapse;

  .table-titles {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
  }

  .table-title {
    flex-basis: 50%;
    border: 1px solid gray;
    border-right: none;
    background: rgba(255, 255, 255, 1);
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      rgba(255, 255, 255, 1) 0%,
      rgba(246, 246, 246, 1) 47%,
      rgba(237, 237, 237, 1) 100%
    );
    background: -webkit-gradient(
      radial,
      center center,
      0px,
      center center,
      100%,
      color-stop(0%, rgba(255, 255, 255, 1)),
      color-stop(47%, rgba(246, 246, 246, 1)),
      color-stop(100%, rgba(237, 237, 237, 1))
    );
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      rgba(255, 255, 255, 1) 0%,
      rgba(246, 246, 246, 1) 47%,
      rgba(237, 237, 237, 1) 100%
    );
    background: -o-radial-gradient(
      center,
      ellipse cover,
      rgba(255, 255, 255, 1) 0%,
      rgba(246, 246, 246, 1) 47%,
      rgba(237, 237, 237, 1) 100%
    );
    background: -ms-radial-gradient(
      center,
      ellipse cover,
      rgba(255, 255, 255, 1) 0%,
      rgba(246, 246, 246, 1) 47%,
      rgba(237, 237, 237, 1) 100%
    );
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 1) 0%,
      rgba(246, 246, 246, 1) 47%,
      rgba(237, 237, 237, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );
  }

  .table-title:nth-child(4) {
    border-right: 1px solid gray;
  }

  .third-table-title,
  .fourth-table-title {
    flex-basis: 10%;
  }

  .person-data__body {
    display: flex;
    flex-flow: column nowrap;
  }
}
</style>
