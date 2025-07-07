# Copyright (c) 2025, rishikeshjoshi1205@gmail.com and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class RideBooking(Document):
	def on_save(self):
		services_val = [i.amount for i in self.services]
		total_amount = (self.price_per_km * self.estimated_km) + sum(services_val)
		self.total_amount = total_amount