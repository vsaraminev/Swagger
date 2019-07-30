# SwaggerTunningPlace.ProjectApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProject**](ProjectApi.md#addProject) | **POST** /project/create | Add a new project
[**projectAllGet**](ProjectApi.md#projectAllGet) | **GET** /project/all | Find All Projects
[**projectDeleteIdDelete**](ProjectApi.md#projectDeleteIdDelete) | **DELETE** /project/delete/{id} | 
[**projectDetailsIdGet**](ProjectApi.md#projectDetailsIdGet) | **GET** /project/details/{id} | 
[**projectEditIdPut**](ProjectApi.md#projectEditIdPut) | **PUT** /project/edit/{id} | 


<a name="addProject"></a>
# **addProject**
> addProject(body)

Add a new project



### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.ProjectApi();

var body = new SwaggerTunningPlace.Project(); // Project | Project object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProject(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Project**](Project.md)| Project object that needs to be added | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectAllGet"></a>
# **projectAllGet**
> Project projectAllGet()

Find All Projects

### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.ProjectApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectAllGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectDeleteIdDelete"></a>
# **projectDeleteIdDelete**
> projectDeleteIdDelete(id)



Delete a single project

### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.ProjectApi();

var id = "id_example"; // String | Id of the project to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.projectDeleteIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the project to delete | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectDetailsIdGet"></a>
# **projectDetailsIdGet**
> Project projectDetailsIdGet(id)



Returns a single project

### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.ProjectApi();

var id = "id_example"; // String | ID of project to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectDetailsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of project to return | 

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectEditIdPut"></a>
# **projectEditIdPut**
> projectEditIdPut(id, body)



Update a project

### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.ProjectApi();

var id = "id_example"; // String | Id of the project to be updated

var body = new SwaggerTunningPlace.Project(); // Project | Updated project object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.projectEditIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the project to be updated | 
 **body** | [**Project**](Project.md)| Updated project object | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

