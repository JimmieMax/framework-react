module.exports ={
    Server:{
        host: "127.0.0.1",
        port: 5002,
        wholePath(){
            return this.host+':'+this.port;
        }
    }
};