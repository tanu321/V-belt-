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
	BlazeLayout.render("iron");
}
});

FlowRouter.route('/product',{
action: function(){
	BlazeLayout.render("product");
}
});

FlowRouter.route('/about',{
action: function(){
	BlazeLayout.render("about");
}
});

