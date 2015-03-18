# Pretty Lists
JavaScript library for making lists pretty

## Example

### Initialization

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

```

### Console log 1

``` javascript
console.log(prettyList.format1(items, 'name'));
console.log(prettyList.format2(items, 'name', 'email'));
console.log(prettyList.format2(items, 'name', 'favorites.music'));

```

### Output

	Clarke, Person1 and 3 others
	Clarke (clarke.plumo@gmail.com), Person1 (person1@prettylists.com) and 3 others
	Clarke (Freebird), Person1 (Crazy Train) and 3 others

### Console log 2

``` javascript
console.log(prettyList.format1(items, 'name', 3));
console.log(prettyList.format2(items, 'name', 'email', 3));
console.log(prettyList.format2(items, 'name', 'favorites.music', 3));

```

### Output

	Clarke, Person1, Person2 and 2 others
	Clarke (clarke.plumo@gmail.com), Person1 (person1@prettylists.com), Person2 (person2@prettylists.com) and 2 others
	Clarke (Freebird), Person1 (Crazy Train), Person2 (Through the Fire and the Flames) and 2 others
