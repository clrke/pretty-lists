var pluralize = require('pluralize');

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
	}
}
