<template>
  <div>
    <CRow>
      <CCol>
        <CCard class="d-100">
          <CCardHeader class="d-flex justify-content-between">
            <div>
              Reports
            </div>
            <CButton href="/reports/create" color="primary"
              >Create Report</CButton
            >
          </CCardHeader>
          <CCardBody>
            <CDataTable
              :items="this.reports"
              @row-clicked="rowClicked"
              column-filter
              table-filter
              pagination
              hover
              sorter
              v-c-tooltip="{
                content: '<strong>Click rows to view single report!</strong>',
                placement: 'top'
              }"
            >
              <!-- <template #view="{item}">
                <td>
                  <c-button color="primary" :to="`/reports/${item.id}`">
                    View
                  </c-button>
                </td>
              </template> -->
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
import gql from "graphql-tag";
// const fields = [
//   { key: "Id" },
//   { key: "Title" },
//   { key: "Created At" },
//   { key: "view" }
// ];
export default {
  name: "Reports",
  apollo: {
    reports: {
      query: gql`
        {
          Reports {
            id
            title
            createdAt
          }
        }
      `,
      update: data => data.Reports
    }
  },
  methods: {
    rowClicked(item, _) {
      this.$router.push(`/reports/${item.id}`);
    }
  }
};
</script>
