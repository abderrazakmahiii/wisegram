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
  
  <style scoped>
.admin-users {
  padding: 1.5rem;
  max-width: 960px;
  margin: 0 auto; 
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff; 
  font-weight: bold;
  transition: all 0.2s ease-in-out; 
}

button:hover {
  background-color: #0062cc;
}

table.users-table {
  width: 100%;
  border-collapse: collapse;
}

thead th,
tbody td {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  text-align: left;
}

thead th {
  background-color: #f8f8f8;
}

tbody tr:nth-child(odd) {
  background-color: #fafafa;
}

@media only screen and (max-width: 768px) {
  .admin-users {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  table.users-table {
    font-size: 0.9rem;
  }
}
</style>

  