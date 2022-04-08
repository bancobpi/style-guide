# Status Code

## bpi-http-error-code-reference

We have a designLibrary that contains all the error blocks we will need. In this way, whenever you implement one of these http error codes, always refer to designLibrary and the corresponding code.

Example: Http 400, we have error block 400.

![bpi-http-error-code-reference](https://raw.github.com/bancobpi/style-guide/main/static/bpi-http-error-code-reference.jpg)

## bpi-allowed-get-list-http-code

Example: get /stores
For each verb we have a specific http code list, this way when it is the get list the codes that have to be mapped are the [200,206,400,500]. 

## bpi-not-allowed-get-list-http-code

Example: get /stores
When there is a code other than those allowed [200,206,400,500], an error message will be generated.

## bpi-allowed-get-list-id-http-code

Example:  get /stores/{id}/accounting-days
For each verb we have a specific list of codes, so when the get list with id the codes that must be mapped are the [200,206,400,404,500].

## bpi-not-allowed-get-list-id-http-code

Example:  get /stores/{id}/accounting-days
When there is a code other than those allowed [200,206,400,404,500], an error message will be generated.

## bpi-allowed-get-by-id-http-code

Example:  get /stores/{id}
For each verb we have a specific list of codes, so when the get list by id the codes that must be mapped are [200,400,404,500].

## bpi-not-allowed-get-by-id-http-code

Example:  get /stores/{id}
When there is a code other than those allowed [200,400,404,500], an error message will be generated.

## bpi-allowed-put-http-code

For each verb we have a specific list of codes, so when the put the codes that must be mapped are [200,400,404,409,500].

## bpi-not-allowed-put-http-code

When there is a code other than those allowed [200,400,404,409,500], an error message will be generated.

## bpi-allowed-post-http-code

Example: post /accounting-days
For each verb we have a specific list of codes, so when the post the codes that must be mapped are [(201 or 202),400,409,500].

## bpi-not-allowed-post-http-code

Example: post /accounting-days
When there is a code other than those allowed [(201 or 202),400,409,500], an error message will be generated.

## bpi-allowed-post-by-id-http-code

Example: post /stores/{id}/accounting-days
For each verb we have a specific list of codes, so when the post with id the codes that must be mapped are [(201 or 202),400,404,409,500].

## bpi-not-allowed-post-by-id-http-code

Example: post /stores/{id}/accounting-days
When there is a code other than those allowed [(201 or 202),400,404,409,500], an error message will be generated.

## bpi-allowed-delete-http-code

For each verb we have a specific list of codes, so when the delete the codes that must be mapped are [(200 or 204),400,404,409,500].

## bpi-not-allowed-delete-http-code

When there is a code other than those allowed [(200 or 204),400,404,409,500], an error message will be generated.
