var express = require('express');
var router = express.Router();
var readFile = require('../file');
var fs=require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//读取问题
router.get('/getData', function(req, res, next) {
  readFile.readFile('./static/db.json',function(err,data){
    if (err) {
       console.error(err);
   }
   res.send(data)
})
});

router.post('/updateData', function(req, res) {
   console.info(req.body.question)
   let question=req.body.question
   readFile.readFile('./static/db.json',function(err,data){
    if (err) {
       console.error(err);
    }
    if(!question.questionType){
      //普通
      data.getQuestionArray.push(question.content)
    }else{
      //隐私
      data.getQuestionArray2.push(question.content)
    }
    console.info(JSON.stringify(data))
    //写入
    fs.writeFile('./static/db.json',JSON.stringify(data));
})

   res.send({success:true})
});


module.exports = router;
