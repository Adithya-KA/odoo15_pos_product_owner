{
    'name': 'Product owner',
    'category': 'Pos/product_owner',
    'description': 'Product owner',
    'version': '15.0.0.1.0',
    'depends': ['base', 'sale', 'product', 'contacts','point_of_sale'],

    'assets': {
        'web.assets_backend': [
            'pos_product_owner/static/src/js/receipt.js',
            'pos_product_owner/static/src/js/order_line.js',
        ],

        'web.assets_qweb': [
            'pos_product_owner/static/src/xml/receipt.xml',
            'pos_product_owner/static/src/xml/order_line.xml',
        ],

    },

    'data': [
        'views/product_owner.xml',

    ],

}
