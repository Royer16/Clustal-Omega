use std::io;
use std::cmp::Ordering;
use rand::Rng;


fn main() {
    println!("**********************");
    println!("   Guess the Number");
    println!("Input your guess: ");

    let random_num = rand::thread_rng().gen_range(1..=100);
    let mut tries = 0;
    loop{
        let mut guess = String::new();
        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to understand your input");

        let guess: u32 = match guess.trim()
            .parse(){
                Ok(num) => num,
                Err(_) => {
                    println!("Pick a number dumb dumb");
                    continue
                }
            };

        println!("You guessed the number: {guess}");
        match guess.cmp(&random_num){
            Ordering::Less => {
                println!("Your guess is too low");
                tries = tries + 1;
            }
            Ordering::Greater => {
                println!("Your guess is too high");
                tries = tries + 1;
            }
            Ordering::Equal => {
                tries = tries + 1;
                println!("Correct, it took {tries} attempts");
                println!("**********************");
                break;
            }
        }
    }
}
