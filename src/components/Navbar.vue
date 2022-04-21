<template>
    <div id ="nav">     
            <h1 id ="titulo">Interface Vue com CRUD</h1>
    </div>
</template>
<script>


export default {
    name:"Navebar"
}
</script>

<style scoped>
#nav{
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
#titulo{
    color: rgb(255, 255, 255);
}
</style>