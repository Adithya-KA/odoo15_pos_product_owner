odoo.define('pos_product_owner.orderline', function (require) {
    "use strict";
    var models = require('point_of_sale.models');
    models.load_fields('product.product', 'product_owner_id');
    var _super_orderline = models.Orderline.prototype;

    models.Orderline = models.Orderline.extend({
        initialize: function(attr, options) {
            var line = _super_orderline.initialize.apply(this,arguments);
            this.product_owner_id = this.get_product().product_owner_id;
            console.log(this,"lllllllllllll")
        }
    })
});