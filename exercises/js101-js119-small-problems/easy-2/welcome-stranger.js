function greetings (name, occupation) {
  return `Hello, ${name[0]} ${name[1]} ${name[2]}! Nice to have a ${occupation.title} ${occupation.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.