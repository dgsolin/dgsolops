// Custom Script for Purchase Invoice
frappe.ui.form.on('Purchase Invoice', {
	refresh(frm) {
		// your code here
		frm.events.system(frm);
	},
	system(frm) {
		if(frm.fields_dict['items'].grid.get_field('item_code')) {
			if(frm.doc.system != 'DIPL') {
				frm.set_query("item_code", "items", function() {
					return {
						query: "erpnext.controllers.queries.item_query",
						filters: {'is_purchase_item': 1,'item_group': frm.doc.system}
					};
				});
			} else {
				frm.set_query("item_code", "items", function() {
					return {
						query: "erpnext.controllers.queries.item_query",
						filters: {'is_purchase_item': 1}
					};
				});
			}
		}
		// make ord_ref field Mandatory if  frm.doc.system != 'DIPL'
		frm.set_df_property('order_ref',  'reqd',  frm.doc.system == 'DIPL' ? 0 : 1);
		frm.set_df_property('transaction_ref',  'reqd',  frm.doc.system == 'DIPL' ? 0 : 1);
		frm.set_df_property('billing_ref',  'reqd',  frm.doc.system == 'DIPL' ? 0 : 1);
	}
});

// Custom Script for Sales Invoice
frappe.ui.form.on('Sales Invoice', {
	refresh(frm) {
		// your code here
		frm.events.system(frm);
	},
	system(frm) {
		if(frm.fields_dict['items'].grid.get_field('item_code')) {
			if(frm.doc.system != 'DIPL') {
				frm.set_query("item_code", "items", function() {
					return {
						query: "erpnext.controllers.queries.item_query",
						filters: {'is_sales_item': 1,'item_group': frm.doc.system}
					};
				});
			} else {
				frm.set_query("item_code", "items", function() {
					return {
						query: "erpnext.controllers.queries.item_query",
						filters: {'is_sales_item': 1}
					};
				});
			}
		}
		// make ord_ref field Mandatory if  frm.doc.system != 'DIPL'
		frm.set_df_property('order_ref',  'reqd',  frm.doc.system == 'DIPL' ? 0 : 1);
		frm.set_df_property('transaction_ref',  'reqd',  frm.doc.system == 'DIPL' ? 0 : 1);
		frm.set_df_property('billing_ref',  'reqd',  frm.doc.system == 'DIPL' ? 0 : 1);
	}
});

// Custom Script for Sales Order
frappe.ui.form.on('Sales Order', {
	refresh(frm) {
		// your code here
		frm.events.system(frm);
	},
	system(frm) {
		if(frm.fields_dict['items'].grid.get_field('item_code')) {
			if(frm.doc.system != 'DIPL') {
				frm.set_query("item_code", "items", function() {
					return {
						query: "erpnext.controllers.queries.item_query",
						filters: {'is_sales_item': 1,'item_group': frm.doc.system}
					};
				});
			} else {
				frm.set_query("item_code", "items", function() {
					return {
						query: "erpnext.controllers.queries.item_query",
						filters: {'is_sales_item': 1}
					};
				});
			}
		}
		// make ord_ref field Mandatory if  frm.doc.system != 'DIPL'
		frm.set_df_property('order_ref',  'reqd',  frm.doc.system == 'DIPL' ? 0 : 1);
	}
});

// Custom Script for Quotation
frappe.ui.form.on('Quotation', {
	refresh(frm) {
		// your code here
		frm.events.system(frm);
	},
	system(frm) {
		if(frm.fields_dict['items'].grid.get_field('item_code')) {
			if(frm.doc.system != 'DIPL') {
				frm.set_query("item_code", "items", function() {
					return {
						query: "erpnext.controllers.queries.item_query",
						filters: {'is_sales_item': 1,'item_group': frm.doc.system}
					};
				});
			} else {
				frm.set_query("item_code", "items", function() {
					return {
						query: "erpnext.controllers.queries.item_query",
						filters: {'is_sales_item': 1}
					};
				});
			}
		}
	}
});



