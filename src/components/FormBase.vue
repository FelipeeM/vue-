<template>
    <div>
        <div>
            <form id="form-base">
                <div class ="input-container">
                    <label for="nome">Nome: </label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
                </div>
                <div class ="input-container">
                    <label for="idade">Idade: </label>
                    <input type="text" id="idade" name="idade" v-model="idade" placeholder="Digite sua idade">
                </div>
                <div class ="input-container">
                    <label for="regiao">Região: </label>
                    <select name="regiao" id="regiao" v-model="regiao">
                        <option value="">Selecione a região</option>
                        <option value="Recife">Recife</option>
                        <option value="Paulista">Paulista</option>
                        <option value="Boa Viagem">Boa Viagem</option>
                        <option value="Cabo">Cabo</option>
                    </select>
                   </div>
                   <div class ="input-container">
                       <input type="submit" class="submit-btn" >
                       <router-link to="/" class="btn grey">Cancel</router-link>
                   </div>
            </form>
        </div> 
     </div>    
</template>
<script>

import db from './firebaseInit'

export default {
    name:"FormBase",
    data(){
        return{
            nome: null,
            idade: null,
            regiao: null,
        }
    },
    methods: {
        saveEmployee () {
          db.collection('employees').add({
            nome: this.nome,
            idade: this.idade,
            regiao: this.regiao
          })
          .then(docRef => {
            console.log('Client added: ', docRef.id)
            this.$router.push('/')
          })
          .catch(error => {
            console.error('Error adding employee: ', error)
          })
        }
      }
}
console.log(db)
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