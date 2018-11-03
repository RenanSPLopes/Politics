<template>
    <b-container>
        <b-row>
            <b-col cols="3" class="p-1 bg-dark text-white text-center">Nome</b-col>
            <b-col cols="3" class="p-1 bg-dark text-white text-center" >Cpf</b-col>
            <b-col  cols="3" class="p-1 bg-dark text-white text-center">Email</b-col>
            <b-col  cols="3" class="p-1 bg-dark text-white text-center">Telefone</b-col>
        </b-row>
        <div v-for="affiliate in affiliates" v-bind:key="affiliate.cpf">
            <b-row>
                <b-col cols="3" class="text-center">{{ affiliate.name }}</b-col>
                <b-col cols="3" class="text-center">{{ affiliate.cpf }}</b-col>
                <b-col cols="3" class="text-center">{{ affiliate.email }}</b-col>
                <b-col cols="3" class="text-center">{{ affiliate.phone }}</b-col>
            </b-row>       
        </div>                     
    </b-container>
</template>
<script>

export default {
    name: 'grid-affiliates',
    props: {
        affiliates :{
            type: Array,
            required: true
        }
    }
}
</script>


