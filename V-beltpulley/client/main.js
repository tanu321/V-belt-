$('.carousel').carousel({
  interval: 5000
});

Template.addProduct.events({
'click #add-product-btn'(events){
     var name = $('#name').val();
     var weight = $('#weight').val();
     var profit = $('#profit').val();
     var typeOfProduct = $('#typeOfProduct').val();
     Pulley.insert({
	name: name,
        weight: weight,
        profit: profit,
        typeOfProduct: typeOfProduct
     });
}
});
