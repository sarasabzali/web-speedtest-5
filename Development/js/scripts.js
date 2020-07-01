let instructor = {
  name: "Menawer",
  courses: ["JavaScript", "React", "PHP"],
  githubAccount: {
    username: "careless10",
    numberOfRepos: 200,
  },
  sayHello: function () {
    console.log("Hi, I'm Menawer");

  },
  
};
console.log(instructor.name);
console.log(instructor.courses[0]);
console.log(instructor.githubAccount.username);
sayHello();