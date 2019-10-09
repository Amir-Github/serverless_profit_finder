const profit_finder = require("../src/max_profit_finder");

exports.handler = async (event) => {

  let data_array = get_validated_input(event.queryStringParameters === null ? null : event.queryStringParameters.input);

  if (data_array !== null) {
	return build_http_response(200, build_analysis_result_message(data_array, profit_finder.get_max_profit(data_array)));
  } else {
	return build_http_response(400, "input needs to be an array of at least 2 integer elements!");
  }
};

/// Validates input & returns null if invalid
function get_validated_input(input) {
  if (input !== null) {
  	try {
  	  input = JSON.parse(input);
	  if (Array.isArray(input) && input.length > 1)
	    return input
	} catch (exp) {}
  }

  return null;
}

function build_http_response(http_code, body) {
  return { statusCode: http_code, body: body };
}

function build_analysis_result_message(original_data, result) {
  if (result.best_profit_margin === 0) {
	return "You could NOT have made any profit based on your dataset.";
  } else {
	return "Max possible profit: $" + result.best_profit_margin +
	  " - (buying for $" + original_data[result.buy_index] +
	  " and selling for $" + original_data[result.sell_index] + ")";
  }
}