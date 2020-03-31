<template>
  <div>
    <CRow>
      <transition name="slide">
        <CCard class="d-block w-100">
          <CCardHeader>
            Statistics
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol>
                <CWidgetProgressIcon
                  :header="users.length.toString()"
                  text="Total Users"
                  color="success"
                >
                  <CIcon name="cil-user-follow" height="36" />
                </CWidgetProgressIcon>
              </CCol>
              <CCol>
                <CWidgetProgressIcon
                  :header="reports.length.toString()"
                  text="TOTAL REPORTS"
                  color="info"
                >
                  <CIcon name="cil-pencil" height="36" />
                </CWidgetProgressIcon>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </transition>
    </CRow>
  </div>
</template>
//
<script>
import gql from "graphql-tag";
export default {
  name: "Dashboard",
  apollo: {
    reports: {
      query: gql`
        {
          Reports {
            id
          }
        }
      `,
      update: data => data.Reports
    },
    users: {
      query: gql`
        {
          users {
            id
          }
        }
      `,
      update: data => data.users
    }
  }
};
</script>
