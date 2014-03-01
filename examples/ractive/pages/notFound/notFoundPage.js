define(function(require) {
  'use strict';
  var Ractive = require('ractive'),
      notFoundTemplate = require('text!./notFoundTemplate.html'),
      Layout = require('layouts/basicLayout/layout');

  return {
    createView: function(selector, routeArguments) {
      var layout = new Layout({
        el: selector
      });

      var NotFoundPage = Ractive.extend({
        template: notFoundTemplate,

        init: function() {
          this.on('teardown', function() {
            layout.teardown();
            console.log('teardown notFoundPage');
          });
        }
      });

      return new NotFoundPage({
        el: layout.contentPlaceholder
      });
    }
  };
});
