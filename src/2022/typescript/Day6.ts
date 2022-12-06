import { getLines } from './helpers.ts'

// Set to default 4 for part 1
const findMarker = (input: string, amount = 4) => {
  const characters = input.split('')

  for (let i = 0; i < characters.length; i++) {
    const chars = characters.slice(i, i + amount)
    const set = new Set(chars)
    if (set.size === amount) {
      // add four to adjust for the slice
      return i + amount
    }
  }
}

const input = await getLines('Day6')

for (const line of input) {
  console.log('(Part 1) Day 6:', findMarker(line))
}

for (const line of input) {
  console.log('(Part 2) Day 6:', findMarker(line, 14))
}

// TESTS

import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts'

Deno.test('Day 6: Part 1', () => {
  assertEquals(findMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb'), 7)
  assertEquals(findMarker('bvwbjplbgvbhsrlpgdmjqwftvncz'), 5)
  assertEquals(findMarker('nppdvjthqldpwncqszvftbrmjlhg'), 6)
  assertEquals(findMarker('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'), 10)
  assertEquals(findMarker('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'), 11)
})

Deno.test('Day 6: Part 2', () => {
  assertEquals(findMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14), 19)
  assertEquals(findMarker('bvwbjplbgvbhsrlpgdmjqwftvncz', 14), 23)
  assertEquals(findMarker('nppdvjthqldpwncqszvftbrmjlhg', 14), 23)
  assertEquals(findMarker('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14), 29)
  assertEquals(findMarker('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14), 26)
})
