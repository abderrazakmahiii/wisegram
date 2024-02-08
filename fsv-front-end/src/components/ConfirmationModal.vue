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
  .confirmation-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.modal-content p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.modal-content button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem; 
}

@media only screen and (max-width: 768px) {
  .modal-content {
    width: 90%;
  }
}

  </style>
  