const file = await Deno.readTextFile("./inputs/2022/Day1.txt");

const lines = file.split("\n");

const people = new Map();

let counter = 1;

for (const line of lines) {
  if (line === "") {
    counter++;
  }

  const old = people.get(counter) ?? 0;

  people.set(counter, old + Number(line));
}

// get max from array
console.log(
  "Most Calories: ",
  [...people.entries()].reduce((a, b) => (a[1] > b[1] ? a : b)),
);

const top3Calories = [...people.entries()].sort((a, b) => b[1] - a[1]);

const top3Combined = top3Calories.slice(0, 3).reduce((a, b) => {
  return a + b[1];
}, 0);

console.log("Top 3 Combined Calories: ", top3Combined);
