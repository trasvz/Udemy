const app = Vue.createApp({
    data() {
        return{
            listnya:[],
            lagiKetik:'',
            isLihat: true
        };
    },
    methods: {
        tambah(){
            // console.log("cektambah")
            this.listnya.push(this.lagiKetik);
            this.lagiKetik='';
        },
        togg(){
            // console.log("cektoggel")
            this.isLihat = !this.isLihat;
        },
        capt(){
            // console.log("cek1")
            if(this.isLihat==true){
                return 'Hide';
            }else{
                return 'Show';
            }
        }
    }
});

app.mount('#assignment')