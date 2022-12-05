const file = await Deno.readTextFile('./inputs/2022/Day2.txt')

const lines = file.split('\n')

let player = 0

while (true) {
  const line = lines.shift()
  if (line === undefined) break

  const [line1, line2] = line.split(' ')

  if (line2 === 'X') {
    player += 1
  } else if (line2 === 'Y') {
    player += 2
  } else if (line2 === 'Z') {
    player += 3
  }

  if (line2 === 'X') {
    if (line1 === 'A') player += 3
    if (line1 === 'B') player += 0
    if (line1 === 'C') player += 6
  } else if (line2 === 'Y') {
    if (line1 === 'A') player += 6
    if (line1 === 'B') player += 3
    if (line1 === 'C') player += 0
  } else if (line2 === 'Z') {
    if (line1 === 'A') player += 0
    if (line1 === 'B') player += 6
    if (line1 === 'C') player += 3
  }
}

console.log('Part 1: ', player)

// second part

const file2 = await Deno.readTextFile('./inputs/2022/Day2.txt')

const lines2 = file2.split('\n')

let player2 = 0

while (true) {
  const line = lines2.shift()
  if (line === undefined) break

  const [line1, line2] = line.split(' ')

  if (line2 === 'X') {
    // LOSE
    player2 += 0
  } else if (line2 === 'Y') {
    // Draw
    player2 += 3
  } else if (line2 === 'Z') {
    // WIN
    player2 += 6
  }

  if (line1 === 'A') {
    if (line2 === 'X') player2 += 3
    if (line2 === 'Y') player2 += 1
    if (line2 === 'Z') player2 += 2
  } else if (line1 === 'B') {
    if (line2 === 'X') player2 += 1
    if (line2 === 'Y') player2 += 2
    if (line2 === 'Z') player2 += 3
  } else if (line1 === 'C') {
    if (line2 === 'X') player2 += 2
    if (line2 === 'Y') player2 += 3
    if (line2 === 'Z') player2 += 1
  }
}

console.log('Part 2: ', player2)
