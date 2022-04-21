<template>
  <div id="view-employee">
    <ul clas="collection with-header">
      <li class="collection"><h5>Nome   Idade   Regiao   Id</h5></li>
    </ul>  
    <ul v-for="employee in employees" v-bind:key="employee.id" class="collection with-header">
      <li class="collection-item"> {{employee.nome}} /{{employee.idade}} /{{employee.regiao}} /{{employee.employee_id}}</li>
    </ul>
   
    
  </div>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'view-user',
    data () {
      return {
        employees: []
      }
    },
    created (){
        db.collection('employees').get().then(querySnapshot => {
          querySnapshot.forEach(doc=> {
            console.log(doc.id)
            const data = {
              'id': doc.id,
              'employee_id': doc.data().id,
              'nome': doc.data().nome,
              'idade': doc.data().idade,
              'regiao': doc.data().regiao
            }
            this.employees.push(data)
          })
            
        })
    
    }
     
  }
</script>

<style scoped>
#view-employee{
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 100px;
}
</style>
