const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
app.set('view engine', 'ejs');
var  items =["buy food","cook food", "eat food"];
var workItems = [];
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));


app.get("/" , function(request , response){

let today = new Date();

// var currentDay = today.getDay();



// var day = "";
// if(currentDay === 6 || currentDay === 0){
// day =  weekday[currentDay];
//
// //day = "weekand";
// }
// else{
// day =  weekday[currentDay];
// }

const day = date.getDate();

response.render("list" ,{listoftitle  :day, listitems:items});


});


app.post("/",function(req,res){
  let itemarreay = req.body.item;
if(req.body.list==="work"){
  workItems.push(itemarreay);
  res.redirect("/work")
}
  else{
  items.push(itemarreay);
res.redirect("/");
}

})
app.post("/remove",function(req,res){
  let itemarreay = req.body.item;
  items.pop(itemarreay);
  res.redirect("/");
})

app.get("/work",function(req ,res){
  res.render("list",{listoftitle:"work list",listitems:workItems})
})

app.post("/work",function(req,res){
  let itemarreay = req.body.item;
  items.push(itemarreay);
res.redirect("/work");


})
app.get("/about",function(req,res){
  res.render("about")
})


app.listen(port , function(){
  console.log("my server up");
});
