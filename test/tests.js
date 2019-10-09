const test = require('tape');
const profit_finder = require("../src/max_profit_finder");


test("Test the happy path", function (tape) {
  tape.plan(3);

  var result = profit_finder.get_max_profit([10, 7, 5, 8, 11, 9]);
  tape.equal(result.best_profit_margin, 6);
  tape.equal(result.buy_index, 2);
  tape.equal(result.sell_index, 4);
});

test("Test the disappointing path", function (tape) {
  tape.plan(3);

  var result = profit_finder.get_max_profit([10, 9, 8, 7, 6, 5, 4, 3, 2]);
  tape.equal(result.best_profit_margin, 0);
  tape.equal(result.buy_index, -1);
  tape.equal(result.sell_index, -1);
});


test("Test large data set", function (tape) {
  tape.plan(3);

  var test_data = [];
  for (var i = 1; i <= 100000; i++) {
    test_data.push( i === 5000 ? 1 : i + 10);
  }

  var result = profit_finder.get_max_profit(test_data);
  tape.equal(result.best_profit_margin, 100009);
  tape.equal(result.buy_index, 4999);
  tape.equal(result.sell_index, 99999);
});


