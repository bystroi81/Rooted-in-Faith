// Rooted in Faith
package main 

import "fmt" 

func main(){ 
	// Prints out a message about rooted in faith
	fmt.Println("Rooted in faith means to have a strong guidance in our lives") 

	// Declare and initialize an array of type string 
	titles := []string{"Love", "Gratitude", "Patience", "Wisdom"} 

	// Loop through the array and print out each element 
	for _, title := range titles { 
		fmt.Printf("%s, is important to be rooted in faith\n", title)
	} 

	// Declare and initialize a map from strings to strings 
	teachings := map[string]string{ 
		"Love": "John 13:34", 
		"Gratitude": "1 Thessalonians 5:18", 
		"Patience": "James 5:7-8", 
		"Wisdom": "James 1:5", 
	} 

	// Loop through the map and print out each element 
	for key, value := range teachings { 
		fmt.Printf("%s has the familar passage: %s\n", key, value)
	} 

	// Declare and initialize a variable of type string 
	exhortation := "Let us hold fast the profession of our faith without wavering; \
	for he is faithful that promised" 

	// Print out the exhortation 
	fmt.Printf("Exhortation: %s\n", exhortation) 

	// Declare and initialize a boolean variable 
	ended := false 

	// Keep looping until the boolean variable is set to true
	for !ended { 
		// Print out a message that encourages us to stay rooted in faith
		fmt.Println("No matter what life throws at us, let us remain rooted in faith") 

		// Set the boolean variable to true 
		ended = true 
	} 

	// Declare and initialize a float64 variable 
	countdown := 10.0 

	// Count down from 10
	for countdown > 0 { 
		fmt.Printf("%.0f seconds left until we are rooted in faith\n", countdown) 
		countdown--
	} 

	// Print out a message when the countdown is complete 
	fmt.Println("We are now rooted in faith") 
}