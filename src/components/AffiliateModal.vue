<template>
    <b-modal id="modal" ref="modal" title="Cadastrar Filiado" @ok="handleOk" :ok-disabled="$v.affiliate.$invalid">
        <b-form>
            <b-form-group id="politicalPartyGroupInput">
                <b-form-select id="politicalParty-select">
                        
                </b-form-select>
            </b-form-group>    
            <b-form-group id="nameGroupInput" 
                           label="Nome :"
                           label-for="nameInput">
                <b-form-input id="nameInput"
                              type="text"
                              v-model="affiliate.name"
                              :state="!$v.affiliate.name.$invalid"           
                              placeholder="Digite o nome">
                </b-form-input>
                <b-form-invalid-feedback id="nameInputFeedback">
                    Nome é obrigatório e deve conter entre 4 e 40 caracteres.
                </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="cpfGroupInput" 
                           label="Cpf :"
                           label-for="cpfInput">
                <b-form-input id="cpfInput"
                              type="text"
                              v-model="affiliate.cpf"
                              v-mask="'###.###.###-##'"
                              :state="!$v.affiliate.cpf.$invalid"
                              placeholder="Digite o cpf">
                </b-form-input>
                <b-form-invalid-feedback>
                    CPF é obrigatório e deve estar no formato 000.000.000-00.
                </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="emailGroupInput" 
                           label="Email :"
                           label-for="emailInput">
                <b-form-input id="emailInput"
                              type="email"
                              v-model="affiliate.email"
                              :state="!$v.affiliate.email.$invalid"
                              placeholder="Digite o email">
                </b-form-input>
                <b-form-invalid-feedback>
                    O email é obrigatório.
                </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="phoneGroupInput" 
                           label="Telefone :"
                           label-for="phoneInput">
                <b-form-input id="phoneInput"
                              type="text"
                              v-model="affiliate.phone"
                              v-mask="'(##) ####-####'"
                              placeholder="Digite o telefone">
                </b-form-input>
            </b-form-group>
        </b-form>    
    </b-modal>
</template>
<script>
import bModal from 'bootstrap-vue/es/components/modal/modal'
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mask } from 'vue-the-mask'

export default {
    name:'modal-affiliate-form',
    components :{
        'b-modal': bModal
    },
    directives :{
        'b-modal': bModalDirective,
        mask 
    },
    data () {
        return {
            affiliate: {
                name : '',
                cpf : '',
                phone: '',
                email : ''
            }
        };
    },
    validations:{
        affiliate:{
            name : {
                required,
                minLength: minLength(4),
                maxLength: maxLength(40)
            },
            cpf :{
                required,
                minLength: minLength(14)
            }, 
            email : {
                required,
                minLength: minLength(7)
            }
        }
    },
    methods: {
        handleOk(evt){
            evt.preventDefault();

            this.$emit('add-affiliate', this.affiliate);
            this.$refs.modal.hide();
        }
    }
}
</script>