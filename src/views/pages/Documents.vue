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
            <CDataTable
              :items="this.documents"
              striped
              column-filter
              table-filter
              pagination
              hover
              sorter
              @row-clicked="rowClicked"
              v-c-tooltip="{
                content: '<strong>Click to view</strong>',
                placement: 'center'
              }"
            >
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
  name: "Documents",
  apollo: {
    documents: {
      query: gql`
        {
          allDocuments {
            id
            title
            createdAt
          }
        }
      `,
      update: data => data.allDocuments
    }
  },
  methods: {
    rowClicked(item, _) {
      this.$router.push(`/documents/${item.id}`);
    }
  }
};
</script>
