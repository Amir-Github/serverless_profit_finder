## Summary

I have decided to use AWS Lambda with Node.js 8.10. 


## Live solution 

You can use the following endpoint to use the solution here:

https://60knhp2sll.execute-api.ap-southeast-2.amazonaws.com/default/find_best_profit

This API requires a query parameter called "input" which is meant to be an array of integers.

For Example:  

https://60knhp2sll.execute-api.ap-southeast-2.amazonaws.com/default/find_best_profit?input=[10,7,5,8,11,9]


## Run tests locally

You will need node and npm in order to be able to run the tests here. 
(I am using tape.js for testing purposes)

run the following commands:  

npm install  
node test/tests.js 
 



