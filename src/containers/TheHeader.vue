<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <!-- <CIcon name="logo" height="48" alt="Logo" /> -->
      <h1 style="font-family: monospace;">REPORT PLATFORM</h1>
    </CHeaderBrand>

    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-5">
        <CHeaderNavLink to="/dashboard">
          Dashboard
        </CHeaderNavLink>
      </CHeaderNavItem>
      <!--    Search Box -->
      <CHeaderNavItem>
        <input
          type="text"
          placeholder="Search reports..."
          class="form-control px-5 border-1 border-secondary"
          v-model="searchText"
        />
      </CHeaderNavItem>
      <CHeaderNavItem>
        <CButton @click.prevent="handleSearch" class="btn btn-outline-info ml-1"
          >Search</CButton
        >
        <!-- v-show="!(routeName === 'SearchResult')" -->
      </CHeaderNavItem>
      <!-- {{ routeName }} -->
    </CHeaderNav>

    <CHeaderNav class="mr-4">
      <TheHeaderDropdownAccnt />
    </CHeaderNav>

    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0" />
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";
export default {
  name: "TheHeader",
  data() {
    return {
      searchText: ""
    };
  },
  components: {
    TheHeaderDropdownAccnt
  },
  methods: {
    handleSearch() {
      this.$router.push({
        name: "SearchResult",
        params: { slug: `${this.searchText}` }
      });
      setInterval(() => {
        window.location.reload();
      }, 50);
    }
  }
};
</script>
