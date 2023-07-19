// Imports necessary for the program
use std::io;

fn main() {
    // Prints an introduction to the program 
    println!("Welcome to Rooted in Faith!");
    println!("This program is designed to provide you with spiritual guidance on your journey of faith.");

    // Initializes the main loop
    loop {
        // Prints a prompt for the user to choose one of three options
        println!("Please select one of the following options:");
        println!("1. Read a scripture");
        println!("2. Pray a prayer");
        println!("3. Exit");

        // Reads the user's input
        let mut input = String::new();
        io::stdin()
            .read_line(&mut input)
            .expect("Failed to read input");

        // Converts the user's input to a number
        let choice: u32 = match input.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Invalid input. Please try again.");
                continue;
            }
        };

        // Selects a scripture depending on the user's choice
        match choice {
            1 => {
                println!("Psalm 23:4 - Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.");
            }
            2 => {
                println!("Heavenly Father, I come to you broken and weary, desperate for your help. I ask for strength to keep going, and I thank you for your never ending love and grace. In Jesus' name, Amen.");
            }
            3 => {
                println!("Goodbye and God bless!");
                break;
            }
            _ => {
                println!("Invalid input. Please try again.");
            }
        }
    }
}