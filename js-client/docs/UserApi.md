# SwaggerTunningPlace.UserApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userInfoGet**](UserApi.md#userInfoGet) | **GET** /user/info | Find User info


<a name="userInfoGet"></a>
# **userInfoGet**
> User userInfoGet()

Find User info

### Example
```javascript
var SwaggerTunningPlace = require('swagger_tunning_place');
var defaultClient = SwaggerTunningPlace.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerTunningPlace.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userInfoGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

