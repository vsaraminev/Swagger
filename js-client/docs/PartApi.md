# SwaggerTunningPlace.PartApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPart**](PartApi.md#addPart) | **POST** /part/create | Add a new part to the store
[**partAllGet**](PartApi.md#partAllGet) | **GET** /part/all | Find All Parts
[**partDeleteIdDelete**](PartApi.md#partDeleteIdDelete) | **DELETE** /part/delete/{id} | 
[**partDetailsIdGet**](PartApi.md#partDetailsIdGet) | **GET** /part/details/{id} | 
[**partEditIdPut**](PartApi.md#partEditIdPut) | **PUT** /part/edit/{id} | 


<a name="addPart"></a>
# **addPart**
> addPart(body)

Add a new part to the store



### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.PartApi();

var body = new SwaggerTunningPlace.Part(); // Part | Part object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPart(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Part**](Part.md)| Part object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partAllGet"></a>
# **partAllGet**
> Part partAllGet()

Find All Parts

### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');

var apiInstance = new SwaggerTunningPlace.PartApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.partAllGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Part**](Part.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partDeleteIdDelete"></a>
# **partDeleteIdDelete**
> partDeleteIdDelete(id)



Delete a single part

### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.PartApi();

var id = "id_example"; // String | Id of the part to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.partDeleteIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the part to delete | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partDetailsIdGet"></a>
# **partDetailsIdGet**
> Part partDetailsIdGet(id)



Returns a single part

### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.PartApi();

var id = "id_example"; // String | ID of part to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.partDetailsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of part to return | 

### Return type

[**Part**](Part.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partEditIdPut"></a>
# **partEditIdPut**
> partEditIdPut(id, body)



Update a part

### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.PartApi();

var id = "id_example"; // String | Id of the part to be updated

var body = new SwaggerTunningPlace.Part(); // Part | Updated part object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.partEditIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the part to be updated | 
 **body** | [**Part**](Part.md)| Updated part object | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

