Meteor.methods({
  'pulley.insert'(values) {
	Pulley.insert(values);
   },
   'pulley.update'(idji, valuesji) {
	Pulley.update(idji,{$set:valuesji});
   }
});
