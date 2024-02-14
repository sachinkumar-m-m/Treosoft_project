const express = require('express');
const connectToDB =  require('./Config/conn')
const downloadRoute = require('./Routes/downloadRoute')
const createRoute = require('./Routes/createRoute')
require('dotenv').config();


const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors());

try {
    connectToDB()
} catch (error) {
    console.log(`ERROR ${error}`);
}



app.get('/',(req,  res)=>{
    res.status(200).json({success: true, message : 'This is from get route'})
})

app.use('/api/download', downloadRoute);
app.use('/api/create', createRoute);



const PORT = 9000

app.listen(PORT, () => {
    console.log(`...................................Server is running on port ${PORT}.................................`);
});
