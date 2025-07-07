# Copyright (c) 2025, rishikeshjoshi1205@gmail.com and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class RideBooking(Document):
	def on_save(Document):
		services_val = []
		for i in Document.services:
			services_val.append(i)
			
		total_amount = price_per_km * estimated_km + sum(services_val)
		
