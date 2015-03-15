var prettyList = require('./PrettyLists');

var items = [
	{
		name: 'Clarke',
		email: 'clarke.plumo@gmail.com',
		favorites: {
			music: 'Freebird',
			person: 'Yo mama'
		}
	},
	{
		name: 'Person1',
		email: 'person1@prettylists.com',
		favorites: {
			music: 'Crazy Train',
			person: 'Yo mama'
		}
	},
	{
		name: 'Person2',
		email: 'person2@prettylists.com',
		favorites: {
			music: 'Through the Fire and the Flames',
			person: 'Yo mama'
		}
	},
	{
		name: 'Person3',
		email: 'person3@prettylists.com',
		favorites: {
			music: 'Bark At the Moon',
			person: 'Yo mama'
		}
	},
	{
		name: 'Person4',
		email: 'person4@prettylists.com',
		favorites: {
			music: 'Painkiller',
			person: 'Yo mama'
		}
	},
]

for (var i = 1; i <= items.length; i++) {
	console.log(prettyList.format1(items, 'name', i));
	console.log(prettyList.format2(items, 'name', 'email', i));
	console.log(prettyList.format2(items, 'name', 'favorites.music', i));
	console.log();
};
