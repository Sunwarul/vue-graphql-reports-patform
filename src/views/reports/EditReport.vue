<template>
  <div>
    <CRow>
      <CCol>
        <transition name="slide">
          <CCard>
            <CCardHeader>
              Edit Report
            </CCardHeader>
            <CCardBody>
              <CForm id="createReportForm">
                <p><strong>Title</strong></p>
                <CInput v-model="report.title" placeholder="Title" required />
                <p><strong>Author</strong></p>
                <CInput
                  v-model="report.author.username"
                  placeholder="Author"
                  disabled
                />
                <p><strong>Group</strong></p>
                <CInput
                  v-model="report.group.groupName"
                  placeholder="Group"
                  required
                />
                <p><strong>Tag</strong></p>
                <CInput v-model="report.tags.name" placeholder="Tag" required />
                <p><strong>Report Description</strong></p>
                <quill
                  v-model="report.body"
                  output="html"
                  style="height: 250px;"
                ></quill>

                <CRow class="d-flex justify-content-between px-4 py-5 mt-2">
                  <CButton @click.prevent="createReport" color="success">
                    Update
                  </CButton>
                  <CButton color="secondary" @click.prevent="goBack"
                    >Cancel</CButton
                  >
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </transition>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "EditReport",
  data() {
    return {
      paramId: this.$route.params.id
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  apollo: {
    report() {
      return gql`{
        report(id: ${this.paramId})
          {
            title, 
            body, 
            author { id, username },
            group { id, groupName },
            tags { id, name },
            createdAt,
          }
        }`;
    }
  }
};
</script>
