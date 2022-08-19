const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "dongmin",
  age: 27,
  hobbies: ["Soccer", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Soccer", "Swim"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
