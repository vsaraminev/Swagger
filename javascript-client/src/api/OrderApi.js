/**
 * Swagger Tunning Place
 * This is a sample Tuning Palce server..
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Order'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerTunningPlace) {
      root.SwaggerTunningPlace = {};
    }
    root.SwaggerTunningPlace.OrderApi = factory(root.SwaggerTunningPlace.ApiClient, root.SwaggerTunningPlace.Order);
  }
}(this, function(ApiClient, Order) {
  'use strict';

  /**
   * Order service.
   * @module api/OrderApi
   * @version 1.0.0
   */

  /**
   * Constructs a new OrderApi. 
   * @alias module:api/OrderApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the orderAddPartIdPost operation.
     * @callback module:api/OrderApi~orderAddPartIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new order to the cart.
     * 
     * @param {String} partId ID of the part to buy
     * @param {module:api/OrderApi~orderAddPartIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.orderAddPartIdPost = function(partId, callback) {
      var postBody = null;

      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling orderAddPartIdPost");
      }


      var pathParams = {
        'partId': partId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/order/add/{partId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the orderUserGet operation.
     * @callback module:api/OrderApi~orderUserGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find All User orders
     * @param {module:api/OrderApi~orderUserGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */
    this.orderUserGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/order/user', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));