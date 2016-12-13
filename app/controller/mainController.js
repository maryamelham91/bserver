
 function list(req,res){
    var arr=[{'id':1,'name':'name1'},{'id':2,'name':'name2'}];
	return arr;
}

function listt(req,res){
	var resObj={'id':req.body.id,'name':req.body.name};
	console.log("resObj",resObj);
    var arr=[{'id':1,'name':'name1'},{'id':2,'name':'name2'}];
    arr.push(resObj);
    console.log(arr);
	return arr;
	}

exports.list=list;
exports.listt=listt;

