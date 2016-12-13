var expect=require('chai').expect;
// var request=require('request');
var chai=require('chai');

var request = require('supertest');

describe("routing",function(){
	it("should call function to return list of obj",function(done){
	    
	    var server = require('../server.js')
		request( server ).get('/blist')
		.end(function(err,res){
		 if(err){
			 done(err);
		 }else{
		 	console.log(res.body);
		 	var expected =[{'id':1,'name':'name1'},{'id':2,'name':'name2'}];
		 	expect(res.body).to.deep.equal(expected )
		     done();
	 }
		});
	});
});


//post
// describe("routing",function(){
// 	it("should call function to return list of obj",function(done){
	   s
// 	    var server = require('../server.js')
// 		request( server )
// 		.post('/listt')
// 		.send({'id':3,'name':'name3'})
// 		.end(function(err,res){
// 		 if(err){
// 			 done(err);
// 		 }else{
// 		 	var expected =[{'id':1,'name':'name1'},{'id':2,'name':'name2'},{'id':3,'name':'name3'}];
// 		 	expect(res.body).to.deep.equal(expected )
// 		     done();
// 	 		}
// 		});
// 	});
// });