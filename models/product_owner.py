from odoo import fields, models


class ProductOwner(models.Model):
    _inherit = 'product.product'

    product_owner_id = fields.Many2one('res.partner', string='Product Owner', store=True)

