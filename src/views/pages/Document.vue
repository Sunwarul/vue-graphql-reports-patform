<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol md="10">
                <h3>{{ document.title }}</h3>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <p class="lead">
              <strong>Document Link: </strong>
              <a :href="document.link">{{ document.link }}</a>
            </p>
            <hr />
            <p><strong>Created at: </strong>{{ document.createdAt }}</p>
          </CCardBody>
          <CCardFooter>
            <CButton @click.prevent="goBack" color="success">Back</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
import gql from "graphql-tag";
export default {
  name: "Report",
  data() {
    return {
      paramId: this.$route.params.id
    };
  },
  apollo: {
    document() {
      return gql`{
        document(id: ${this.paramId})
          {
            id,
            title, 
            link,
            createdAt,
          }
        }`;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goToEditPage() {
      return this.$router.push("/documents/" + this.paramId + "/edit");
    },
    deleteResource() {
      this.$swal(
        "Delete API mutation name unknown.",
        "Connect to delete",
        "warning"
      );
      // this.$apollo
      //   .mutate({
      //     mutation: gql`
      //   # TODO:: NEED TO UPDATE THIS MUTATION NAME (BY BACKEND DEVELOPER)
      //       mutation deleteReport(id: Int!) {
      //         tokenAuth(id: $id) {
      //           id
      //         }
      //       }
      //     `,
      //     variables: {
      //       id: this.paramId
      //     }
      //   })
      //   .then(response => {
      //     console.log(response);
      //   });
      // return this.$router.push("/reports");
    }
  }
};
</script>
