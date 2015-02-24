var prettyList = require('./PrettyLists');

var items = [
	{
		name: 'Clarke',
		email: 'clarke.plumo@gmail.com'
	},
	{
		name: 'Person1',
		email: 'person1@prettylists.com'
	},
	{
		name: 'Person2',
		email: 'person2@prettylists.com'
	},
	{
		name: 'Person3',
		email: 'person3@prettylists.com'
	},
	{
		name: 'Person4',
		email: 'person4@prettylists.com'
	},
]

console.log(prettyList.format1(items, 'name'));
