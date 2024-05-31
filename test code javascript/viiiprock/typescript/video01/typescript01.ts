function greeting(name: string) {
  console.log("Hello: " + name);
}

greeting("Duynghiadev");

function foo({ first, last }: { first: string; last?: string }) {
  console.log(first + " " + (last || ""));
}

foo({ first: "John" });

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log("Your id: ", id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId(123123);
