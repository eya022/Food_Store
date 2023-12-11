const express = require('express') ;
const  path  = require('path');
const cors = require('cors');
const app = express() ;


const usersList = [] ;
app.use(cors()) ;
app.use(express.json());

app.get('/loginpage',(req,res) =>{

    res.send('Login Page Here ') ;

});

app.get('/registerpage',(req,res) =>{

    res.sendFile(path.join(__dirname,('public/register.html'))) ;
});

app.get('/main',(req,res) =>{

    res.sendFile(path.join(__dirname,('public/main.html'))) ;
});

app.get('/add',(req,res) =>{

    res.sendFile(path.join(__dirname,('public/addfood.html'))) ;
});


app.get('/',(req,res) =>{

    res.sendFile(path.join(__dirname,('public/login.html'))) ;

});



app.post('/register', (req, res) => {
    try {
        const { name, lastname, phone, password } = req.body;
        console.log("Received data:", { name, lastname, phone, password });

        res.status(200).send(`User Successfully Registered !`);
        usersList.push({ name, lastname, phone, password });
    } catch (err) {
        console.error(err);
        res.status(400).send('Registration Failed');
    }
});


app.post('/addfood',(req,res) =>{

try{
const{name,price,restaurant,description,image} = req.body ;

}catch(err){
    
    res.status(400).send('Error Adding Food') ;
}

});



app.post('/login',(req,res) =>{

    try{
    const {phone,password} = req.body ;
    res.status(200).send('Logged in Successfully !') ;
    }catch(err){
        res.status(400).send('No User Found') ;
    }

   
});


app.listen(3000,()=>{

    console.log('Server is Running on Port : 3000 ');
});
