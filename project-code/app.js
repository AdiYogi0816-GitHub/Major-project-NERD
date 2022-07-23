const express = require('express');
const app = express();
fetch=require("node-fetch")
const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});


var bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 


const path = require('path');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(`${__dirname}/public`)); //order dekh lena

// const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);//simply we are replacing password with real password
// mongoose.connect(DB,{//simply connecting with the database
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useFindAndModify:false,
//     useUnifiedTopology: true
// }).then(con=>{
//     // console.log(con.connections);
//     console.log('DB Connected successfully');
// });

app.get('/',(req,res)=>{
    res.status(200).render('base', {

    });
})





app.get('/NERDpast/blacklist-ip', (req, res) => {

    res.status(200).render('blackListForm.pug', {
        data: "dummy text",
        title: 'Hi from Prashant',
    });
});
app.post('/NERDpast/blacklist-ip/',(req,res)=>{
    console.log(req.body.ipAdd)
    fetch(`https://neutrinoapi.net/ip-blocklist?ip=${req.body.ipAdd}&api-key=1tk2SFjwej8vW9Y66n6lafMWsyKchmYUt7Hb64SYaTxZ8ziP&user-id=mahakaal0189`)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data)
            res.status(200).render('blackListDetails', {
                data: data,
                title: 'Here are the details related to this IP',
            });
        })
        .catch((err) => {
            res.status(400).render('error', {
                message: 'Something went wrong... Please try again Later'
            });
        });
});




app.get('/NERDpast/emailValidate', (req, res) => {

    res.status(200).render('emailValidateForm.pug', {
        data: "dummy text",
        title: 'Hi from Prashant',
    });
});
app.post('/NERDpast/emailValidate/',(req,res)=>{
    console.log(req.body.inputEmail)
    fetch(`https://neutrinoapi.net/email-validate?email=${req.body.inputEmail}&api-key=1tk2SFjwej8vW9Y66n6lafMWsyKchmYUt7Hb64SYaTxZ8ziP&user-id=mahakaal0189`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            res.status(200).render('emailValidateDetails', {
                data: data,
                title: 'Here are the details related to this IP',
            });
        })
        .catch((err) => {
            res.status(400).render('error', {
                message: 'Something went wrong... Please try again Later'
            });
        });
})




app.get('/NERDpast/phoneValidate', (req, res) => {

    res.status(200).render('phoneValidateForm.pug', {
        data: "dummy text",
        title: 'Hi from Prashant',
    });
});
app.post('/NERDpast/phoneValidate/',(req,res)=>{
    //console.log(req.body.phoneNum)
    fetch(`https://neutrinoapi.net/phone-validate?number=${req.body.phoneNum}&api-key=1tk2SFjwej8vW9Y66n6lafMWsyKchmYUt7Hb64SYaTxZ8ziP&user-id=mahakaal0189`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            res.status(200).render('phoneValidateDetails', {
                data: data,
                title: 'Here are the details related to this Phone',
            });
        })
        .catch((err) => {
            res.status(400).render('error', {
                message: 'Something went wrong... Please try again Later'
            });
        });
})





app.get('/NERDpast/wordFilter', (req, res) => {

    res.status(200).render('wordFilterForm.pug', {
        data: "dummy text",
        title: 'Hi from Prashant',
    });
});
app.post('/NERDpast/wordFilter/',(req,res)=>{
    //console.log(req.body.content);
    fetch(`https://neutrinoapi.net/bad-word-filter?content=${req.body.content}&api-key=1tk2SFjwej8vW9Y66n6lafMWsyKchmYUt7Hb64SYaTxZ8ziP&user-id=mahakaal0189`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            res.status(200).render('wordFilterDetails', {
                data: data,
                title: 'Here are the details related to this Phone',
            });
        })
        .catch((err) => {
            res.status(400).render('error', {
                message: 'Something went wrong... Please try again Later'
            });
        });
})





const port = process.env.PORT || 3000 ;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
