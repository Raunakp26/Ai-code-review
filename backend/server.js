require('dotenv').config();
const app=require('../backend/src/app')
app.listen(3000,()=>{
    console.log('server is runing on 3000');
})