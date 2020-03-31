<template>
  <div>
    <CRow>
      <CCol>
        <transition name="slide">
          <CCard>
            <CCardHeader>
              Create User
            </CCardHeader>
            <CCardBody>
              <CForm id="createUserForm">
                <CInput
                  v-model="form.username"
                  placeholder="Username"
                  required
                />
                <CInput
                  v-model="form.firstname"
                  placeholder="First Name"
                  required
                />

                <CInput
                  v-model="form.lastname"
                  placeholder="Last Name"
                  required
                />
                <CInput v-model="form.email" placeholder="Email" required />
                <select class="form-control" v-model="form.role">
                  <option>User</option>
                  <option>Admin</option>
                  <option>Moderator</option>
                </select>

                <CRow class="p-2 px-3">
                  <div v-if="!image">
                    <input type="file" @change="onFileChange" />
                  </div>
                  <div v-else>
                    <img :src="image" class="img-thumbnail" />
                    <button @click="removeImage" color="warning" class="m-3">
                      Remove image
                    </button>
                  </div>
                </CRow>

                <CRow class="d-flex justify-content-between px-4 py-3">
                  <CButton @click.prevent="createUser" color="success">
                    Create
                  </CButton>
                  <CButton color="secondary" @click.prevent="goBack"
                    >Cancel</CButton
                  >
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </transition>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "CreateUser",
  data() {
    return {
      form: {
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        role: "User"
      },
      image: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();
      let vm = this;
      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = "";
    }
  }

  // apollo: {
  //   createUser: {
  //     mutations: gql``,
  //     variables: {
  //       username: this.username,
  //       email: this.email,
  //       firstname: this.firstname,
  //       lastname: this.lastname,
  //       role: [this.role]
  //     }
  //   }
  // }
};
</script>
