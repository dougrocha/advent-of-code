fn main() {
    let input = include_str!("input.txt");
    let result = part1(input);
    dbg!(result);
}

fn part1(input: &str) -> u32 {
    input
        .lines()
        .map(|line| {
            line.chars()
                .filter_map(|char| char.to_digit(10))
                .collect::<Vec<_>>()
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
        let input = "1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet";
        let result = part1(input);
        assert_eq!(result, 142);
    }

    #[test]
    fn check_answer() {
        let input = include_str!("input.txt");
        let result = part1(input);
        assert_eq!(result, 55123);
    }
}
