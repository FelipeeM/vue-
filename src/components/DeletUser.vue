<template>
 <div id="form-base">
    <h3>Deletar</h3>
    <div class="row">
    <form @submit.prevent="deleteEmployee">
        <div class ="input-container">
            <label for="id">Id: </label>
            <input type="text" v-model="id" placeholder="Digite o ID do usuario">
        </div>
        <div class ="input-container">
            <input type="submit" class="submit-btn" value="Deletar">
                
        </div>
     </form>
  </div>
  </div>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'edit-user',
    data () {
      return {
        id: null
      }
    },
    methods: {
      deleteEmployee () {
        
          db.collection('employees').where('id', '==', this.id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(doc.ref)
              doc.ref.delete();
              this.$router.push('/')
            })
          })
        
      }
    }
  }
  
</script>
<style scoped>

#form-base{
    max-width: 400px;
    margin: 0 auto;
}

.input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #FCBA03;
}
input, select {
    padding: 5px 10px;
    width: 300px;
}
.submit-btn {
    background-color: #222;
    color: #FCBA03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}
.submit-btn:hover{
     background-color: transparent;
     color:#222;
}

</style>