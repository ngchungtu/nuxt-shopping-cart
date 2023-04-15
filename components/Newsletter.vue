<template>
    <v-card rounded="lg" class="pa-md-10 pa-5 text-center" color="secondary" dark>
        <h2 class="text-md-h3">Newsletter</h2>
        <p class="text-md-h6 mt-3">Subscribe to receive discounts & more</p>
        <br/>
        <v-sheet color="transparent" class="mx-auto" max-width="400">
            <v-text-field label="Email" type="email" outlined v-model="email"></v-text-field>
            <v-btn @click="submit" outlined min-height="50" block>Subscribe</v-btn>
        </v-sheet>
    </v-card>
</template>

<script>
    export default {
        data(){
            return{
                email:null,
            }
        },
        methods:{
            async submit(){
                await this.$swal({
                    title:'Thanks you',
                    icon: 'success',
                    allowOutsideClick:false,
                    allowEscapeKey:false,
                    timer:2500,
                    timerProgressBar:true,
                    showConfirmButton:false,
                    text:'Bạn sẽ nhận thông báo khi có khuyến mãi'
                })
            }
        }
    }
</script>

<style lang="css" scoped>

</style>