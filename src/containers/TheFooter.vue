<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://coreui.io" target="_blank">BrandName</a>
      <span class="ml-1"
        >&copy; {{ new Date().getFullYear() }} The Brand Name.</span
      >
    </div>
    <div class="ml-auto">
      <span class="mr-1">Powered by</span>
      <a href="#" target="_blank">Brand Name</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>
