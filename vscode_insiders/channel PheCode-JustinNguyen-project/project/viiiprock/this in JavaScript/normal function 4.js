const user = {
  name: "Tyler",
  age: 27,
  languages: ["JavaScript", "Ruby", "Python"],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`;
    // use method bind(), to pass this into method greet() ✅
    const langs = this.languages.reduce(
      function (str, lang, i) {
        if (i === this.languages.length - 1) {
          return `${str} and ${lang}.`;
        }

        return `${str} ${lang},`;
      }.bind(this),
      ""
    );

    console.log(hello + langs);
  },
};
user.greet();
