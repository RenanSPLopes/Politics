<template>
    <div class="container">
        <h1 class="text-center mb-5 mt-5"> Cadastro de Afiliados </h1>
        <affiliateds-grid>
        </affiliateds-grid>
    </div>
</template>
<script>

import AffiliatedsGrid from '../components/AffiliatedsGrid.vue'

export default {
    name: 'affiliate',
    components :{
        'affiliateds-grid' : AffiliatedsGrid
    }
}
</script>
