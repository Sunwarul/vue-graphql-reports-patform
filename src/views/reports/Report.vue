<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol md="10">
                <h3>{{ report.title }}</h3>
              </CCol>
              <CCol md="2">
                <CButton @click.prevent="goToEditPage" color="info" class="mr-1"
                  >Edit</CButton
                >
                <CButton
                  @click.prevent="deleteResource"
                  color="danger"
                  class="mr-1"
                  >Delete</CButton
                >
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <p class="lead">
              {{ report.body }}
            </p>
            <hr />
            <CRow>
              <CCol>
                <p><strong>Group:</strong> {{ report.group.groupName }}</p>
              </CCol>
              <CCol>
                <!-- Uncomment to get this feature. -->
                <!-- <p v-if="tags"> -->
                <p>
                  <strong>Tags: </strong>
                  <span v-for="tag in tags" :key="tag.name">{{
                    tag.name
                  }}</span>
                </p>
              </CCol>
            </CRow>
            <p><strong>Created at: </strong>{{ report.createdAt }}</p>
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
    report() {
      return gql`{
        report(id: ${this.paramId})
          {
            title, 
            body, 
            author { username },
            group { groupName },
            tags { name },
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
      return this.$router.push("/reports/" + this.paramId + "/edit");
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
