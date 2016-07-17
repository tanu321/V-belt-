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
       var weigh = parseInt(res.weight, 10);
	var profi = parseInt(res.profit, 10);
	console.log(profi);
       res.actualPrice =(price*weigh) + profi;
       results[i] = res;
    }
Session.set('pull',results);
},
'click .edit'(event){
    var name = $('#name'+this._id).val();
    var weight = $('#weight'+this._id).val();
    var profit = $('#profit'+this._id).val();
    var values = {name:name, weight:weight, profit:profit};
    var id = this._id;
    Meteor.call('pulley.update',id, values);
}
});
Template.getProducts.helpers({
pulleys:function(){
return Session.get('pull');
}

});


