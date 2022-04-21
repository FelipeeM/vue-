<template>
  <Navbar />
  <FormBase />
  <Footer />
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import FormBase from './components/FormBase.vue';

export default {
  components:{
    Navbar,
    FormBase,
    Footer
  }
}
</script>

<style>
  *{
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing:border-box;
  }
</style>
