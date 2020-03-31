<template>
  <div>
    <c-row>
      <c-card class="w-100">
        <c-card-header>
          <strong>@{{ user.firstName + " " + user.lastName }}</strong>
        </c-card-header>
        <c-card-body>
          <c-row>
            <c-col md="6">
              <!-- <p class="lead">
                <strong>User Name:</strong> {{ user.username }}
              </p> -->
              <p class="lead">
                <strong>Full Name:</strong>
                {{ user.firstName + " " + user.lastName }}
              </p>
              <p class="lead">
                <strong>Email Address:</strong> {{ user.email }}
              </p>
              <p class="lead">
                <strong>Created at:</strong> {{ user.dateJoined }}
              </p>
            </c-col>
            <c-col md="6">
              <img
                src="../../assets/images/John_Doe.png"
                alt="John Image"
                width="300"
              />
            </c-col>
          </c-row>
          <c-row class="d-flex justify-content-between px-4">
            <c-button color="primary" @click.prevent="goBack">Go Back</c-button>
            <c-button color="danger" @click="deleteUser">Delete User</c-button>
          </c-row>
        </c-card-body>
      </c-card>
    </c-row>
  </div>
</template>
<script>
import gql from "graphql-tag";
export default {
  name: "User",
  data() {
    return {
      paramId: this.$route.params.id
    };
  },
  apollo: {
    user() {
      return gql`{
        user(id: ${this.paramId})
          {
            username,
            firstName,
            lastName,
            email,
            dateJoined
          }
        }`;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goToEditPage() {
      return this.$router.push("/users/" + this.paramId + "/edit");
    },
    deleteResource() {
      this.$swal(
        "Delete API mutation name unknown.",
        "Connect to delete",
        "warning"
      );
    }
  }
};
</script>
