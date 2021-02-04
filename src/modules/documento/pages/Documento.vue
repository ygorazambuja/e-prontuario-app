<template>
  <div>
    <h1>{{ teste }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    teste: {
      required: false,
      type: String
    }
  }
};
</script>

<style></style>
