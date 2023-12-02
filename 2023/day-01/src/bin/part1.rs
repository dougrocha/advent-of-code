fn main() {
    let input = include_str!("./input1.txt");
    let result = part1(input);
    dbg!(result);
}

fn part1(input: &str) -> String {
    "todo!".to_string()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = part1("");
        assert_eq!(result, "todo!".to_string());
    }
}
