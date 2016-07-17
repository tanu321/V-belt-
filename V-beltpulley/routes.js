FlowRouter.route('/',{
action: function(){
	BlazeLayout.render("evehi");
}
});

FlowRouter.route('/home',{
action: function(){
	BlazeLayout.render("home");
}
});

FlowRouter.route('/iron',{
action: function(){
	BlazeLayout.render("recentPrices");
}
});

FlowRouter.route('/product',{
action: function(){
	BlazeLayout.render("product");
}
});
FlowRouter.route('/getProducts',{
action: function(){
	BlazeLayout.render("getProducts");
}
});

FlowRouter.route('/addProducts',{
action: function(){
	BlazeLayout.render("addProduct");
}
});

FlowRouter.route('/about',{
action: function(){
	BlazeLayout.render("about");
}
});
<<<<<<< HEAD
=======

>>>>>>> 7eec089e820b25805acbda37e8a8b2d0d6fae294
