const user = {
  name: "John",
  age: 27,
  languages: ["English", "Vietnamese", "Japanese"],
  greet() {
    const hello = `My name is ${this.name} and I know`;
    // normal function -> run code error ❌
    const langs = this.languages.reduce(function (str, lang, i) {
      if (i !== this.languages.length - 1) {
        return `${str} and ${lang}`;
      }
      return `${str} ${lang}`;
    }, "");
    console.log(hello + langs);
  },
};

user.greet();
