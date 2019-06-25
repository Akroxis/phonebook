<template>
  <div class="person-data-row__content">
    <div class="person-name table-title">
      <input
        type="text"
        placeholder="Person's name"
        v-model="personName"
        ref="personNameInput"
        :disabled="isInputDisabled"
        :class="{ 'active-row': !isInputDisabled }"
      />
    </div>
    <div class="person-phone table-title">
      <input
        type="text"
        placeholder="Person's phone"
        v-model="personPhone"
        :disabled="isInputDisabled"
        :class="{ 'active-row': !isInputDisabled }"
      />
    </div>
    <div
      class="action-cell edit-cell table-title"
      :class="{ 'active-cell': !isInputDisabled }"
      @click="setInputActivity"
    >
      <img class="action-image" :src="editImageSrc" alt="Edit this row" />
    </div>
    <div class="action-cell delete-cell table-title">
      <img
        class="action-image"
        src="../assets/rubbish-bin.svg"
        alt="Delete this row"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonDataRow",
  props: {
    name: {
      type: String,
      required: true,
      default: "Unknown Person"
    },
    phone: {
      type: String,
      required: true,
      default: "Unknown phone"
    }
  },
  data() {
    return {
      personName: this.$props.name,
      personPhone: this.$props.phone,
      isInputDisabled: true,
      editImageSrc: require("../assets/edit.svg")
    };
  },
  methods: {
    setInputActivity() {
      this.isInputDisabled = !this.isInputDisabled;
      if (this.isInputDisabled) {
        this.editImageSrc = require("../assets/edit.svg");
      } else {
        this.editImageSrc = require("../assets/check-mark.svg");
        setTimeout(() => {
          this.$refs.personNameInput.focus();
        }, 500);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.person-data-row__content {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 40px;
  max-height: 40px;
  overflow: hidden;
  .table-title {
    flex-basis: 50%;
    border: 1px solid gray;
    border-top: none;
    border-right: none;
    input {
      border-color: transparent;
      outline: none;
      font-family: "Roboto-Regular", "Avenir", Helvetica, Arial, sans-serif;
      width: 95%;
      height: 70%;
    }
    input:disabled {
      background: transparent;
      color: black;
    }

    .action-image {
      width: 20px;
      height: 20px;
      padding: 7px 0;
    }
  }

  .table-title:nth-child(4) {
    border-right: 1px solid gray;
  }

  .person-phone {
    align-items: center;
  }

  .action-cell {
    flex-basis: 10%;
  }

  .active-cell {
    background-color: #6edb00 !important;
  }

  input.active-row {
    border-bottom: 1px solid #6edb00;
  }

  .edit-cell,
  .delete-cell {
    cursor: pointer;
  }
  .edit-cell {
    background-color: DodgerBlue;
  }

  .delete-cell {
    background-color: #ff3a09;
  }
}
</style>
