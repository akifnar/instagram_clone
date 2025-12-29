<template>
  <div class="home">
    <div class="timeline">
      <h1>Home</h1>
      <CustomText class="a1" tag="p">Merhaba Dünya</CustomText>
      <CustomText class="a2" tag="p" size="small">Merhaba Dünya</CustomText>
      <CustomText class="a3" tag="p" size="xsmall">Merhaba Dünya</CustomText>
      <CustomText tag="p" size="xxsmall">Merhaba Dünya</CustomText>
      <IconHome width="60" height="60" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
    </div>
    <div class="sidebar">
      <p>adana kebap</p>
    </div>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText.vue'
import IconHome from '@/icons/home.svg'
export default {
  name: 'HomeView',
  components: {
    CustomText,
    IconHome
  }
}
</script>

<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.sidebar {
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>
