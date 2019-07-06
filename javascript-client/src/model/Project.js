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
    define(['ApiClient', 'model/Comment', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Comment'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerTunningPlace) {
      root.SwaggerTunningPlace = {};
    }
    root.SwaggerTunningPlace.Project = factory(root.SwaggerTunningPlace.ApiClient, root.SwaggerTunningPlace.Comment, root.SwaggerTunningPlace.User);
  }
}(this, function(ApiClient, Comment, User) {
  'use strict';




  /**
   * The Project model module.
   * @module model/Project
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   * @class
   * @param title {String} 
   * @param model {String} 
   * @param year {Number} 
   * @param description {String} 
   * @param image {String} 
   */
  var exports = function(title, model, year, description, image) {
    var _this = this;

    _this['title'] = title;
    _this['model'] = model;
    _this['year'] = year;
    _this['description'] = description;
    _this['image'] = image;


  };

  /**
   * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Project} obj Optional instance to populate.
   * @return {module:model/Project} The populated <code>Project</code> instance.
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
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('creator')) {
        obj['creator'] = User.constructFromObject(data['creator']);
      }
      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], [Comment]);
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
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {module:model/User} creator
   */
  exports.prototype['creator'] = undefined;
  /**
   * @member {Array.<module:model/Comment>} comments
   */
  exports.prototype['comments'] = undefined;



  return exports;
}));


