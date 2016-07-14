$('.carousel').carousel({
  interval: 5000
});

Template.product.events({
'click button'(events){

var a=$( "#myselect" ).val();
console.log(a);
}
});
