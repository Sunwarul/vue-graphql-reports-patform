<template>
  <CRow>
    <CCol>
      <transition name="slide">
        <CCard>
          <CCardHeader class="d-flex justify-content-between">
            <div>
              Roles
            </div>
            <CButton href="/roles/create" color="primary">Create Role</CButton>
          </CCardHeader>
          <CCardBody>
            <CDataTable striped column-filter table-filter :items="this.roles">
            </CDataTable>
          </CCardBody>
        </CCard>
      </transition>
    </CCol>
  </CRow>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Roles",
  apollo: {
    roles: {
      query: gql`
        {
          UserRoles {
            id
            roleName
          }
        }
      `,
      update: data => data.UserRoles
    }
  }
};
</script>
