# -*- coding: utf-8 -*-
{
    'name': "Odoo TimePicker",
    'summary': """ Supports Char fields to be displayed as time """,
    'description': """ """,
    'author': "XueFeng.Su",
    'website': "https://github.com/cd-feng",
    'category': 'Tools/TimePicker',
    'version': '0.1',
    'depends': ['base'],
    "license": "AGPL-3",
    'installable': True,
    'application': False,
    'auto_install': False,
    'data': [
    ],
    'assets': {
        'web.assets_backend': [
            'odoo_timepicker/static/xml/*.xml',
            'odoo_timepicker/static/src/js/*.js',
            'odoo_timepicker/static/src/css/*',
        ],
    },
}
