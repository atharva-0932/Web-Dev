import express from 'express';
const app=express();
const port=3000;
app.get('/', (req,res) =>{
    res.send('Hello');
})
app.get('/about/', (req,res) =>{
    res.send("About us");
})
app.get('/contact',(req,res)=>{
    res.send("Contact us");
})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);   
})