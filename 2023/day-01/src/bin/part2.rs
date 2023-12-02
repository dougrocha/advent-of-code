fn main() {
    let input = include_str!("./input2.txt");
    let result = part2(input);
    dbg!(result);
}

fn part2(input: &str) -> String {
    "todo!".to_string()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = part2("");
        assert_eq!(result, "todo!".to_string());
    }
}
