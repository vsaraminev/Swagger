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

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerTunningPlace);
  }
}(this, function (expect, SwaggerTunningPlace) {
  'use strict';
  const part = {
    "title": "Admin part title",
    "model": "Admin part model",
    "year": 2000,
    "description": "Admin part description",
    "price": 10,
    "image": "Admin part image"
  };

  const newPart = {
    "model": "Admin part model",
    "title": "Admin part title",
    "description": "Admin part description",
    "year": 2000,
    "image": "Admin part image",
    "price": 10,
  };

  const authUtil = require('../common/authentication_utils');
  const bearer = 'Bearer';
  let partId;
  var instance;

  beforeEach(function () {
    instance = new SwaggerTunningPlace.PartApi();
    instance.apiClient.basePath = 'http://localhost:5000';
  });

  var getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PartApi', function () {
    describe('End to End', function () {
      it('Admin user should be able to CRUD part', async function (done) {
        const userToken = await authUtil.loginUser('admin@admin.com', 'admin');

        await authUtil.setUserToken(instance, userToken, bearer);

        instance.addPart(part, function (error, data, res) {
          if (error) throw error;
          partId = res.body.part._id;
          instance.partDetailsIdGet(partId, function (error, data, res) {
            partId = res.body.id;
            instance.partEditIdPut(partId, newPart, function (error, data, res) {
              partId = res.body.id;
              instance.partDeleteIdDelete(partId, function (error, data, res) {
                expect(res.status).to.be(200);
                done();
              })
            })
          })
        });
      });
      it('Authenticated user should receive error when try to create a part', async function (done) {
        const userToken = await authUtil.loginUser('gosho@abv.bg', 'gosho');
        await authUtil.setUserToken(instance, userToken, bearer);
        instance.addPart(part, function (error, data, res) {
          expect(res.status).to.be(403);
          done();
        });
      });
      it('Unauthorized user should get list of all parts', async function (done) {
        const userToken = '';

        await authUtil.setUserToken(instance, userToken, bearer);

        instance.partAllGet(function (error, data, res) {
          expect(res.status).to.be(200);
          done();
        })
      });
    });
  });
}));
