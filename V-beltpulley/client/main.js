$('.carousel').carousel({
  interval: 5000
})
Template.product.events({
'click .btn'(event){
event.preventDefault();
var a = document.getElementsByClassName("prc")[0].value; 
console.log(a);
if(!a){
console.log("enter a number");
}

else
{
console.log("submit");
}
},
});
