/**
 * Created by web-01 on 2017/11/16.
 */
//测试用例
var add = require('../add');
var sub = require('../sub');
// console.log(add(1,2));
var expect = require('chai').expect;
describe('add() fnTest',function(){
    it('1 + 2 = 3',function(){
        expect(add(1,2)).to.be.equal(3);
    });
    it('1 + 0 = 1',function(){
        expect(add(1,0)).to.be.equal(1);
    });
});
describe('sub() fnTest',function(){
    it('2-1=1',function(){
        expect(sub(2,1)).to.be.equal(1);
    });
});