const {createApp} = Vue;

const app = createApp({
    data() {
        return{
            message : "Hello Vue !!!",
            image : "https://picsum.photos/400/429?random",
            userNumber :"",
            result : "",
            fontclass :"fontclass"
        }
    },
    methods : {
        OddOrEven : function(){
            if(this.userNumber % 2 === 0 ){
                this.result = "Il numero che hai scelto è pari";
                this.color = "pari";
            }else{
                this.result = "Il numero che hai scelto è dispari";
                this.color = "dispari";
            }
        }
    }
})
app.mount("#app");