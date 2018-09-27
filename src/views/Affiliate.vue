<template>
    <div class="container">
        <h1 class="text-center mb-5 mt-5"> Cadastro de Afiliados </h1>
        <b-button class="mb-3" variant="success" size="sm" v-b-modal.modal>Cadastrar Afiliado</b-button>
        <affiliateds-grid :affiliates="affiliates" :color="color">
        </affiliateds-grid>
        <affiliate-modal @add-affiliate="addAffiliate" >
        </affiliate-modal>
    </div>
</template>
<script>

import AffiliatedsGrid from '../components/AffiliatedsGrid.vue'
import AffiliateModal from '../components/AffiliateModal.vue'

export default {
    name: 'affiliate',
    components :{
        'affiliateds-grid' : AffiliatedsGrid,
        'affiliate-modal' : AffiliateModal
    }, 
    data() {
        return {
            affiliates: [],
            color : false
        }
    }, 
    methods: {
        addAffiliate(affiliate){
            var newAffiliate = {};
            newAffiliate.name = affiliate.name;
            newAffiliate.cpf = affiliate.cpf;
            newAffiliate.email = affiliate.email;
            newAffiliate.phone = affiliate.phone;

            this.affiliates.push(newAffiliate);

            affiliate.name = '';
            affiliate.cpf = '';
            affiliate.email = '';
            affiliate.phone = '';

            this.color = !this.color;
        }
    }
}
</script>
