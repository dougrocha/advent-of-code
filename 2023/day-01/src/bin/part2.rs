use regex::Regex;

fn main() {
    let input = include_str!("input.txt");
    let result = part2(input);
    dbg!(result);
}

fn part2(input: &str) -> u32 {
    input
        .lines()
        .map(|line| {
            let regex = Regex::new(r"[1-9]|one|two|three|four|five|six|seven|eight|nine").unwrap();

            regex
                .find_iter(line)
                .map(|m| match m.as_str() {
                    "one" => 1,
                    "two" => 2,
                    "three" => 3,
                    "four" => 4,
                    "five" => 5,
                    "six" => 6,
                    "seven" => 7,
                    "eight" => 8,
                    "nine" => 9,
                    _ => m.as_str().parse::<u32>().unwrap(),
                })
                .collect::<Vec<u32>>()
        })
        .collect::<Vec<Vec<u32>>>()
        .iter()
        .map(|arr| {
            let first = arr[0] * 10;
            let last = arr[arr.len() - 1];
            first + last
        })
        .sum::<u32>()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn check_example() {
        let input = "two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen";
        let result = part2(input);
        assert_eq!(result, 281);
    }

    #[test]
    fn check_answer() {
        let input = include_str!("input.txt");
        let result = part2(input);
        assert_eq!(result, 0);
    }
}
