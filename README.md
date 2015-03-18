# Pretty Lists
JavaScript library for making lists pretty

## Example

``` javascript
var prettyList = require('pretty-lists');

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


console.log(prettyList.format1(items, 'name'));
console.log(prettyList.format2(items, 'name', 'email'));

```

### Output

	Clarke, Person1 and 3 others
	Clarke (clarke.plumo@gmail.com), Person1 (person1@prettylists.com) and 3 others
