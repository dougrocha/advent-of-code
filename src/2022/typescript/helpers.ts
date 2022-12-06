// Reads File in inputs
export const readFile = async (day: `Day${number}`) =>
  await Deno.readTextFile(`./inputs/2022/${day}.txt`)

// Reads File in inputs and returns an array of strings for each line
export const getLines = async (day: `Day${number}`) =>
  await readFile(day).then(text => text.split(`\n`))
