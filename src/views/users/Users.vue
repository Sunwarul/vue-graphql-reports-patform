<template>
  <CRow>
    <CCol>
      <transition name="slide">
        <CCard>
          <CCardHeader class="d-flex justify-content-between">
            <div>
              Users
            </div>
            <CButton href="/users/create" color="primary">Create Users</CButton>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              :items="this.users"
              striped
              column-filter
              table-filter
              pagination
              hover
              sorter
            />
          </CCardBody>
        </CCard>
      </transition>
    </CCol>
  </CRow>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Users",
  apollo: {
    users: {
      query: gql`
        {
          users {
            id
            username
            email
          }
        }
      `,
      update: data => data.users
    }
  },
  methods: {
    // rowClicked(item, _) {
    //   this.$router.push(`/users/${item.id}`);
    // }
  }
};
</script>
