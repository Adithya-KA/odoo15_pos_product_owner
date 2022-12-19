odoo.define('pos_product_owner.receipt', function (require) {
"use strict";
var models = require('point_of_sale.models');
models.load_fields('product.product', 'product_owner_id');
var _super_orderline = models.Orderline.prototype;

models.Orderline = models.Orderline.extend({
    export_for_printing: function() {
        var line = _super_orderline.export_for_printing.apply(this,arguments);
        line.product_owner_id = this.get_product().product_owner_id;
        return line;
    },
});
});
