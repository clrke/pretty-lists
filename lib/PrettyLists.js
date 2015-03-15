var pluralize = require('pluralize');

function ref(obj, str) {
	return str.split(".").reduce(function(o, x) { return o[x] }, obj);
}

module.exports = {
	getItemsDisplay: function (items, displayAttr1, displayAttr2) {
		items2 = [];

		items.forEach(function (item) {
			if(displayAttr2) {
				items2.push({
					value: ref(item, displayAttr1) +
						" (" + ref(item, displayAttr2) + ")"
				});
			} else {
				items2.push({
					value: ref(item, displayAttr1)
				});
			}
		});

		return items2;
	},
	format1: function (items, displayAttr, maximum) {
		if(maximum == undefined)
			maximum = 2;

		var items2 = this.getItemsDisplay(items, displayAttr);

		if(items.length === 0) {
			return "0";
		} else if(items.length == 1) {
			return items2[0].value;
		} else if(items2.length <= maximum) {
			var middleItems = "";

			for (var i = 1; i < maximum-1 && i < items2.length-1; i++) {
				middleItems += ", " + items2[i].value;
			}
			return items2[0].value + middleItems +
				" and " + items2[items2.length-1].value;

		} else if(items2.length == maximum+1) {
			var middleItems = "";

			for (var i = 1; i < maximum; i++) {
				middleItems += ", " + items2[i].value;
			}
			return items2[0].value + middleItems +
				" and another";
		} else {
			var middleItems = "";

			for (var i = 1; i < maximum; i++) {
				middleItems += ", " + items2[i].value;
			}
			return items2[0].value + middleItems +
				" and " + (items2.length - 2) + " others";
		}
	},
	format2: function (items, displayAttr1, displayAttr2, maximum) {
		return this.format1(
			this.getItemsDisplay(
				items, displayAttr1, displayAttr2
			), 'value', maximum);
	}
}
