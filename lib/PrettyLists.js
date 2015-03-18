var pluralize = require('pluralize');

function ref(obj, str) {
	return str.split(".").reduce(function(o, x) { return o[x] }, obj);
}

module.exports = {
	getItemsDisplay: function (items, displayAttr1, displayAttr2) {
		var items2 = [];

		items.forEach(function (item) {
			if(displayAttr2) {
				items2.push(ref(item, displayAttr1) +
					" (" + ref(item, displayAttr2) + ")"
				);
			} else {
				items2.push(
					ref(item, displayAttr1)
				);
			}
		});

		return items2;
	},
	format0: function (items, maximum) {
		if(maximum == undefined)
			maximum = 2;

		if(items.length === 0) {
			return "0";
		} else if(items.length == 1) {
			return items[0];
		} else if(items.length <= maximum) {
			var middleItems = "";

			for (var i = 1; i < maximum-1 && i < items.length-1; i++) {
				middleItems += ", " + items[i];
			}
			return items[0] + middleItems +
				" and " + items[items.length-1];

		} else if(items.length == maximum+1) {
			var middleItems = "";

			for (var i = 1; i < maximum; i++) {
				middleItems += ", " + items[i];
			}
			return items[0] + middleItems +
				" and another";
		} else {
			var middleItems = "";

			for (var i = 1; i < maximum; i++) {
				middleItems += ", " + items[i];
			}
			return items[0] + middleItems +
				" and " + (items.length - maximum) + " others";
		}
	},
	format1: function (items, displayAttr, maximum) {
		return this.format0(
			this.getItemsDisplay(
				items, displayAttr
			), maximum);
	},
	format2: function (items, displayAttr1, displayAttr2, maximum) {
		return this.format0(
			this.getItemsDisplay(
				items, displayAttr1, displayAttr2
			), maximum);
	}
}
