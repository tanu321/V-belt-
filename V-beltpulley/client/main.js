$('.carousel').carousel({
  interval: 5000
});

Template.addProduct.events({
'click #add-product-btn'(events){
     var name = $('#name').val();
     var weight = $('#weight').val();
     var profit = $('#profit').val();
     var typeOfProduct = $('#typeOfProduct').val();
     var values = { name:name, weight:weight, profit:profit, typeOfProduct:typeOfProduct };	
     Meteor.call('pulley.insert',values, function(err, data) {
		if(err) {
			alert("there was some error in inserting value" + err);

		} else {
			alert("Value has been inserted");
		}
	});
}
});

Template.getProducts.events({
'click #search-button'(events){
    var type = $('#sformTypeOfProduct').val();
    var price = $('#sformPrice').val();
    var results = Pulley.find({typeOfProduct:type}).fetch();
    var newResults = [];
    for (i in results) {
       res = results[i];
       res.actualPrice = (price*res.weight)+res.profit;
       results[i] = res;
    }
console.log(results);
Session.set('pull',results);
}
});
Template.getProducts.helpers({
pulleys:function(){
return Session.get('pull');

}

});
  Template.getProducts.events({
    'click button'(events){
     var a=documnt.getElementById("form");
       return a;
}
});
