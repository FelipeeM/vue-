<template>
    <div id="form-base" >
        <h3>Adicionar</h3>
        <div>
            <form  @submit.prevent="saveEmployee">
                <div class ="input-container">
                    <label for="nome">Nome: </label>
                    <input type="text" v-model="nome" placeholder="Digite seu nome">
                </div>
                <div class ="input-container">
                    <label for="id">Id: </label>
                    <input type="text" v-model="id" placeholder="Digite seu ID">
                </div>
                <div class ="input-container">
                    <label for="idade">Idade: </label>
                    <input type="text" v-model="idade" placeholder="Digite sua idade">
                </div>
                <div class ="input-container">
                    <label for="regiao">Região: </label>
                    <input type="text" v-model="regiao" placeholder="Digite sua região">
                </div>
                   
                   <div class ="input-container">
                       <input type="submit" class="submit-btn"  value="Adicionar">
                          
                   </div>
            </form>
        </div> 
     </div>    
</template>
<script>

import db from './firebaseInit'

export default {
    name: 'form-base',
    data(){
        return{
            nome: null,
            idade: null,
            regiao: null,
            id: null
        }
    },
    methods: {
        saveEmployee () {
          db.collection('employees').add({
            id: this.id,
            nome: this.nome,
            idade: this.idade,
            regiao: this.regiao
          })
          .then(docRef => {
            console.log('Client added: ', docRef.id)
            
          })
          .catch(error => {
            console.error('Error adding employee: ', error)
          })
        }
      }
}

// db.collection('messages').get().then(r =>{
//     r.docs.map(doc => {
//         console.log(doc.data());
//     });
// });
//console.log(db)

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