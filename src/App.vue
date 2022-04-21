<template>
  <Navbar />
  <FormBase />
  <Footer />
  <ViewUser />
  <Footer />
  <EditUser />
  <Footer />
 
 
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import FormBase from './components/FormBase.vue';
import ViewUser from './components/ViewUser.vue';
import DeletUser from './components/DeletUser.vue';
import EditUser from './components/EditUser.vue';

export default {
  components:{
    Navbar,
    FormBase,
    ViewUser,
    EditUser,
    Footer,
  
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
