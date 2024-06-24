const user = {
  name: "John",
  age: 27,
  languages: ["English", "Vietnamese", "Japanese"],
  greet() {
    const hello = `My name is ${this.name} and I know`;
    // arrow function -> run code success ✅
    const langs = this.languages.reduce((str, lang, i) => {
      if (i !== this.languages.length - 1) {
        return `${str} and ${lang}`;
      }
      return `${str} ${lang}`;
    }, "");
    console.log(hello + langs);
  },
};

user.greet();
