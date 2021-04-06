const app = Vue.createApp({
    data() {
        return{
            nomer2: '',
            nomer3: '',
            nomer3beneran:''
        };
    },
    methods: {
        alert(){
            alert('Hello!');
        },
        no2(event){
            this.nomer2 = event.target.value;
        },
        no3(event){
            this.nomer3 = event.target.value;
        },
        isi(){
            this.nomer3beneran = this.nomer3;
        }
    }
});

app.mount('#assignment')