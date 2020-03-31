<template>
  <div>
    <CRow>
      <CCol>
        <CCard class="d-100">
          <CCardHeader>
            Search Results
          </CCardHeader>
          <CCardBody>
            <CDataTable
              :items="this.Reports"
              @row-clicked="rowClicked"
              pagination
              hover
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
  name: "SearchResult",
  data() {
    return {
      paramSlug: this.$route.params.slug,
      isEmptyResult: false
    };
  },
  apollo: {
    Reports() {
      return gql`{
        Reports(search: "${this.paramSlug}")
          {
            id,
            title
          }
        }`;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    rowClicked(item, _) {
      this.$router.push(`/reports/${item.id}`);
    }
  }
};
</script>
