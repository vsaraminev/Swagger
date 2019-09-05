# SwaggerTunningPlace.OrderApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderAddPartIdPost**](OrderApi.md#orderAddPartIdPost) | **POST** /order/add/{partId} | Add a new order to the cart.
[**orderDetailsIdGet**](OrderApi.md#orderDetailsIdGet) | **GET** /order/details/{id} | 
[**orderUserGet**](OrderApi.md#orderUserGet) | **GET** /order/user | Find All User orders


<a name="orderAddPartIdPost"></a>
# **orderAddPartIdPost**
> orderAddPartIdPost(partId)

Add a new order to the cart.



### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.OrderApi();

var partId = "partId_example"; // String | ID of the part to buy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.orderAddPartIdPost(partId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | **String**| ID of the part to buy | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderDetailsIdGet"></a>
# **orderDetailsIdGet**
> Order orderDetailsIdGet(id)



Returns a single order

### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.OrderApi();

var id = "id_example"; // String | ID of order to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderDetailsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of order to return | 

### Return type

[**Order**](Order.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderUserGet"></a>
# **orderUserGet**
> Order orderUserGet()

Find All User orders

### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.OrderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderUserGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Order**](Order.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

