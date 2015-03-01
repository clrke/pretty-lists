var pluralize = require('pluralize');

function ref(obj, str) {
	return str.split(".").reduce(function(o, x) { return o[x] }, obj);
}

module.exports = {
	format1: function (items, displayAttr) {
		if(items.length === 0) {
			return "0";
		} else if(items.length == 1) {
			return items[0][displayAttr];
		} else if(items.length == 2) {
			return items[0][displayAttr] +
				" and " + items[1][displayAttr];
		} else if(items.length == 3) {
			return items[0][displayAttr] +
				", " + items[1][displayAttr] +
				" and another";
		} else {
			return items[0][displayAttr] +
				", " + items[1][displayAttr] +
				" and " + (items.length - 2) + " others";
		}
	},
	format2: function (items, displayAttr1, displayAttr2) {
		items2 = [];

		items.forEach(function (item) {
			items2.push({
				value: ref(item, displayAttr1) + " (" + ref(item, displayAttr2) + ")"
			});
		});

		return this.format1(items2, 'value');
	}
}
