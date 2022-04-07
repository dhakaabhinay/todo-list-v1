exports.getDate = function(){
var options = {
  weekday: "long",
  day: "numeric",
  month: "long",
   year: 'numeric'
};
let today = new Date();
let day = today.toLocaleDateString("en-US", options);
return day;
}
exports.getDay = function (){
var options = {
  weekday: "long",

};
let today = new Date();
let day = today.toLocaleDateString("en-US", options);
return day;
}
