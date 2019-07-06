/**
 * Swagger Tunning Place
 * This is a sample Tuning Palce server..
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerTunningPlace) {
      root.SwaggerTunningPlace = {};
    }
    root.SwaggerTunningPlace.Part = factory(root.SwaggerTunningPlace.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Part model module.
   * @module model/Part
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Part</code>.
   * @alias module:model/Part
   * @class
   * @param title {String} 
   * @param model {String} 
   * @param year {Number} 
   * @param description {String} 
   * @param price {Number} 
   * @param image {String} 
   */
  var exports = function(title, model, year, description, price, image) {
    var _this = this;

    _this['title'] = title;
    _this['model'] = model;
    _this['year'] = year;
    _this['description'] = description;
    _this['price'] = price;
    _this['image'] = image;
  };

  /**
   * Constructs a <code>Part</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Part} obj Optional instance to populate.
   * @return {module:model/Part} The populated <code>Part</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('year')) {
        obj['year'] = ApiClient.convertToType(data['year'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} model
   */
  exports.prototype['model'] = undefined;
  /**
   * @member {Number} year
   */
  exports.prototype['year'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {String} image
   */
  exports.prototype['image'] = undefined;



  return exports;
}));


