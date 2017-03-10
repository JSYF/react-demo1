var Router = require("express").Router();
var fs = require('fs');
Router.get('/getData', function(req, res, next) {
    fs.readFile('./server/data/testData.json', function(err, data) {
        if (err) {
            res.json({error: 0,error_message: "读取文件失败"})
        } else {
            res.json(JSON.parse(data))
        }
    });
});
Router.post("/postData", function(req, res, next) {
    var file = fs.readFileSync('./server/data/testData.json');
    var data = JSON.parse(file)
    data.push({id:data.length+1,author:req.body.author,text:req.body.text});
        console.log(data)
    data = JSON.stringify(data)
    fs.writeFile('./server/data/testData.json',data,function(err){
        if(err){
            res.json({error: 0,error_message: "写入文件失败"})
        }else{
            res.json(JSON.parse(data))
        }
    })
})
module.exports = Router;