// Copyright (c) 2025, rishikeshjoshi1205@gmail.com and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Ride Booking", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on("Ride Booking", {
    refresh(frm) {
        calculate_total(frm);
    },
    estimated_km: function(frm) {
        calculate_total(frm);
    },

    price_per_km: function(frm) {
        calculate_total(frm);
    },

    services: {
        amount: function(frm) {
            calculate_total(frm);
        }
    },

    services_remove: function(frm) {
        calculate_total(frm);
    }
});

function calculate_total(frm) {
    let price_per_km = frm.doc.price_per_km || 0;
    let estimated_km = frm.doc.estimated_km || 0;
    let total = price_per_km * estimated_km;

    if (frm.doc.services && frm.doc.services.length > 0) {
        frm.doc.services.forEach(service => {
            total += service.amount || 0;
        });
    }

    frm.set_value("total_amount", total);
}