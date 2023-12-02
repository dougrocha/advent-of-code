const file = await Deno.readTextFile('./inputs/2022/Day3.txt')

const getPriority = (input: string) =>
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(input) + 1

const lines = file.split('\n')

const finalResult: string[] = []

while (true) {
  const line = lines.shift()
  if (!line) break

  // split string in half
  const half = line.length / 2
  const firstHalf = line.slice(0, half)
  const secondHalf = line.slice(half)

  const allValues = new Map([...firstHalf].map(x => [x, true]))

  for (const char of secondHalf) {
    if (allValues.has(char)) {
      finalResult.push(char)
      break
    }
  }
}

console.log(
  'Part 1: ',
  finalResult.map(getPriority).reduce((a, b) => a + b, 0)
)

const finalResult2: string[] = []

const lines2 = file.split('\n')

while (true) {
  const groupedLines: string[] = []

  for (let i = 0; i < 3; i++) {
    const line = lines2.shift()
    if (!line) break
    groupedLines.push(line)
  }

  if (groupedLines.length === 0) break

  const allValues = new Map([...groupedLines[0]].map(x => [x, true]))

  for (const char of groupedLines[1]) {
    if (allValues.has(char) && groupedLines[2].includes(char)) {
      finalResult2.push(char)
      break
    }
  }
}

console.log(
  'Part 2: ',
  finalResult2.map(getPriority).reduce((a, b) => a + b, 0)
)
