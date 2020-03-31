<template>
  <div>
    <CRow>
      <CCol>
        <transition name="slide">
          <CCard>
            <CCardHeader>
              Create Role
            </CCardHeader>
            <CCardBody>
              <CForm id="createRoleForm">
                <CInput v-model="form.name" placeholder="Role Name" required />
                <CRow class="d-flex justify-content-between px-4 py-3">
                  <CButton @click.prevent="createRole" color="success">
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
export default {
  name: "CreateRole",
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    createRole() {
      if (!this.form.name) {
        this.$swal("Error", "You should fill in form values", "warning");
      }
    }
  }
};
</script>
