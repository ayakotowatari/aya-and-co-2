<template>
    <div class="pt-6">
        <!-- <v-row>
          <v-col cols="12" sm="12" md="12">
              <div class="heading-group">
                  <div class="page-heading">
                    Order
                  </div>
                  <div class="page-subtitle grey--text text--darken-3">
                    ご購入の手続き
                  </div>
              </div>
          </v-col>
        </v-row> -->
        <!-- <v-row justify="center">
            <v-col cols="12" sm="12" md="4" v-for="item in cart" :key="item.id">
                <v-card
                        class="mx-auto"
                        max-width="390"
                        outlined
                    >
                    <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5 mt-1 mb-1">
                        {{item.name}} 
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{item.size}}g
                        </v-list-item-subtitle>
                        <v-row align="center">
                            <v-col cols="3" sm="3" md="3" >
                                {{item.quantity}}個
                            </v-col>
                            <v-col cols="3" sm="3" md="3">
                                ¥{{ cartLineTotal(item) }}
                            </v-col>
                        </v-row>
                    </v-list-item-content>
                    <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                    ></v-list-item-avatar>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="12" md="4">
                <span>
                    合計金額（税込・送料別）：
                </span>
                <span v-text="cartTotal"></span>
            </v-col>
        </v-row> -->
        <v-row justify="center">
            <v-col cols="12" sm="12" md="6">
                <div :class="formTitleClasses" class="grey--text text--darken-4">{{$t('checkout.shipping_address')}}</div>
            </v-col>
        </v-row>
        <v-row justify="center">
                    <v-col cols="12" sm="12" md="6">
                         <div v-if="$i18n.locale == 'en'" class="grey--text text--darken-2 mb-2">
                            {{$t('checkout.message')}}
                        </div>
                        <v-tabs v-model="tab" class="mb-12">
                            <v-tab
                                href="#tab-1"
                            >
                                {{$t('checkout.ship_home')}}
                            </v-tab>
                            <v-tab
                                href="#tab-2"
                            >
                                {{$t('checkout.ship_other')}}
                            </v-tab>
                            <!-- <v-tab router :to="{name: 'search-events'}">Search</v-tab> -->
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                            <v-tab-item 
                                value="tab-1"
                            >
                                <homeaddress-component></homeaddress-component>
                            </v-tab-item>
                            <v-tab-item
                                value="tab-2"
                            >
                                <otheraddress-component></otheraddress-component>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-col>
                </v-row>
           
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

// import OtherAddress from './OtherAddressComponent'

export default {
    components: {
        // HomeAddress,
        // OtherAddress,
    },
    props: {
    
    },
    data: function(){
        return{
            tab: null,
        }
    },
    created(){

    },
    computed: {
        ...mapState([
            'user',
            'cart',
            'deliveryAddress',
            'allerror',
        ]),
        formTitleClasses(){
          if(this.$i18n.locale == 'en') return 'en-form-title'
          return 'form-title'
        },
      
    },
    methods: {
       
    },
}
</script>

<style>

</style>