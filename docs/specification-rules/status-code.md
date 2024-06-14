# Status Code

## bpi-http-error-code-reference

We have a designLibrary that contains all the error blocks we will need. In this way, whenever you implement one of these http error codes, always refer to designLibrary and the corresponding code.

Example: Http 400, we have error block 400.

![bpi-http-error-code-reference](https://raw.github.com/bancobpi/style-guide/main/static/bpi-http-error-code-reference.jpg)

## bpi-should-use-well-http-status-codes

For each verb we have a specific list of http codes that we must respect:

verb           | allowed http codes            | example path
---------------|-------------------------------|---------
 get           | 200,400,500                   | /stores
 getWithId     | 200,400,404,500               | /stores/{id}/accounting-days
 getById       | 200 or 206 and 400,404,500    | /stores/{id}
 getAsyncId    | 200,302,400,404,500           | /async/employee-accounts/{id}
 post          | 201 or 202 and 400,409,500    | /stores
 postWithId    | 201 or 202 and 400,404,409,500| /stores/{id}/accounting-days
 postForSearch | 200,400,500                   | /search-transactions
 postAsync     | 202,400,409,500               | /async/employee-accounts
 put           | 200,400,404,409,500           | /products/{id}
 delete        | 204,400,404,409,500           | /accounting-days/{id}
