<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <div class="heading-group">
                        <div class="page-heading">
                            Guest Order Details
                        </div>
                        <div class="page-subtitle grey--text text--darken-3">
                            ゲスト注文詳細
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="4">
                    <div class="mb-4">
                        <div class="item-content">
                        注文ID
                        </div>
                        <div class="item-title">
                        {{order.id}}
                        </div>
                    </div>
                    <div class="mb-8">
                        <div class="item-content">
                        注文日
                        </div>
                        <div class="item-title">
                        {{order.created_at}}
                        </div>
                    </div>
                    <div class="mb-8">
                        <div class="item-content">
                        ステータス
                        </div>
                        <div class="item-title mb-2">
                        {{orderStatus}}
                        </div>
                        <div>
                            <v-btn
                                color="primary"
                                outlined
                                @click="updateStatus"
                            >更新</v-btn>
                        </div>
                    </div>
                    <div class="mb-8">
                        <div class="item-content">
                        発送予定日
                        </div>
                        <div class="item-title mb-2" v-if="plannedShipmentDate !== null">
                            {{plannedShipmentDate}} 
                        </div>
                        <div class="item-title mb-2" v-if="plannedShipmentDate === null">
                            未定
                        </div>
                        <div v-if="plannedShipmentDate === null">
                            <v-btn
                                color="primary"
                                outlined
                                @click="scheduleDate"
                            >設定</v-btn>
                        </div>
                        <div v-if="plannedShipmentDate !== null">
                            <v-btn
                                color="primary"
                                outlined
                                @click="updateDate"
                            >更新</v-btn>
                        </div>
                    </div>
                    <div class="mb-8">
                        <div class="item-content">
                        発送日
                        </div>
                        <div class="item-title" v-if="actualShipmentDate !== null">
                            {{actualShipmentDate}}
                        </div>
                        <div class="item-title" v-if="actualShipmentDate === null">
                            未発送
                        </div>
                        <div v-if="actualShipmentDate === null">
                            <v-btn
                                color="primary"
                                outlined
                                @click="inputActualDate"
                            >設定</v-btn>
                        </div>
                        <div v-if="actualShipmentDate !== null">
                            <v-btn
                                color="primary"
                                outlined
                                @click="updateActualDate"
                            >更新</v-btn>
                        </div>
                    </div>
                    <div class="mb-8">
                        <div class="item-content">
                        配達日
                        </div>
                        <div class="item-title" v-if="deliveredDate !== null">
                            {{deliveredDate}}
                        </div>
                        <div class="item-title" v-if="deliveredDate === null">
                            未配達
                        </div>
                        <div v-if="deliveredDate === null">
                            <v-btn
                                color="primary"
                                outlined
                                @click="inputDeliveredDate"
                            >設定</v-btn>
                        </div>
                        <div v-if="deliveredDate !== null">
                            <v-btn
                                color="primary"
                                outlined
                                @click="updateDeliveredDate"
                            >更新</v-btn>
                        </div>
                    </div>
                    <div class="mb-8">
                        <div class="item-content">
                            備考
                        </div>
                        <div class="item-title mb-2" v-if="order.note !== null">
                            {{order.note}} 
                        </div>
                        <div class="item-title mb-2" v-if="order.note === null">
                            未記入
                        </div>
                        <div class="mb-2">
                            <div v-if="order.note === null">
                                <v-btn
                                    color="primary"
                                    outlined
                                    @click="inputGNote"
                                >記入</v-btn>
                            </div>
                            <div v-if="order.note !== null">
                                <v-btn
                                    color="primary"
                                    outlined
                                    @click="updateGNote"
                                >更新</v-btn>
                            </div>
                        </div>
                        <div v-if="inputGuestNote == true">
                            <inputguestordernote-component
                                v-bind:inputGuestNote="inputGuestNote"
                                v-bind:order="order"
                            ></inputguestordernote-component>
                        </div>
                        <div v-if="updateGuestNote == true">
                            <updateguestordernote-component
                                v-bind:updateGuestNote="updateGuestNote"
                                v-bind:order="order"
                            ></updateguestordernote-component>
                        </div>
                    </div>
                     <div class="mb-8">
                        <v-btn
                            color="primary"
                            dark
                            @click="create(order.id)"
                        >
                            Create Receipt
                        </v-btn>
                    </div>
                    <div>
                        <v-btn
                            color="primary"
                            outlined
                            @click="$router.push({name: 'guestorders-list'})"
                        >
                            リストへもどる
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="8">
                    <v-row justify="start" class="mb-8">
                        <v-col cols="12" sm="12" md="12" v-for="product in orderedProducts" :key="product.id">
                            <v-card
                                max-width="390"
                                outlined
                                color="#F1F1F1"
                            >
                                <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="product-name mb-1">
                                        {{product.name}} 
                                    </div>
                                    <div class="product-size mb-4">
                                        {{product.size}}
                                    </div>
                                    <div class="product-price mb-6">
                                        {{product.quantity}}点　{{formatPrice(product.price)}}
                                    </div>
                                </v-list-item-content>
                                <v-list-item-avatar
                                    tile
                                    size="80"
                                    color="grey"
                                >
                                    <v-img
                                        :src="`https://s3-ap-northeast-1.amazonaws.com/aya-and-co/${product.image}`"
                                    ></v-img>
                                </v-list-item-avatar>
                                </v-list-item>
                            </v-card>
                          </v-col>
                        </v-row>
                            <v-row>
                                <v-col cols="8" sm="8" md="4" class="py-1">
                                    <div class="totalprice grey--text text--darken-3">
                                        商品小計（税込）
                                    </div>
                                </v-col>
                                <v-col cols="4" sm="4" md="4" class="py-1">
                                    <div v-text="cartTotal" class="totalprice">
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8" sm="8" md="4" class="py-1">
                                    <div class="totalprice grey--text text--darken-3">
                                        送料
                                    </div>
                                </v-col>
                                <v-col cols="4" sm="4" md="4" class="py-1">
                                    <div class="totalprice">
                                        {{formatPrice(order.postage)}}
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="6">
                                    <v-divider></v-divider>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8" sm="8" md="4" class="py-1">
                                    <div class="charge grey--text text--darken-3">
                                        ご請求額
                                    </div>
                                </v-col>
                                <v-col cols="4" sm="4" md="4" class="py-1 mb48">
                                    <div class="charge">
                                        {{formatPrice(order.total)}}
                                    </div>
                                </v-col>
                            </v-row>
                      
                    
                    <v-divider class="mb48"></v-divider>

                    <h4 class="jp-font grey--text text--darken-3 mb-4">ゲスト住所</h4>
                    <v-row class="mb-6">
                        <v-col cols="12" sm="12" md="6">
                            <v-card
                                max-width="480"
                                outlined
                            >
                                <v-list-item>
                                    <v-list-item-content two-line>
                                        <v-list-item-subtitle class="jp-font-400">
                                            お名前
                                        </v-list-item-subtitle>
                                        <v-list-item-title class="jp-font-400 mb-4">
                                            {{order.guest_name}}様
                                        </v-list-item-title>
                                        <v-list-item-subtitle class="jp-font-400">
                                            メールアドレス
                                        </v-list-item-subtitle>
                                        <v-list-item-title class="jp-font-400 mb-4">
                                            {{order.guest_email}}
                                        </v-list-item-title>
                                        <v-list-item-subtitle class="jp-font-400">
                                            お電話
                                        </v-list-item-subtitle>
                                        <v-list-item-title class="jp-font-400 mb-4">
                                            {{order.guest_phone}}
                                        </v-list-item-title>
                                        <v-list-item-subtitle class="jp-font-400">
                                            ご住所
                                        </v-list-item-subtitle>
                                        <div class="jp-font-400">
                                            〒{{order.guest_zipcode}}<br>
                                            {{order.guest_prefecture}}{{order.guest_city}} {{order.guest_address_1}}<br>
                                        </div>
                                        <div v-if="order.guest_building !== null" class="jp-font-400">
                                            {{order.guest_building}}
                                        </div>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-col>
                    </v-row>
                    <h4 class="jp-font grey--text text--darken-3 mb-4">送付先</h4>
                    <v-row>
                        <v-col cols="12" sm="12" md="6">
                            <v-card
                                max-width="480"
                                outlined
                            >
                                <v-list-item>
                                    <v-list-item-content two-line>
                                        <v-list-item-subtitle class="jp-font-400">
                                            ご住所
                                        </v-list-item-subtitle>
                                        <div class="jp-font-400">
                                            〒{{order.delivery_zipcode}}<br>
                                            {{order.delivery_prefecture}}{{order.delivery_city}}{{order.delivery_address_1}}<br>
                                        </div>
                                        <div v-if="order.delivery_building !== null" class="jp-font-400">
                                            {{order.delivery_building}}
                                        </div>
                                        <v-list-item-title class="jp-font-400">
                                            {{order.delivery_name}}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="jp-font-400">
                                            お電話番号
                                        </v-list-item-subtitle>
                                        <v-list-item-title class="jp-font-400">
                                            {{order.delivery_phone}}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="jp-font-400">
                                            配送オプション
                                        </v-list-item-subtitle>
                                        <v-list-item-title class="jp-font-400">
                                            {{order.delivery_courier}}
                                        </v-list-item-title>
                                        <v-list-item-title class="jp-font-400">
                                            梱包数：{{order.box_quantity}}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="jp-font-400">
                                            ご希望の配達時間
                                        </v-list-item-subtitle>
                                        <v-list-item-title class="jp-font-400">
                                            {{order.delivery_time}}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container> 
        <shipmentschedule-component
            v-bind:dialogShipment="dialogShipment"
            v-bind:order="order"
        ></shipmentschedule-component>
        <updateshipmentschedule-component
            v-bind:dialogUpdateShipment="dialogUpdateShipment"
            v-bind:order="order"
        ></updateshipmentschedule-component>
        <updatestatusdialog-component
            v-bind:dialogUpdateStatus="dialogUpdateStatus"
            v-bind:order="order"
        ></updatestatusdialog-component>
        <inputactualdatedialog-component
            v-bind:dialogActualDate="dialogActualDate"
            v-bind:order="order"
        ></inputactualdatedialog-component>
        <updateactualdatedialog-component
            v-bind:dialogUpdateActualDate="dialogUpdateActualDate"
            v-bind:order="order"
        ></updateactualdatedialog-component>
        <inputdelivereddatedialog-component
            v-bind:dialogDeliveredDate="dialogDeliveredDate"
            v-bind:order="order"
        ></inputdelivereddatedialog-component>
        <updatedelivereddatedialog-component
            v-bind:dialogUpdateDeliveredDate="dialogUpdateDeliveredDate"
            v-bind:order="order"
        ></updatedelivereddatedialog-component>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    data: function(){
        return {
            id: Number(this.$route.params.id),
            
        }
    },
    mounted(){
        this.$store.dispatch('admin/fetchGuestOrder', {
            id: this.id
        });
        this.$store.dispatch('admin/fetchShipment', {
            id: this.id
        });
        
    },
    created(){
     
    },
    computed: {
        ...mapState('admin', [
            'order',
            'orderedProducts',
            // 'shipment',
            'dialogShipment',
            'dialogUpdateShipment',
            'dialogUpdateStatus',
            'dialogActualDate',
            'dialogUpdateActualDate',
            'dialogDeliveredDate',
            'dialogUpdateDeliveredDate',
            'plannedShipmentDate',
            'actualShipmentDate',
            'deliveredDate',
            'orderStatus',
            'inputGuestNote',
            'updateGuestNote'
        ]),
        cartTotal(){
            let amount = this.orderedProducts.reduce((acc,item) => acc + (item.price * item.quantity), 0);

            return amount.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY'});
        },
        // totalPrice(){
        //      let cartAmount = this.$store.state.cart.reduce((acc,item) => acc + (item.price * item.quantity), 0);
        //      let totalAmount = cartAmount + this.deliveryAddress.postage

        //      return totalAmount.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY'});
        // },
    
    },
    methods: {
        updateStatus(){
            this.$store.commit('admin/dialogUpdateStatus', true)
        },
        scheduleDate(){
            this.$store.commit('admin/dialogShipment', true)
        },
        updateDate(){
            this.$store.commit('admin/dialogUpdateShipment', true)
        },
        inputActualDate(){
            this.$store.commit('admin/dialogActualDate', true)
        },
        updateActualDate(){
            this.$store.commit('admin/dialogUpdateActualDate', true)
        },
        inputDeliveredDate(){
            this.$store.commit('admin/dialogDeliveredDate', true)
        },
        updateDeliveredDate(){
            this.$store.commit('admin/dialogUpdateDeliveredDate', true)
        },
        inputGNote(){
            this.$store.commit('admin/setInputGuestNote', true)
        },
        updateGNote(){
            this.$store.commit('admin/setUpdateGuestNote', true)
        },
        formatPrice(value){
          let price = value;

          return price.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY'});
        },
         create(id){

            window.location.href='/admin/create-guestreceipt/'+ id;
            
            // this.createUserReceipt({
            //     id: id
            // })

        }
        
    }


}
</script>

<style>

</style>