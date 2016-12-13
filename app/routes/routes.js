
	module.exports = function(app){
	 
	var obj = require("../controller/mainController.js");

	 app.get('/blist',function(req,res){
		res.send(obj.list);
	 }); 

	 app.post('/listt',obj.listt)
	
	}
