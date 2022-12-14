import router from "../../router2"

export const admin = {
    namespaced: true,

    state: {
       user: {},
       users: [],
       orders: [],
       order: {

            box_quantity:"",
            created_at:"",
            delivery_address_1:"",
            delivery_building:"",
            delivery_cardmessage:"",
            delivery_cardname:"",
            delivery_carduse:"",
            delivery_city:"",
            delivery_courier:"",
            delivery_name:"",
            delivery_phone:"",
            delivery_prefecture:"",
            delivery_time:"",
            delivery_zipcode:"",
            id:"",
            item_total:"",
            message:"",
            postage:"",
            status:"",
            discount:"",
            total:"",
            user_address_1:"",
            user_building:"",
            user_city:"",
            user_email:"",
            user_id:"",
            user_name:"",
            user_phone:"",
            user_prefecture:"",
            user_zipcode:"",

       },
       shipment: {},
       plannedShipmentDate: null,
       actualShipmentDate: null,
       deliveredDate: null,
       shipmentOrders: [],
       orderStatus: '',
       orderedProducts: [],
       categories:[],
       category: {
           name: '',
           subtitle: '',
           details: '',
           details_en: '',
           description: '',
           description_en: '',
           season: '',
           season_en: '',
           ingredients: '',
           ingredients_en: '',
           image: '',
           absolute_path:'',
           status: '',
       },
       products: [],
       product: {},
       sales: {
            total: null,
       },
       dialogShipment: false,
       dialogUpdateShipment: false,
       dialogUpdateStatus: false,
       dialogActualDate: false,
       dialogUpdateActualDate: false,
       dialogDeliveredDate: false,
       dialogUpdateDeliveredDate: false,
       inputOrderNote: false,
       updateOrderNote: false,
       inputGuestNote: false,
       updateGuestNote: false,
       statuses: [],
       categoryStatuses: [],
       showEditSubtitle: false,
       showEditDetails: false,
       showEditDetailsEn: false,
       showEditDescription: false,
       showEditDescriptionEn: false,
       showEditSeason: false,
       showEditSeasonEn: false,
       showEditIngredients: false,
       showEditIngredientsEn: false,
       showEditImage: false,
       showUpdateInventory: false,
       showUpdateTotal: false,
       showUpdateCategoryStatus: false,
       showUpdateProductStatus: false,
       loading: false,
       allerror: [],
       allLoginError: [],
       allRegisterError: [],
    },
    mutations: {
        setUser(state, payload){
            state.user = payload
        },
        setUsers(state, payload){
            state.users = payload
        },
        setOrders(state, payload){
            state.orders = payload
        },
        setOrder(state, payload){
            //console.log('setOrder')
            //console.log(payload)
            state.order = payload
            state.orderStatus = payload.status
        },
        setShipment(state, payload){
            state.shipment = payload
        },
        setShipmentOrders(state, payload){
            state.shipmentOrders = payload
            // console.log('orders')
        },
        setOrderedProducts(state, payload){
            state.orderedProducts = payload
        },
        setPlannedShipmentDate(state, payload){
            // console.log('payload', payload)
            state.plannedShipmentDate = payload
        },
        setActualShipmentDate(state, payload){
            // console.log('payload', payload)
            state.actualShipmentDate = payload
        },
        setDeliveredDate(state, payload){
            state.deliveredDate = payload
        },
        setCategories(state, payload){
            state.categories = payload
        },
        setCategory(state, payload){
            state.category = payload
        },
        setCategoryImage(state, payload){
            state.category.image = payload;
        },
        setProducts(state, payload){
            state.products = payload
        },
        setProduct(state, payload){
            state.product = payload
        },
        setSalesTotal(state, payload){
            state.sales.total = payload
        },
        setallErrors(state, payload){
            state.allerror = payload
        },
        dialogShipment(state, payload){
            state.dialogShipment = payload
        },
        dialogUpdateShipment(state, payload){
            state.dialogUpdateShipment = payload
        },
        dialogUpdateStatus(state, payload){
            state.dialogUpdateStatus = payload
        },
        dialogActualDate(state, payload){
            state.dialogActualDate = payload
        },
        dialogUpdateActualDate(state, payload){
            state.dialogUpdateActualDate = payload
        },
        dialogDeliveredDate(state, payload){
            state.dialogDeliveredDate = payload
        },
        dialogUpdateDeliveredDate(state, payload){
            state.dialogUpdateDeliveredDate = payload
        },
        setStatuses(state, payload){
            state.statuses = payload
        },
        setCategoryStatuses(state, payload){
            state.categoryStatuses = payload
        },
        setInputOrderNote(state, payload){
            state.inputOrderNote = payload
        },
        setUpdateOrderNote(state, payload){
            state.updateOrderNote = payload
        },
        setInputGuestNote(state, payload){
            state.inputGuestNote = payload
        },
        setUpdateGuestNote(state, payload){
            state.updateGuestNote = payload
        },
        setOrderNote(state, payload){
            state.order.note = payload
        },
        setCategoryStatus(state, payload){
            state.category.status = payload
        },
        setProductStatus(state, payload){
            state.product.status = payload
        },
        updateOrderStatus(state, payload){
            state.orderStatus = payload
        },
        setShowEditSubtitle(state, payload){
            state.showEditSubtitle = payload
        },
        setCategorySubtitle(state, payload){
            state.category.subtitle = payload
        },
        setShowEditDetails(state, payload){
            state.showEditDetails = payload
        },
        setShowEditDetailsEn(state, payload){
            state.showEditDetailsEn = payload
        },
        setCategoryDetails(state, payload){
            state.category.details = payload
        },
        setCategoryDetailsEn(state, payload){
            state.category.details_en = payload
        },
        setShowEditDescription(state, payload){
            state.showEditDescription= payload
        },
        setShowEditDescriptionEn(state, payload){
            state.showEditDescriptionEn= payload
        },
        setCategoryDescription(state, payload){
            state.category.description = payload
        },
        setCategoryDescriptionEn(state, payload){
            state.category.description_en = payload
        },
        setShowEditSeason(state, payload){
            state.showEditSeason= payload
        },
        setShowEditSeasonEn(state, payload){
            state.showEditSeasonEn= payload
        },
        setCategorySeason(state, payload){
            state.category.season = payload
        },
        setCategorySeasonEn(state, payload){
            state.category.season_en = payload
        },
        setShowEditIngredients(state, payload){
            state.showEditIngredients= payload
        },
        setShowEditIngredientsEn(state, payload){
            state.showEditIngredientsEn= payload
        },
        setCategoryIngredients(state, payload){
            state.category.ingredients = payload
        },
        setCategoryIngredientsEn(state, payload){
            state.category.ingredients_en = payload
        },
        setShowEditImage(state, payload){
            state.showEditImage= payload
        },
        setCategoryImage(state, payload){
            state.category.image = payload
        },
        setShowUpdateInventory(state, payload){
            state.showUpdateInventory = payload
        },
        setShowUpdateCategoryStatus(state, payload){
            state.showUpdateCategoryStatus = payload
        },
        setShowUpdateProductStatus(state, payload){
            state.showUpdateProductStatus = payload
        },
        setInventory(state, payload){
            state.product.inventory = payload
        },
        setTotal(state, payload){
            state.product.total = payload
        },
        setLoading(state, payload){
            state.loading = payload
        },
        setAllErrors(state, payload){
            state.allerror = payload
        },
        setAllLoginErrors(state, payload){
            state.allLoginError = payload
        },
        setAllRegisterErrors(state, payload){
            state.allRegisterError = payload
        }
    },
    actions: {
        async register({state, commit}, payload){

            let allerror = [];
            let user = [];
    
            // commit("setLoading", true);
    
            await axios
                .post(payload.url, {
                    user_type_id: payload.user_type,
                    name: payload.name,
                    email: payload.email,
                    password: payload.password,
                    password_confirmation: payload.password_confirmation,
                })
                .then(response => {
                    // console.log(response);
                    user = response.data.user;
                    // commit('clearGuest', {});
                    commit('setUser', user);
                    // commit('setLoading', false);
                    // router.push({path: '/'});
                    window.location = '/admin/orders-list'
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setAllRegisterErrors', allerror)
                })
        },
        async login({commit}, payload){

            // commit('setLoading', true)
            
            let user = {};
            let allerror = [];
    
            await axios
                .post(payload.url, {
                    email: payload.email,
                    password: payload.password,
                })
                .then(response => {
                    //console.log(response);
                    // router.push({path: '/student/main'});
                    // commit('setLoading', false);
                    user = response.data.user
                    commit('setUser', user)
                    window.location = "/admin/orders-list"
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setAllLoginErrors', allerror)
                })
        },
        async fetchUser({ commit }){
            let payload = {};
    
            await axios
                .get("/admin/user")
                .then(res => {
                    payload = res.data.user;
                    commit('setUser', payload);
                    // commit('setDeliveryAddress', payload);
                })

        },
        async fetchUsers({ commit }){
            let users = {};
    
            await axios
                .get("/admin/fetch-users")
                .then(res => {
                    users = res.data.users;
                    commit('setUsers', users);
                    // commit('setDeliveryAddress', payload);
                    // console.log(users)
                })

        },
        async fetchSales({state, commit}){

            let total = '';
            let allerror = [];

            await axios
                .get('/fetch-sales')
                .then(response => {
                    total = response.data.total;
                    commit('setSalesTotal', total)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async fetchOrders({state, commit}, payload){

            let orders = [];

            await axios
                .get('/fetch-orders')
                .then(response => {
                    orders = response.data.orders;
                    commit('setOrders', orders)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async fetchOrder({state, commit}, payload){

            //console.log(payload.id);

            let order = {};
            let products = [];
            let giftcards = [];

            await axios
                .get('/fetch-order/' + payload.id)
                .then(response => {
                    order = response.data.order;
                    products = response.data.products;
                    giftcards = response.data.giftcards;
                    commit('setOrder', order);
                    commit('setOrderedProducts', products);
                    commit('giftcard/setOrderedCards', giftcards, {root: true});
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async fetchGuestOrder({state, commit}, payload){

            //console.log(payload.id);

            let order = {};
            let products = [];

            await axios
                .get('/fetch-guestorder/' + payload.id)
                .then(response => {
                    order = response.data.order;
                    products = response.data.products;
                    commit('setOrder', order);
                    commit('setOrderedProducts', products);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async fetchShipment({state, commit}, payload){

            let scheduled_date = "";
            let actual_date = "";
            let delivered_date = "";

            await axios
                .get('/fetch-shipment/' + payload.id)
                .then(response => {
                    scheduled_date = response.data.scheduled_date;
                    actual_date = response.data.actual_date;
                    delivered_date = response.data.delivered_date
                    commit('setPlannedShipmentDate', scheduled_date);
                    commit('setActualShipmentDate', actual_date);
                    commit('setDeliveredDate', delivered_date);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async fetchShipmentOrders({state, commit}){

            let orders = [];

            await axios
                .get('/orders-shipment')
                .then(response => {
                    orders = response.data.orders;
                    commit('setShipmentOrders', orders);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async fetchGuestShipmentOrders({state, commit}){

            let orders = [];

            await axios
                .get('/orders-guestshipment')
                .then(response => {
                    orders = response.data.orders;
                    commit('setShipmentOrders', orders);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async scheduleShipment({state, commit}, payload){

            let date= "";
            let allerror = [];

            //console.log('date', payload.date);

            await axios
                .post('/schedule-shipment', {
                    id: payload.id,
                    date: payload.date,
                    delivery_time: payload.delivery_time,
                    postage: payload.postage
                })
                .then(res => {
                    date = res.data.date
                    //console.log('res', date)
                    commit('setPlannedShipmentDate', date)
                    commit('dialogShipment', false)
                    // commit('setLoading', false);
                    // router.push({path: '/check-address'});
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async updateScheduleShipment({state, commit}, payload){

            let date= ""
            let allerror = [];

            //console.log('date', payload.date);

            await axios
                .post('/update-shipment', {
                    id: payload.id,
                    date: payload.date,
                })
                .then(res => {
                    date = res.data.date
                    commit('setPlannedShipmentDate', date)
                    commit('dialogUpdateShipment', false)
                    // commit('setLoading', false);
                    // router.push({path: '/check-address'});
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async updateActualDate({state, commit}, payload){

            let date= ""
            let allerror = [];

            await axios
                .post('/update-actualdate', {
                    id: payload.id,
                    date: payload.updatedActualDate,
                })
                .then(res => {
                    date = res.data.actualDate
                    commit('setActualShipmentDate', date)
                    commit('dialogUpdateActualDate', false)
                    // commit('setLoading', false);
                    // router.push({path: '/check-address'});
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async updateDeliveredDate({state, commit}, payload){

            let date= ""
            let allerror = [];

            await axios
                .post('/update-delivereddate', {
                    id: payload.id,
                    date: payload.updatedDeliveredDate,
                })
                .then(res => {
                    date = res.data.deliveredDate
                    commit('setDeliveredDate', date)
                    commit('dialogUpdateDeliveredDate', false)
                    // commit('setLoading', false);
                    // router.push({path: '/check-address'});
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async fetchStatuses({state, commit}){

            let statuses = [];
            let allerror = [];

            await axios
                .get('/fetch-statuses')
                .then(response => {
                    statuses = response.data.statuses;
                    commit('setStatuses', statuses);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async updateStatus({state, commit}, payload){

            let status = ""
            let allerror = [];

            await axios
                .post('/update-status', {
                    id: payload.id,
                    status_id: payload.status_id,
                })
                .then(res => {
                    status = res.data.status
                    commit('updateOrderStatus', status)
                    commit('dialogUpdateStatus', false)
                    // commit('setLoading', false);
                    // router.push({path: '/check-address'});
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async inputActualDate({state, commit}, payload){

            let actualDate = ""
            let allerror = [];

            await axios
                .post('/input-actualdate', {
                    id: payload.id,
                    actual_date: payload.actual_date,
                })
                .then(res => {
                    actualDate = res.data.actualDate
                    commit('setActualShipmentDate', actualDate)
                    commit('dialogActualDate', false)
                    // commit('setLoading', false);
                    // router.push({path: '/check-address'});
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async inputDeliveredDate({state, commit}, payload){

            let deliveredDate = ""
            let allerror = [];

            //console.log('date', payload.delivered_date);
            //console.log('id', payload.id);

            await axios
                .post('/input-delivereddate', {
                    id: payload.id,
                    delivered_date: payload.delivered_date,
                })
                .then(res => {
                    deliveredDate = res.data.deliveredDate
                    commit('setDeliveredDate', deliveredDate)
                    commit('dialogDeliveredDate', false)
                    // commit('setLoading', false);
                    // router.push({path: '/check-address'});
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async fetchGuestOrders({state, commit}, payload){

            let orders = [];

            await axios
                .get('/fetch-guestorders')
                .then(response => {
                    orders = response.data.orders;
                    commit('setOrders', orders)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async fetchCategories({commit}){

            let categories = [];

            await axios
                .get('/admin/fetch-categories')
                .then(response => {
                    categories = response.data.categories;
                    commit('setCategories', categories)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async fetchCategory({state, commit}, payload){

            let category = {};
            let allerror = [];

            await axios
                .get('/admin/fetch-category/' + payload.id)
                .then(response => {
                    category = response.data.category;
                    commit('setCategory', category)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async editSubtitle({state, commit}, payload){

            //console.log('payload', payload)

            let newSubtitle = "";
            let allerror = [];

            await axios
                .post('/admin/edit-subtitle', {
                    id: payload.id,
                    subtitle: payload.subtitle
                })
                .then(response => {
                    newSubtitle = response.data.subtitle;
                    commit('setCategorySubtitle', newSubtitle);
                    commit('setShowEditSubtitle', false);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async editDetails({state, commit}, payload){

            //console.log('payload', payload)

            let newDetails = "";
            let allerror = [];

            await axios
                .post('/admin/edit-details', {
                    id: payload.id,
                    details: payload.details
                })
                .then(response => {
                    newDetails = response.data.details;
                    commit('setCategoryDetails', newDetails);
                    commit('setShowEditDetails', false);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async editDetailsEn({state, commit}, payload){

            //console.log('payload', payload)

            let newDetails = "";
            let allerror = [];

            await axios
                .post('/admin/edit-detailsen', {
                    id: payload.id,
                    details: payload.details
                })
                .then(response => {
                    newDetails = response.data.details;
                    commit('setCategoryDetailsEn', newDetails);
                    commit('setShowEditDetailsEn', false);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async editDescription({state, commit}, payload){

            //console.log('payload', payload)

            let newDescription = "";
            let allerror = [];

            await axios
                .post('/admin/edit-description', {
                    id: payload.id,
                    description: payload.description
                })
                .then(response => {
                    newDescription = response.data.description;
                    commit('setCategoryDescription', newDescription);
                    commit('setShowEditDescription', false);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async editDescriptionEn({state, commit}, payload){

            //console.log('payload', payload)

            let newDescription = "";
            let allerror = [];

            await axios
                .post('/admin/edit-descriptionen', {
                    id: payload.id,
                    description: payload.description
                })
                .then(response => {
                    newDescription = response.data.description;
                    commit('setCategoryDescriptionEn', newDescription);
                    commit('setShowEditDescriptionEn', false);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async editSeason({state, commit}, payload){

            //console.log('payload', payload)

            let newSeason = "";
            let allerror = [];

            await axios
                .post('/admin/edit-season', {
                    id: payload.id,
                    season: payload.season
                })
                .then(response => {
                    newSeason = response.data.season;
                    commit('setCategorySeason', newSeason);
                    commit('setShowEditSeason', false);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async editSeasonEn({state, commit}, payload){

            //console.log('payload', payload)

            let newSeason = "";
            let allerror = [];

            await axios
                .post('/admin/edit-seasonen', {
                    id: payload.id,
                    season: payload.season
                })
                .then(response => {
                    newSeason = response.data.season;
                    commit('setCategorySeasonEn', newSeason);
                    commit('setShowEditSeasonEn', false);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async editIngredients({state, commit}, payload){

            //console.log('payload', payload)

            let newIngredients = "";
            let allerror = [];

            await axios
                .post('/admin/edit-ingredients', {
                    id: payload.id,
                    ingredients: payload.ingredients
                })
                .then(response => {
                    newIngredients = response.data.ingredients;
                    commit('setCategoryIngredients', newIngredients);
                    commit('setShowEditIngredients', false);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async editIngredientsEn({state, commit}, payload){

            //console.log('payload', payload)

            let newIngredients = "";
            let allerror = [];

            await axios
                .post('/admin/edit-ingredientsen', {
                    id: payload.id,
                    ingredients: payload.ingredients
                })
                .then(response => {
                    newIngredients = response.data.ingredients;
                    commit('setCategoryIngredientsEn', newIngredients);
                    commit('setShowEditIngredientsEn', false);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async editImage({state, commit}, payload){

            //console.log('payload', payload)

            // let newImage = "";
            // let absolutePath = "";
            let newImage='';
            let allerror = [];

            let data = new FormData();
            data.append("image", payload.image);
            data.append("id", payload.id)

            let config = {headers: {'Content-Type': 'multipart/form-data'}};

            await axios
                .post('/admin/edit-image', data, config)
                .then(response => {
                    // newImage = response.data.image;
                    // absolutePath = response.data.absolute_path;
                    // console.log('image', newImage);
                    // console.log('absolute', absolutePath);
                    newImage = response.data.image;
                    // commit('setCategoryImage', newImage);
                    commit('setCategoryImage', newImage);
                    commit('setShowEditImage', false);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },

        async fetchProducts({commit}){

            let products = [];
            let allerror = [];

            await axios
                .get('/admin/fetch-products')
                .then(response => {
                    products = response.data.products;
                    commit('setProducts', products)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },

        async fetchProduct({state, commit}, payload){

            let product = {};
            let total = '';
            let allerror = [];

            await axios
                .get('/admin/fetch-product/' + payload.id)
                .then(response => {
                    product = response.data.product;
                    total = response.data.total;
                    commit('setProduct', product);
                    commit('setTotal', total)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })

        },

        async updateInventory({state, commit}, payload){

            let inventory ="";
            let allerror = [];

            await axios
                .post('/admin/update-inventory', {
                    id: payload.id,
                    inventory: payload.inventory
                })
                .then(response => {
                    inventory = response.data.inventory;
                    commit('setInventory', inventory);
                    commit('setShowUpdateInventory', false);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })

        },
        async createCategory({state, commit}, payload){

            //console.log('payload', payload)

            let category = {};
            let allerror = [];

            let data = new FormData();
            data.append("name", payload.name);
            data.append("subtitle", payload.subtitle);
            data.append("details", payload.details);
            data.append("description", payload.description);
            data.append("season", payload.season);
            data.append("ingredients", payload.ingredients);
            data.append("image", payload.image);
            data.append("status_id", payload.status_id)

            let config = {headers: {'Content-Type': 'multipart/form-data'}};

            await axios
                .post('/admin/create-category', data, config)
                .then(response => {
                    // category = response.data.category;
                    // commit('setCategory', category);
                    commit('setLoading', false);
                    router.push({path: '/admin/categories-list'});
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async fetchCategoryStatuses({state, commit}){

            let statuses = [];
            let allerror = [];

            await axios
                .get('/admin/fetch-statuses')
                .then(response => {
                    statuses = response.data.statuses;
                    //console.log('response', statuses)
                    commit('setCategoryStatuses', statuses);
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async updateCategoryStatus({state, commit}, payload){

            let status = "";
            let allerror = [];

            await axios
                .post('/admin/update-status', {
                    id: payload.id,
                    status_id: payload.status_id
                })
                .then(response => {
                    status = response.data.status;
                    //console.log('response', status)
                    commit('setCategoryStatus', status);
                    commit('setShowUpdateCategoryStatus', false)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async createProduct({state, commit}, payload){

            //console.log('payload', payload)

            let category = {};
            let allerror = [];

            await axios
                .post('/admin/create-product', {
                    name: payload.name,
                    size: payload.size,
                    slug: payload.slug,
                    price: payload.price,
                    if_set: payload.if_set,
                    category_id: payload.category_id,
                    inventory: payload.inventory,
                    status_id: payload.status_id,
                })
                .then(response => {
                    // category = response.data.category;
                    // commit('setCategory', category);
                    commit('setLoading', false);
                    router.push({path: '/admin/products-list'});
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },
        async updateProductStatus({state, commit}, payload){

            let status = "";
            let allerror = [];

            await axios
                .post('/admin/update-productstatus', {
                    id: payload.id,
                    status_id: payload.status_id
                })
                .then(response => {
                    status = response.data.status;
                    //console.log('response', status)
                    commit('setProductStatus', status);
                    commit('setShowUpdateProductStatus', false)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },

        async createUserReceipt({commit}, payload){

            let allerror = [];

            await axios
                .get('/admin/create-receipt/' + payload.id)
                .then(response => {
                    // products = response.data.products;
                    // commit('setProducts', products)
                    //console.log(response)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },

        async inputUserOrderNote({state, commit}, payload){

            let note = "";
            let allerror = [];

            await axios
                .post('/admin/input-userordernote', {
                    id: payload.id,
                    note: payload.note
                })
                .then(response => {
                    note = response.data.note;
                    //console.log('response', note)
                    commit('setOrderNote', note);
                    commit('setInputOrderNote', false)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },

        async updateUserOrderNote({state, commit}, payload){

            let note = "";
            let allerror = [];

            await axios
                .post('/admin/update-userordernote', {
                    id: payload.id,
                    note: payload.note
                })
                .then(response => {
                    note = response.data.note;
                    //console.log('response', note)
                    commit('setOrderNote', note);
                    commit('setUpdateOrderNote', false)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },

        async inputGuestOrderNote({state, commit}, payload){

            let note = "";
            let allerror = [];

            await axios
                .post('/admin/input-guestordernote', {
                    id: payload.id,
                    note: payload.note
                })
                .then(response => {
                    note = response.data.note;
                    //console.log('response', note)
                    commit('setOrderNote', note);
                    commit('setInputGuestNote', false)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },

        async updateGuestOrderNote({state, commit}, payload){

            let note = "";
            let allerror = [];

            await axios
                .post('/admin/update-guestordernote', {
                    id: payload.id,
                    note: payload.note
                })
                .then(response => {
                    note = response.data.note;
                    //console.log('response', note)
                    commit('setOrderNote', note);
                    commit('setUpdateGuestNote', false)
                })
                .catch(error => {
                    allerror = error.response.data.errors,
                    commit('setallErrors', allerror)
                })
        },

        // async createEmailNews({commit}, payload){

        //     let data = new FormData();
        //     data.append("image", payload.image);
        //     data.append("p1_heading", payload.p1_heading);
        //     data.append("p1_main", payload.p1_main);
        //     data.append("p2_heading", payload.p2_heading);
        //     data.append("p2_main", payload.p2_main);
        //     data.append("p2_link", payload.p2_link);
        //     data.append("p3_heading", payload.p3_heading);
        //     data.append("p3_main", payload.p3_main);
        //     data.append("p3_link", payload.p3_link);
        //     data.append("p4_heading", payload.p4_heading);
        //     data.append("p4_main", payload.p4_main);
        //     data.append("p4_link", payload.p4_link);

        //     let config = {headers: {'Content-Type': 'multipart/form-data'}};

        //     await axios
        //         .post('/admin/create-emailnews', data, config)
        //         .then(response => {
        //             commit('setLoading', false);
        //         })
        //         .catch(error => {
        //             allerror = error.response.data.errors,
        //             commit('setallErrors', allerror)
        //         })
        // },
        
        async createEmailNews({commit, dispatch}, payload){

            let news = {}
            let allerror = [];

            await axios
                .post('/admin/create-emailnews', {
                    subject: payload.subject,
                    image: payload.image,
                    p1_heading: payload.p1_heading,
                    p1_main: payload.p1_main,
                    p1_menu: payload.p1_menu,
                    p2_heading: payload.p2_heading,
                    p2_main: payload.p2_main,
                    p2_link: payload.p2_link,
                    p2_btntext: payload.p2_btntext,
                    p3_heading: payload.p3_heading,
                    p3_main: payload.p3_main,
                    p3_link: payload.p3_link,
                    p3_btntext: payload.p3_btntext,
                    p4_heading: payload.p4_heading,
                    p4_main: payload.p4_main,
                    p4_link: payload.p4_link,
                    p4_btntext: payload.p4_btntext,
                    p5_heading: payload.p5_heading,
                    p5_main: payload.p5_main,
                    p5_link: payload.p5_link,
                    p5_btntext: payload.p5_btntext,
                })
                .then(response => {
                    news = response.data.news;
                    dispatch('sendNews', {news:news});
                    commit('setLoading', false);
                })
                .catch(error => {
                    // console.log(error);
                    allerror = error.response.data.errors;
                    commit('setallErrors', allerror)
                })
        },

        async sendNews({commit}, payload) {

            // console.log('notify', payload);
            let allerror = [];
    
            await axios
                .post("/admin/send-news", {
                    news: payload.news
                })
                .then(response => {
                    // console.log(response);
                })
                .catch(error => {
                    allerror = error.response.data.errors
                    commit('setallErrors', allerror)
                })
        },
        
        




    }

}