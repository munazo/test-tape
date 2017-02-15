const test = require('tape');
const { sum } = require('../index');

test('timing test', function (t) {
  t.equal(sum(1, 2), 3);
  t.equal(sum(2, 1), 3);
  // t.plan(1);
  // 
  // t.equal(typeof Date.now, 'function');
  // var start = Date.now();
  // 
  // setTimeout(function () {
  //     t.equal(Date.now() - start, 100);
  // }, 100);
});