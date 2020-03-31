<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <div class="text-center">
                  <h1>Register</h1>
                  <p class="text-muted">Create your account</p>
                </div>
                <CInput
                  placeholder="Username"
                  autocomplete="username"
                  v-model="username"
                  required
                >
                  <template #prepend-content>
                    <CIcon name="cil-user" />
                  </template>
                </CInput>
                <CInput
                  placeholder="Email"
                  autocomplete="email"
                  v-model="email"
                  required
                  prepend="@"
                />
                <CInput
                  placeholder="Password"
                  type="password"
                  v-model="password"
                  required
                  autocomplete="new-password"
                >
                  <template #prepend-content>
                    <CIcon name="cil-lock-locked" />
                  </template>
                </CInput>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  v-model="confirmPassword"
                  required
                  autocomplete="new-password"
                  class="mb-4"
                >
                  <template #prepend-content>
                    <CIcon name="cil-lock-locked" />
                  </template>
                </CInput>
                <CButton
                  color="success"
                  type="submit"
                  block
                  @click.prevent="handleSignUp"
                  >Create Account
                </CButton>
                <CButton block color="link" to="/login">
                  Already have an account, Login here!
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    handleSignUp() {
      if (
        this.username === "" ||
        this.password === "" ||
        this.email === "" ||
        this.confirmPassword === ""
      ) {
        this.$swal("Error", "You should fill in form values", "warning");
        return;
      }
      this.$apollo
        .mutate({
          mutation: gql`
            mutation createUser(
              $username: String!
              $email: String!
              $password: String!
            ) {
              createUser(
                username: $username
                email: $email
                password: $password
              ) {
                user {
                  id
                  username
                }
              }
            }
          `,
          variables: {
            username: this.username,
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          console.log(response.data);
          this.$router.replace("/login");
        });
    }
  }
};
</script>
