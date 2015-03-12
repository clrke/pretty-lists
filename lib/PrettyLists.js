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
	format1: function (items, displayAttr) {
		var items2 = this.getItemsDisplay(items, displayAttr);

		if(items.length === 0) {
			return "0";
		} else if(items.length == 1) {
			return items2[0].value;
		} else if(items2.length == 2) {
			return items2[0].value +
				" and " + items2[1].value;
		} else if(items2.length == 3) {
			return items2[0].value +
				", " + items2[1].value +
				" and another";
		} else {
			return items2[0].value +
				", " + items2[1].value +
				" and " + (items2.length - 2) + " others";
		}
	},
	format2: function (items, displayAttr1, displayAttr2) {
		return this.format1(
			this.getItemsDisplay(
				items, displayAttr1, displayAttr2
			), 'value');
	}
}
