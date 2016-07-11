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
