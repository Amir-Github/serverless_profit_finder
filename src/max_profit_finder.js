
var profit_finder = exports;

profit_finder.get_max_profit = function(data_array) {

  var trade_metadata = {
	best_profit_margin : 0,
	buy_index: -1,
	sell_index : -1
  };

  /// this is used as a circuit breaker to avoid any useless iterations
  var best_hypothetical_profit = find_biggest_difference(data_array);

  if (best_hypothetical_profit !== 0) {
	/// For simplicity I am assuming all elements are in fact integers.
	for (var buy_i = 0; buy_i < data_array.length-1; buy_i++) {
	  for (var sell_i = buy_i+1; sell_i < data_array.length; sell_i++) {
		if (data_array[sell_i] - data_array[buy_i] > trade_metadata.best_profit_margin) {
		  trade_metadata.best_profit_margin = data_array[sell_i] - data_array[buy_i];
		  trade_metadata.buy_index = buy_i;
		  trade_metadata.sell_index = sell_i;
		}
	  }
	  if (trade_metadata.best_profit_margin === best_hypothetical_profit) break;
	}
  }

  return trade_metadata;
};

/// returns the difference between the biggest and smallest values in the list
function find_biggest_difference(input) {
  var min = Number.MAX_SAFE_INTEGER;
  var max = 0;

  for (var i = 0; i < input.length; i++) {
    if (input[i] < min)
      min = input[i];
	if (input[i] > max)
	  max = input[i];
  }

  return max - min;
}