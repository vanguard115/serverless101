# serverless101 

Enter first name, last name, age the fucntion witll retun something like a Speak function.



## Setting up Lambda
Create a new Lambda function with "Simple Mocroservices permission"
paste the code under "lambdaFunc"
Change lambda handler name to "lambda_function.dataEcho"
Save and run tests with json: { "first": "Timothy", "last": "Hawk", "age": "45" }

## API Gateway
Create simple API Gateway as Lambda trigger
Delete "ALL" method and create a GET and POST
Select Intergation Type as Lambda, select the region the function you created
Allow CORS
Set authorization to null
Deploy the Methods
This will return an URL like https://something.execute-api.ap-southeast-1.amazonaws.com/Stage/FunctionName
Copy this link

## Front end
in scripts.js set ""var theUrl = https://something.execute-api.ap-southeast-1.amazonaws.com/Stage/FunctionName""

## Usage
open Index.html in a webbrowser and enter FirstName,LanstName,Age the function will return a single line of text.
