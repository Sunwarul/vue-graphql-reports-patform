<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img src="../assets/img/avatars/profile.png" class="c-avatar-img " />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader class="text-center text-white" color="info">
      <strong>ACCOUNT</strong>
    </CDropdownHeader>
    <CDropdownItem to="/profile">
      <CIcon name="cil-user" />
      Settings
    </CDropdownItem>
    <CDropdownItem @click.prevent="logout">
      <CIcon name="cil-lock-locked" />
      Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: "TheHeaderDropdownAccnt",
  data() {
    return {
      itemsCount: 42
    };
  },
  methods: {
    logout() {
      localStorage.setItem("token", null);
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>
