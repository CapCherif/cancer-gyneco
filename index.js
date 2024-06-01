const express = require('express');
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine', "ejs");
app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.render('index')
})




const PORT = 5000 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`App listening to port ${PORT}`);
})
