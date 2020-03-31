<template>
  <div>
    <CRow>
      <CCol>
        <transition name="slide">
          <CCard>
            <CCardHeader>
              Create Report
            </CCardHeader>
            <CCardBody>
              <CForm id="createReportForm">
                <CInput v-model="form.title" placeholder="Title" required />
                <!-- <CInput v-model="form.author" placeholder="Author" required /> -->
                <CInput v-model="form.group" placeholder="Group" required />
                <CInput v-model="form.tag" placeholder="Tag" required />
                <quill
                  v-model="form.body"
                  output="html"
                  style="height: 250px;"
                ></quill>

                <CRow class="d-flex justify-content-between px-4 py-5 mt-2">
                  <CButton @click.prevent="createReport" color="success">
                    Create
                  </CButton>
                  <CButton color="secondary" @click.prevent="goBack"
                    >Cancel</CButton
                  >
                </CRow>
              </CForm>
              <h5><strong>Delete this line in production (src/views/reports/CreateReport.vue -> line 31) </strong></h5>
              {{ form }}
            </CCardBody>
          </CCard>
        </transition>
      </CCol>
    </CRow>
  </div>
</template>

<script>
// import gql from "graphql-tag";
export default {
  name: "CreateUser",
  data() {
    return {
      form: {
        title: "",
        body: "",
        group: "",
        tag: ""
      }
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    createReport() {
      if (
        this.form.title === "" ||
        this.form.tag === "" || 
        this.form.group === ""
      ) {
        this.$swal("Warning!", "You should fill in required values", "warning");
      }

      // MUTATION PART START 
      this.$apollo
          .mutate({
            mutation: gql`
              mutation createReport($title: String!, $group: String, $tag: String) {
                createReport(title: $title, group: $group, tag: $tag) {
                  id
                }
              }
            `,
            variables: {
              title: this.form.title,
              group: this.form.group,
              tag: this.form.tag,
            }
          })
          .then(response => {
            this.$router.replace("/reports");
          })
          .catch(err => {
            if (err) {
              this.$swal("Something went wrong!", err.message, "warning");
            }
          });
        // MUTATION PART ENDS

    }
  }
};
</script>
