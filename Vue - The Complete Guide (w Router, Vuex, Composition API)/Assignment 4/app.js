const app = Vue.createApp({
    data() {
        return{
            clas:'',
            clas1: false,
            clas2: false,
            ishid: false,
            warna:''
        };
    },
    computed: {
        ganti(){
            // console.log(this.clas)
            if(this.clas=='user1'){
                this.clas1 = true;
                this.clas2 = false;
            }
            else if(this.clas=='user2'){
                this.clas1 = false;
                this.clas2 = true;
            }
        }
    },
    methods: {
        togg(){
            this.ishid = !this.ishid;
        }
    }
});

app.mount('#assignment')