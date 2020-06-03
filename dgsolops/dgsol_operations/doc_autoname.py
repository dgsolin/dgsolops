# Copyright (c) 2019, Dgsol Infotech Pvt. Ltd. and Contributors
# License: MIT. See license.txt

from __future__ import unicode_literals
import frappe
from datetime import datetime, timedelta
from frappe.utils import flt, cint, cstr, add_days, getdate
from frappe.model.naming import make_autoname
import json
from frappe import _
import frappe.defaults
from erpnext.accounts.utils import get_fiscal_year

def get_fy_abbr(date,company):
	fy = get_fiscal_year(date, company)[0]
	fy_start_end_date = frappe.db.get_value("Fiscal Year", str(fy), ["year_start_date","year_end_date"])

	fy_start_year = fy_start_end_date[0].year
	fy_end_year = fy_start_end_date[1].year

	fy_abbr = str(fy_start_year)[-2:] + "-" + str(fy_end_year)[-2:]
	return fy_abbr 

def qtn_autoname(self, method):
	fy_abbr = get_fy_abbr(self.transaction_date,self.company)
	doc_cmpny = frappe.db.get_value("Company", self.company, "abbr")

	self.name = make_autoname("QTN/" + fy_abbr +'/.#####')

def so_autoname(self, method):
	fy_abbr = get_fy_abbr(self.transaction_date,self.company)
	doc_cmpny = frappe.db.get_value("Company", self.company, "abbr")
	self.name = make_autoname("SO/" + fy_abbr +'/.#####')

def si_autoname(self, method):
	fy_abbr = get_fy_abbr(self.posting_date,self.company)
	doc_cmpny = frappe.db.get_value("Company", self.company, "abbr")

	if self.is_return:
		head_abbr = "CN/"
	else:
		head_abbr = "SI/"

		self.name = make_autoname(head_abbr + fy_abbr +'/.#####')

def pi_autoname(self, method):
	fy_abbr = get_fy_abbr(self.posting_date, self.company)
	doc_cmpny = frappe.db.get_value("Company", self.company, "abbr")

	if self.is_return:
		head_abbr = "DN/"
	else:
		head_abbr = "PI/"

	self.name = make_autoname(head_abbr + fy_abbr +'/.#####')

def pe_autoname(self, method):
	fy_abbr = get_fy_abbr(self.posting_date,self.company)
	doc_cmpny = frappe.db.get_value("Company", self.company, "abbr")

	if self.payment_type == "Receive":
		head_abbr = "REC/"
	elif self.payment_type == "Pay":
		head_abbr = "PAY/"
	elif self.payment_type == "Internal Transfer":
		head_abbr = "INT/"
	else:
		head_abbr = "PE/"

	self.name = make_autoname(head_abbr + fy_abbr +'/.#####')

def dn_autoname(self, method):
	fy_abbr = get_fy_abbr(self.posting_date,self.company)
	doc_cmpny = frappe.db.get_value("Company", self.company, "abbr")

	head_abbr = "DC/"

	self.name = make_autoname(head_abbr + fy_abbr +'/.#####')

