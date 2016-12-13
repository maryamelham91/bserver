var expect=require('chai').expect;
// var request=require('request');
var list=require('../app/controller/mainController.js');

//function list()
describe('list()',function(){
  it('should return array of objects', function(){
    var arrlist=list.list();
    console.log(arrlist);
    expect(arrlist).to.be.an('array').with.length(2);
    expect(arrlist[0]).to.be.an('object');
    expect(arrlist[0].id).to.equal(1);
    // expect(arrlist[0].id).to.be.a('number');
    expect(arrlist[0].name).to.be.a('string');
     })
  })

