<template>
  <div>
    <CRow>
      <CCol>
        <CCard class="d-100">
          <CCardHeader class="d-flex justify-content-between">
            <div>
              Tags
            </div>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              :items="this.tags"
              striped
              column-filter
              table-filter
              pagination
              hover
              sorter
              @row-clickable="rowClicked"
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
  name: "Tags",
  apollo: {
    tags: {
      query: gql`
        {
          allTags {
            id
            name
          }
        }
      `,
      update: data => data.allTags
    }
  },
  methods: {
    rowClicked(item, _) {
      this.$router.push(`/tags/${item.id}`);
    }
  }
};
</script>
