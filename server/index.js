const express =require ('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser')
const routes=require('./routes/routes')
const app=express();
const cors=require('cors');

mongoose.connect('<dbLink>')
.then(()=>{console.log('success');
})
app.use(cors())
app.use(bodyParser.json());
app.use('', routes);


const PORT= process.env.PORT || 3001;
app.listen(PORT)