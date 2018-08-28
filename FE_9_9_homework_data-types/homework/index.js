//#1
function findType (parameter) {
	return typeof parameter;
}

//#2
function forEach (arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

//#3
function map (arr, fn) {
	let freshArrey = [];
	forEach(arr, el => freshArrey.push(fn(el)));
    return freshArrey;
}

//#4
function filter (arr, fn) {
	let freshArrey = [];
	forEach(arr, el => {
		if (fn(el)) {
            freshArrey.push(el);
        }
	});
    return freshArrey;
}

//#5
let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'age': 39,
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'age': 38,
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'age': 2,
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'age': 17,
    'eyeColor': 'green',
    'name': 'Weiss',
    'favoriteFruit': 'banana'
  }
];
function getAdultAppleLovers (data) {
	return map(filter(data, el => el.age > 18 && el.favoriteFruit === 'apple'), el => el.name);
} 

//#6
function keys (object) {
    let freshArrey = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            freshArrey.push(key);
        }
    }
    return freshArrey;
}

//#7
function values (object) {
    let freshArrey = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            freshArrey.push(object[key]);
        }
    }
    return freshArrey;
}

//#8
function showFormattedDate (date) {
    date = new Date();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let monthIndex = months[date.getMonth()];
    return 'It is ' + date.getDate() + ' of ' + monthIndex + ', ' + date.getFullYear();
}



