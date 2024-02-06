<template>
    <div v-if="active" class="confirmation-modal">
      <div class="modal-content">
        <p>{{ message }}</p>
        <button @click="confirm">Yes</button>
        <button @click="close">No</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      active: {
        type: Boolean,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
    emits: ['confirm'],
    methods: {
      confirm() {
        this.$emit('confirm', true);
        this.close();
      },
      close() {
        this.$emit('confirm', false);
        this.active = false;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  