<template>
  <div>
    <CRow>
      <CCol>
        <CCard class="d-100">
          <CCardHeader class="d-flex justify-content-between">
            <div>
              All Report Groups
            </div>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              :items="this.groups"
              column-filter
              table-filter
              pagination
              hover
              sorter
            >
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
import gql from "graphql-tag";
export default {
  name: "AllReportGroups",
  apollo: {
    groups: {
      query: gql`
        {
          allReportGroups {
            id
            groupName
          }
        }
      `,
      update: data => data.allReportGroups
    }
  },
  methods: {
    // rowClicked(item, _) {
    //   this.$router.push(`/groups/${item.id}`);
    // }
  }
};
</script>
