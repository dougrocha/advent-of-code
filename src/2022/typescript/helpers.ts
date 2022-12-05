export const readFile = async (day: `Day${number}`) =>
  await Deno.readTextFile(`./inputs/2022/${day}.txt`)
