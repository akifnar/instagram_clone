<template>
  <div class="home">
    <CustomText tag="h1"> ProfileView</CustomText>

    <nav>
      <router-link to="/ProfileView/">Post</router-link> |
      <router-link to="/ProfileView/igtv">IGTV</router-link> |
      <router-link to="/ProfileView/save">Save</router-link> |
      <router-link to="/ProfileView/tag">Tag</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import CustomText from '@/components/CustomText.vue'
export default {
  name: 'ProfileView',
  components: {
    CustomText
  }
}
</script>

<style scoped></style>
