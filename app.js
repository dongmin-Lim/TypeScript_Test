var person = {
    name: "dongmin",
    age: 27,
    hobbies: ["Soccer", "Cooking"]
};
var favoriteActivities;
favoriteActivities = ["Soccer", "Swim"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
