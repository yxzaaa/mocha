Mocha
安装 Mocha ：cnpm i -g mocha
npm init
安装为mocha项目dev依赖：cnpm i --save-dev mocha
安装为chai项目dev依赖：cnpm i --save-dev chai    断言库
创建文件 add.js 被测试的函数
创建文件 add.test.js 测试用例
cmd: mocha add.test.js

describe:test suite 测试套件 一个测试套件包含一测试用例
语法：describe('测试套件名',function(){})
it:test case 测试用例，一个测试用例就是一次测试
it('这次测试的名称',function(){});
chai断言基本语法：expect().to.be.equal();  一条断言 assertion

创建文件夹test ，将测试脚本放在其中，cmd：mocha 会自动执行测试脚本
