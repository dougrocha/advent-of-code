import { readFile } from './helpers.ts'

const lines = async () => {
  const file = await readFile('Day5')
  return file.split('\n')
}

// Load ship
const ship = (lines: string[]): string[][] => {
  const ship: string[][] = []

  while (true) {
    const line = lines.shift()

    if (line?.length === 0) break
    //     // every crate space is separate by 4 spaces, each 4 spaces will be one crate group
    const startLength = line?.split(/[^\s]/)[0].length

    if ((startLength ?? 0) % 4 === 0) {
      // return array of strings in every 4 places
      const curLine = line
        ?.split('')
        .map((_, i) => (i % 4 === 0 ? line?.slice(i, i + 3) : ''))
        .filter(Boolean)

      curLine?.map((_, i) => {
        if (!ship[i]) ship[i] = []
        if (curLine[i].trim().length) return ship[i].push(curLine[i])
      })
    }
  }

  // reverse each array at start to be able to use pop and push easier
  ship.forEach(_ => _.reverse())

  return ship
}

const part1Lines = await lines()

const ship1 = ship(part1Lines)

const moveCrate = (crate: number, newCrate: number) => {
  //   console.log(`Moving crate ${crate - 1} to ${newCrate - 1}`)
  const oldCrate = ship1[crate - 1].pop()
  ship1[newCrate - 1].push(oldCrate ?? '')
}

for (let i = 0; i < part1Lines.length; i++) {
  const crateMoves = part1Lines[i].match(/\d+/g)

  const amount = Number(crateMoves?.[0])
  const crate = Number(crateMoves?.[1])
  const newCrate = Number(crateMoves?.[2])

  // move crate
  for (let i = 0; i < amount; i++) {
    moveCrate(crate, newCrate)
  }
}

console.log(
  'Part 1: ',
  ship1
    .map(_ => _.pop())
    .join('')
    .replace(/\[|\]/g, '')
)

const part2Lines = await lines()

const ship2 = ship(part2Lines)

const moveCrates = (crate: number, newCrate: number, amount: number) => {
  //   console.log(`Moving ${amount} crates from ${crate} to ${newCrate}`)
  const crates = ship2[crate - 1].splice(-amount)
  ship2[newCrate - 1].push(...crates)
}

for (let i = 0; i < part2Lines.length; i++) {
  const crateMoves = part2Lines[i].match(/\d+/g)

  const amount = Number(crateMoves?.[0])
  const crate = Number(crateMoves?.[1])
  const newCrate = Number(crateMoves?.[2])

  // move crates
  moveCrates(crate, newCrate, amount)
}

console.log(
  'Part 2: ',
  ship2
    .map(_ => _.pop())
    .join('')
    .replace(/\[|\]/g, '')
)
