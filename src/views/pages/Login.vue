<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6" class="p-5">
          <CCard class="p-5">
            <CCardBody>
              <CForm>
                <div class="text-center">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                </div>
                <CInput
                  placeholder="Username"
                  autocomplete="username"
                  required
                  v-model="username"
                >
                  <template #prepend-content>
                    <CIcon name="cil-user" />
                  </template>
                </CInput>
                <CInput
                  placeholder="Password"
                  type="password"
                  required
                  v-model="password"
                  autocomplete="curent-password"
                >
                  <template #prepend-content>
                    <CIcon name="cil-lock-locked" />
                  </template>
                </CInput>
                <CRow>
                  <CCol class="text-left">
                    <CButton
                      color="primary"
                      class="px-4"
                      type="submit"
                      block
                      @click.prevent="handleLogin"
                    >
                      Login
                    </CButton>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol class="text-center">
                    <CButton color="link" to="/register">
                      Not have an account, Register here!
                    </CButton>
                  </CCol>
                </CRow>
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
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      if (this.username === "" || this.password === "") {
        this.$swal("Error", "You should fill in form values", "warning");
        return;
      }

      this.$apollo
        .mutate({
          mutation: gql`
            mutation tokenAuth($username: String!, $password: String!) {
              tokenAuth(username: $username, password: $password) {
                token
              }
            }
          `,
          variables: {
            username: this.username,
            password: this.password
          }
        })
        .then(response => {
          localStorage.setItem("token", response.data.tokenAuth.token);
          this.$router.replace("/");
        })
        .catch(err => {
          if (err) {
            this.$swal("Something went wrong!", err.message, "warning");
          }
        });
    }
  }
};
</script>
