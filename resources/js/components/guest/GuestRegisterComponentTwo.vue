<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="12">
                <div class="heading-group">
                    <div class="page-heading">
                        Register
                    </div>
                    <div class="page-subtitle grey--text text--darken-3">
                        会員登録
                    </div>
                </div>
            </v-col>
       </v-row>
       <v-row>
           <v-col cols="12" sm="12" md="4">
                
           </v-col>
           <v-col v-if="guest === null" cols="12" sm="12" md="8">
               <register-component></register-component>
           </v-col>
           <v-col v-if="guest !== null" cols="12" sm="12" md="8">
               <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <div v-if="$i18n.locale == 'en'">
                            <p :class="formTitleClasses" class="grey--text text--darken-4">Dear {{guest.name}},</p>
                            <p :class="fontWeightClasses" class="grey--text text--darken-2">Register your password below, and you will be signed up with us.</p>
                        </div>
                        <div v-else :class="formTitleClasses" class="grey--text text--darken-4">{{guest.name}}様の会員登録</div>
                        
                    </v-col>
                </v-row>
                <v-row>
                    <!-- <v-col cols="12" sm="12" md="4">
                        <v-img 
                            src="https://meetuni.s3-ap-northeast-1.amazonaws.com/illustration/travel-tickets-colour-1200px.png" 
                            cover 
                        >
                        </v-img>
                    </v-col> -->
                    <v-col cols="12" sm="12" md="6">
                        <div class="mb-6">
                            <div :class="itemContentClasses" class="policy-title">
                                {{$t('register.name')}}
                            </div>
                            <div>
                                {{guest.name}}
                            </div>
                        </div>
                        <div v-if="$i18n.locale == 'ja'" class="mb-6">
                            <div :class="itemContentClasses" class="policy-title">
                                {{$t('register.kana')}}
                            </div>
                            <div>
                                {{guest.kana}}
                            </div>
                        </div>
                        <div class="mb-6">
                            <div :class="itemContentClasses" class="policy-title">
                                {{$t('register.email')}}
                            </div>
                            <div>
                                {{guest.email}}
                            </div>
                        </div>
                        <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                        >
                            <v-row justify="center">
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field 
                                        v-model="password"
                                        :label="$t('register.password')" 
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="showPassword ? 'text' : 'password'"
                                        outlined
                                        required
                                        :hint="$t('register.hint_password')"
                                        persistent-hint
                                        :rules="passwordRules" 
                                        validate-on-blur
                                        @blur="() => $refs.form.resetValidation()"
                                        :error="allRegisterError.password ? true : false"
                                        :error-messages="allRegisterError.password"
                                        @click:append="showPassword = !showPassword"
                                    ></v-text-field>
                                    <v-text-field 
                                        v-model="password_confirmation"
                                        :label="$t('register.confirm_password')"  
                                        :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="showPassword2 ? 'text' : 'password'"
                                        outlined
                                        required
                                        :rules="confirmPasswordRules" 
                                        validate-on-blur
                                        @blur="() => $refs.form.resetValidation()"
                                        :error="allRegisterError.password_confirmation ? true : false"
                                        :error-messages="allRegisterError.password_confirmation"
                                        @click:append="showPassword2 = !showPassword2"
                                    ></v-text-field>

                                    <!-- <input type="hidden" name="timezone" :value="timezone"> -->

                                    <v-btn 
                                        block 
                                        dark 
                                        color="primary" 
                                        class="mb-4" 
                                        @click="goRegister()"
                                        :loading="loading"
                                    >
                                            {{$t('btn.register')}}
                                    </v-btn>
                                    <div v-if="allRegisterError.email !== null">
                                        <p class="error-message grey--text text--grey-4" >
                                            {{allRegisterError.email[0]}}
                                        </p>
                                        <!-- <v-btn
                                            color="primary"
                                            outlined
                                            @click="resetForm"
                                            class="mr-2"
                                        >
                                            リセットする
                                        </v-btn> -->
                                        <v-btn
                                            color="primary"
                                            outlined
                                            @click="toRegister"
                                        >
                                            {{$t('btn.register_again')}}
                                        </v-btn>
                                    </div>
                                    <!-- <v-btn text color="primary" class="pa-0" @click="toLogin()">login</v-btn> -->
                                </v-col>
                            </v-row>
                            <!-- <input type="hidden" name="event_id" :value="eventId"> -->
                            
                        </v-form>
                    </v-col>
                </v-row>
           </v-col>
       </v-row>
        
        
    </v-container>

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data: function(){
        return{
            valid: true,
            password: '',
            password_confirmation: '',
            // timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            showPassword: false,
            showPassword2: false
        }
    },
    computed: {
        ...mapState([
            'allRegisterError', 
            'guest',
            'loading',
        ]),
        formTitleClasses(){
          if(this.$i18n.locale == 'en') return 'en-form-title'
          return 'form-title'
        },
        fontWeightClasses(){
          if(this.$i18n.locale == 'en') return 'en-jp-font'
          return 'jp-font'
        },
        itemContentClasses(){
          if(this.$i18n.locale == 'en') return 'en-item-content'
          return 'item-content'
        },
        passwordRules(){
            return[
                (v) => !!v || this.$t('register.password_rule'),
                (v) => v.length >= 8 || this.$t('register.password_rule2')
            ];
        },
        confirmPasswordRules(){
            return[
                (v) => !!v || this.$t('register.confirmPassword_rule'),
                (v) => v == this.password || this.$t('register.confirmPassword_rule2')
            ];
        },
    },
    methods: {
        ...mapActions([
            'guestRegister'
        ]),
        goRegister(){    

            let lang = this.$i18n.locale

            if(this.$refs.form.validate()){
                this.guestRegister({
                    url: "/register",
                    user_type: 1,
                    name: this.guest.name,
                    kana: this.guest.kana,
                    zipcode: this.guest.zipcode,
                    prefecture: this.guest.prefecture,
                    city: this.guest.city,
                    address_1: this.guest.address_1,
                    building: this.guest.building,
                    phone: this.guest.phone,
                    email: this.guest.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    guest_id: this.guest.id,
                    lang: lang
                    // timezone: this.timezone
                })
            }
           
        }, 
        toRegister(){
            window.location = '/guest/register';
            this.$store.commit('setallRegisterErrors', null);
        },
        // resetForm(){
        //     this.$store.commit('setLoading', false);
        //     this.$refs.form.reset();
        //     // this.$store.commit('setDisabled', false);
        //     //this.$store.commit('setallRegisterErrors', null);
        // }
        // toLogin(){
        //     this.$router.push({name: 'student-login'});
        // }
    }


}
</script>

<style>
.error-message{
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 16px;
    letter-spacing: 0.03em;
}
.en-item-content{
    font-weight: 300;
}

</style>