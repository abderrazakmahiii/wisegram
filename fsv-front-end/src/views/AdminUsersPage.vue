<template>
    <div class="admin-users">
      <h1>Users</h1>
      <button @click="handleAddUser">Add User</button>
      <table class="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user._id }}</td>
            <td>{{ user.name }}</td>
            <td>
              <button @click="handleViewUser(user._id)">View</button>
              <button @click="handleEditUser(user._id)">Edit</button>
              <ConfirmationModal
                :message="`Are you sure you want to delete user ${user.name}?`"
                @confirm="handleDeleteUser(user._id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import AddUser from './AddUser.vue';
  import EditUser from './EditUser.vue';
  import ConfirmationModal from './ConfirmationModal.vue';
  
  export default {
    components: {
      AddUser,
      EditUser,
      ConfirmationModal,
    },
    data() {
      return {
        users: [],
      };
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        const response = await fetch('/api/users');
        this.users = await response.json();
      },
      handleAddUser() {
        this.$modal.show('add-user');
      },
      handleViewUser(userId) {
      },
      handleEditUser(userId) {
        this.$modal.show('edit-user', { userId });
      },
      async handleDeleteUser(userId) {
        const response = await fetch(`/api/users/${userId}`, {
          method: 'DELETE',
        });
        this.users = this.users.filter((user) => user._id !== userId);
      },
    },
  };
  </script>
  
  <style scoped></style>

  