module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:1337',
                changeOrigin:true,
                ws:true,
                secure:false,
            }
        }
    }
}