
'use strict';

const express = require('express') ;
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser());
app.use(express.static('public'));

app.get('/',  (req, res)  => res.send('Hello World'));
app.get('/golgo',  (req, res)  => res.send('こんにちはゴルゴさん'));
app.get('/ted',  (req, res)  => res.send('こんにちはTEDさん'));
app.get('/login',  (req, res)  => res.sendFile(__dirname+'/public/login.html'));

app.post('/so',  (req, res)  => {
  console.log(req);
  console.log(req.body);
  if(req.body.userid === 'so' && req.body.password === 'sopass'){
    res.send("ログイン成功処理") ;
  }else{
    res.send("ログイン失敗処理") ;
  }
});

app.listen(PORT);
console.log(`listening on *: ${PORT}`);
