<template>
  <div>
    <CRow>
      <CCol>
        <CCard class="d-100">
          <CCardHeader class="d-flex justify-content-between">
            <div>
              Documents
            </div>
          </CCardHeader>
          <CCardBody>
            {{ me }}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
import gql from "graphql-tag";
export default {
  name: "Profile",
  apollo: {
    me: {
      query: gql`
        {
          me {
            id
            username
            firstName
            lastName
            email
            lastLogin
            isActive
          }
        }
      `,
      update: data => data.me
    }
  }
};
</script>
