<template>
  <PageTitle pageTitle="Categories" subTitle="eCommerce" />
  <Categories />
  <AddNewCategoryPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Categories from "@/components/Pages/Ecommerce/Categories/index.vue";
import AddNewCategoryPopup from "@/components/Pages/Ecommerce/Categories/AddNewCategoryPopup.vue";

export default defineComponent({
  name: "CategoriesPage",
  components: {
    PageTitle,
    Categories,
    AddNewCategoryPopup,
  },
});
</script>
