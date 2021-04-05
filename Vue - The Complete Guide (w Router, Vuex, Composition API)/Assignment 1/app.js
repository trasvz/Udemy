const app = Vue.createApp({
    data() {
        return{
            yourName: 'Timo',
            yourAge: 22,
            url: 'https://pbs.twimg.com/media/ElGn7pFUwAEF6Y8?format=jpg&name=medium'
        };
    },
    methods: {
        favNum(){
            return randomN = Math.random()
        }
    }
});

app.mount('#assignment')