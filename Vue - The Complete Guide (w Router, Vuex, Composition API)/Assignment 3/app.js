const app = Vue.createApp({
    data() {
        return{
            hasil: 0,
            RESULT: ''
        };
    },
    watch: {
        hasil(value){
            if(value!=0){
                const that = this;
                setTimeout(function(){
                    that.hasil = 0;
                }, 5000);
            }
        }
    },
    computed: {
        hitung(){
            // console.log("halo")
            if(this.hasil===0){
                return this.RESULT = '';
            }
            else if(this.hasil < 37){
                return this.RESULT = 'Not there yet';
            }
            else if(this.hasil > 37){
                return this.RESULT = 'Too much!';
            }
            else{
                return this.RESULT = '37';
            }
        }
    },
    methods: {
        tambah(jumlah){
           this.hasil = this.hasil + jumlah;
        //    console.log(this.hasil)
        }
    }
});

app.mount('#assignment')