import router from "../../router"

export const coupon = {
    namespaced: true,

    state: {
        coupon: {
            id: '',
            name: '',
            type: '',
            value: '',
            percent_off: '',
            applied: false
        },
        coupons: [],
        ifCoupon: false,
        dialogCoupon: false,
        // ifCoupon:{
        //     ifCoupon: false,
        //     name: '',
        //     deadline: '',
        //     info: '',
        // },
        ifCoupon: {},
        // couponDeadline: '',
        // couponName: '',
        // couponInfo: '',
        memberCoupons: [],
        adminCoupon: {
            id: '',
            name: '',
            type: '',
            value: '',
            percentOff: '',
            minimum: '',
            deadline: '',
            target:'',
            target_name: '',
            status: ''
        },
        couponDisabled: false,
        isEditing: {
            name: false,
            type: false,
            value: false,
            percentOff: false,
            minimum: false,
            deadline: false,
            target: false,
            status: false
        },
        statuses: [],
        allError: {
            coupon: '',
            coupon_code: ''
        },
        otherError: {}
       
    },
    mutations: {
        setCoupon(state, payload){
            state.coupon.id = payload.id
            state.coupon.name = payload.name
            state.coupon.type = payload.type
            state.coupon.value = payload.value
            state.coupon.percent_off = payload.percent_off
            state.coupon.applied = true

        },
        setCoupons(state, payload){
            state.coupons = payload
        },
        // setIfCoupon(state, payload){
        //     state.ifCoupon = payload
        // },
        setIfCoupon(state, payload){
            // state.ifCoupon.ifCoupon = payload.check
            // state.ifCoupon.deadline = payload.deadline
            // state.ifCoupon.name = payload.name
            // state.ifCoupon.info = payload.info
            state.ifCoupon = payload;
        },
        setDialogCoupon(state, payload){
            state.dialogCoupon = payload
        },
        // setCouponDeadline(state, payload){
        //     state.couponDeadline = payload
        // },
        // setCouponInfo(state, payload){
        //     state.couponInfo = payload
        // },
        // setCouponName(state, payload){
        //     state.couponName = payload
        // },
        emptyCoupon(state){
            state.coupon.id = ''
            state.coupon.name = ''
            state.coupon.type = ''
            state.coupon.value = ''
            state.coupon.percent_off = ''
            state.coupon.applied = false
        },
        setCouponDisabled(state, payload){
            state.couponDisabled = payload
        },
        setMemberCoupons(state, payload){
            state.memberCoupons = payload
        },
        setAdminCoupon(state, payload){
            state.adminCoupon.id = payload.id
            state.adminCoupon.name = payload.name
            state.adminCoupon.type = payload.type
            state.adminCoupon.value = payload.value
            state.adminCoupon.percentOff = payload.percent_off
            state.adminCoupon.minimum = payload.minimum
            state.adminCoupon.deadline = payload.deadline
            state.adminCoupon.target = payload.target
            state.adminCoupon.target_name = payload.target_name
            state.adminCoupon.status = payload.status
    
        },
        setIsEditingName(state, payload){
            state.isEditing.name = payload
        },
        setIsEditingType(state, payload){
            state.isEditing.type = payload
        },
        setIsEditingValue(state, payload){
            state.isEditing.value = payload
        },
        setIsEditingPercentOff(state, payload){
            state.isEditing.percentOff = payload
        },
        setIsEditingMinimum(state, payload){
            state.isEditing.minimum = payload
        },
        setIsEditingDeadline(state, payload){
            state.isEditing.deadline = payload
        },
        setIsEditingTarget(state, payload){
            state.isEditing.target = payload
        },
        setIsEditingStatus(state, payload){
            state.isEditing.status = payload
        },
        updateCouponName(state, payload){
            state.adminCoupon.name = payload
        },
        updateCouponType(state, payload){
            state.adminCoupon.type = payload
        },
        updateCouponValue(state, payload){
            state.adminCoupon.value = payload
        },
        updateCouponPercentOff(state, payload){
            state.adminCoupon.percentOff = payload
        },
        updateCouponMinimum(state, payload){
            state.adminCoupon.minimum = payload
        },
        updateCouponDeadline(state, payload){
            // console.log('payload', payload)
            state.adminCoupon.deadline = payload
        },
        updateCouponTarget(state, payload){
            // console.log('payload', payload)
            state.adminCoupon.target = payload.target
            state.adminCoupon.target_name = payload.target_name
        },
        updateCouponStatus(state, payload){
            state.adminCoupon.status = payload
        },
        setStatuses(state, payload){
            state.statuses = payload
        },
        setAllErrors(state, payload){
            state.allError = payload
        },
        updateAllErrors(state, payload){
            state.allError = payload
        },
        setOtherErrors(state, payload){
            state.otherError = payload
        }
        
    },

    getters: {

        discount(state, getters, rootState){

            if(state.coupon.type == "fixed"){

                return state.coupon.value

            }else if(state.coupon.type == "percent"){

                let cartAmount = rootState.cart.reduce((acc,item) => acc + (item.price * item.quantity), 0);
                let percentOff = state.coupon.percent_off / 100;
                let discount = cartAmount * percentOff;

                return discount

            }else if(state.coupon.type == "postage"){

                let postage = rootState.deliveryAddress.postage

                return postage

            }else{

                return null
            }

        }

    },
    actions: {
        async applyCoupon({state, commit}, payload){

            let allerror = {};
            let coupon = {};
    
            await axios
                .post('/member/coupon', {
                    coupon_code: payload.coupon_code,
                    amount: payload.amount
                })
                .then(response => {
                    //console.log(response);
                    
                    coupon = response.data.coupon;

                    commit('setCoupon', coupon);
                    commit('setCouponDisabled', true);
                   
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setAllErrors', allerror)
                    commit('setCouponDisabled', true);
                    // console.log('error', allerror)
                })
        },
        async storeCouponData({state, commit}, payload){

            let allerror = {};
    
            await axios
                .post('/member/store-coupon', {
                    coupon: payload,
                })
                .then(response => {
                    //console.log(response);
                    
                    commit('emptyCoupon');
                   
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setOtherErrors', allerror)
                    console.log('error', allerror)
                })
        },
        clearAllErrors({commit}) {
            commit('updateAllErrors', []);
        },
        clearCoupon({commit}){
            commit('emptyCoupon');
        },
        async createCoupon({commit}, payload){

            let allerror = {};
            let coupons = [];
    
            await axios
                .post('/admin/create-coupon', {
                    name: payload.name,
                    type: payload.type,
                    value: payload.value,
                    percentOff: payload.percentOff,
                    minimum: payload.minimum,
                    deadline: payload.deadline,
                    target: payload.target,
                    status_id: payload.status_id
                })
                .then(response => {
                    //console.log(response);
                    coupons = response.data.coupons;

                    commit('setCoupons', coupons);
                    
                    // dispatch('assignCoupons', coupons);
                   
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setOtherErrors', allerror)
                    console.log('error', allerror)
                })
        },
        async fetchCoupons({commit}){

            let payload =[];
    
            await axios
                .get("/admin/fetch-coupons")
                .then(res => {
                    payload = res.data.coupons;
                    commit('setCoupons', payload);
                    // commit('setDeliveryAddress', payload);
            });
        },

        async fetchCoupon({commit}, payload){

            let coupon = {};

            await axios
                .get('/admin/fetch-coupon/' + payload.id)
                .then(response => {
                    coupon = response.data.coupon;
                    commit('setAdminCoupon', coupon);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },

        async checkIfCoupon({commit}){

            // let check ='';
            // let deadline ='';
            // let couponName = '';
            // let couponInfo = '';
            let ifCoupon = [];
    
            await axios
                .get("/check-coupon")
                .then(res => {
                    ifCoupon = res.data.ifCoupon
                    // check = res.data.check;
                    // deadline = res.data.deadline;
                    // couponName = res.data.couponName;
                    // couponInfo = res.data.couponInfo;
                    // commit('setIfCoupon', {check:check, deadline:deadline, name:couponName, info:couponInfo});
                    commit('setIfCoupon', ifCoupon)
                    // commit('setCouponDeadline', deadline);
                    // commit('setCouponName', couponName);
                    // commit('setCouponInfo', couponInfo)
                    // commit('setDeliveryAddress', payload);
            });
        },

        async updateName({commit}, payload){

            let allerror = {};
            let coupon = '';
            let update_name = '';
    
            await axios
                .post('/admin/edit-couponname', {
                    id: payload.id,
                    name: payload.name,
                })
                .then(response => {
                    //console.log(response);
                    update_name = response.data.name
                    commit('updateCouponName', update_name);
                    commit('setIsEditingName', false);
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setOtherErrors', allerror)
                    //console.log('error', allerror)
                })
        },

        async updateType({commit}, payload){

            let allerror = {};
            let type = '';

            //console.log('payload', payload);
    
            await axios
                .post('/admin/edit-coupontype', {
                    id: payload.id,
                    type: payload.type,
                })
                .then(response => {
                    //console.log(response);
                    type = response.data.type
                    commit('updateCouponType', type);
                    commit('setIsEditingType', false);   
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setOtherErrors', allerror)
                    //console.log('error', allerror)
                })
        },

        async updateValue({commit}, payload){

            let allerror = {};
            let value  = '';
    
            await axios
                .post('/admin/edit-couponvalue', {
                    id: payload.id,
                    value: payload.value,
                })
                .then(response => {
                    //console.log(response);
                    value = response.data.value
                    commit('updateCouponValue', value);
                    commit('setIsEditingValue', false); 
                   
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setOtherErrors', allerror)
                    //console.log('error', allerror)
                })
        },

        async updatePercentOff({commit}, payload){

            let allerror = {};
            let percentOff  = '';
    
            await axios
                .post('/admin/edit-couponpercentoff', {
                    id: payload.id,
                    percentOff: payload.percentOff,
                })
                .then(response => {
                    //console.log(response);
                    percentOff = response.data.percentOff
                    commit('updateCouponPercentOff', percentOff);
                    commit('setIsEditingPercentOff', false);  
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setOtherErrors', allerror)
                    //console.log('error', allerror)
                })
        },

        async updateMinimum({commit}, payload){

            let allerror = {};
            let minimum  = '';
    
            await axios
                .post('/admin/edit-couponminimum', {
                    id: payload.id,
                    minimum: payload.minimum,
                })
                .then(response => {
                    //console.log(response);
                    minimum = response.data.minimum
                    commit('updateCouponMinimum', minimum);
                    commit('setIsEditingMinimum', false);  
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setOtherErrors', allerror)
                    //console.log('error', allerror)
                })
        },

        async updateDeadline({commit}, payload){

            let allerror = {};
            let deadline = '';
    
            await axios
                .post('/admin/edit-coupondeadline', {
                    id: payload.id,
                    deadline: payload.deadline,
                })
                .then(response => {
                    //console.log(response);
                    deadline = response.data.deadline
                    commit('updateCouponDeadline', deadline);
                    commit('setIsEditingDeadline', false);  
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setOtherErrors', allerror)
                    //console.log('error', allerror)
                })
        },

        async updateTarget({commit}, payload){

            let allerror = {};
            let target = '';
            let target_name = '';
    
            await axios
                .post('/admin/edit-coupontarget', {
                    id: payload.id,
                    target: payload.target,
                })
                .then(response => {
                    // console.log(response);
                    target = response.data.target
                    target_name = response.data.target_name
                    commit('updateCouponTarget', {target, target_name});
                    commit('setIsEditingTarget', false);  
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setOtherErrors', allerror)
                    //console.log('error', allerror)
                })
        },

        async updateStatus({commit}, payload){

            let allerror = {};
            let status = '';
    
            await axios
                .post('/admin/edit-couponstatus', {
                    id: payload.id,
                    status_id: payload.status_id,
                })
                .then(response => {
                    //console.log(response);
                    status = response.data.status
                    commit('updateCouponStatus', status);
                    commit('setIsEditingStatus', false);  
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setOtherErrors', allerror)
                    //console.log('error', allerror)
                })
        },

        async fetchStatuses({commit}){

            let statuses = {};

            await axios
                .get('/admin/fetch-couponstatuses')
                .then(response => {
                    statuses = response.data.statuses;
                    commit('setStatuses', statuses);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setOtherErrors', allerror)
                })
        },


    }

}