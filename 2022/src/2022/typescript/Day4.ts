import { readFile } from './helpers.ts'

const file = await readFile('Day4')

const fileLines = file.split('\n')

const containedCompletely = (line1: string[], line2: string[]) => {
  const line1First = parseInt(line1[0])
  const line1Second = parseInt(line1[1])

  const line2First = parseInt(line2[0])
  const line2Second = parseInt(line2[1])

  if (line1First <= line2First && line1Second >= line2Second) {
    return true
  }

  if (line1First >= line2First && line1Second <= line2Second) {
    return true
  }

  return false
}

const amountContained = fileLines.reduce((acc, line) => {
  const allOptions = line.split(',').map(option => option.split('-'))
  const containedPairs = containedCompletely(allOptions[0], allOptions[1])

  if (containedPairs) {
    return acc + 1
  }

  return acc
}, 0)

console.log('Part 1:', amountContained)

const containedOverlap = (line1: string[], line2: string[]) => {
  const line1First = parseInt(line1[0])
  const line1Second = parseInt(line1[1])

  const line2First = parseInt(line2[0])
  const line2Second = parseInt(line2[1])

  if (line1Second >= line2First && line1First <= line2Second) return true
  return false
}

const amountOverlapped = fileLines.reduce((acc, line) => {
  const allOptions = line.split(',').map(option => option.split('-'))
  const containedPairs = containedOverlap(allOptions[0], allOptions[1])

  if (containedPairs) {
    return acc + 1
  }

  return acc
}, 0)

console.log('Part 2:', amountOverlapped)
