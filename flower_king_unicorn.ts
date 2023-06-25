const ROOTED_IN_FAITH_TITLE : string = "Rooted in Faith";

// create a class to store faith-related items
class RootedInFaith {
  faithItems: string[];

  constructor() {
    this.faithItems = [];
  }

  add FaithItem(item: string) {
    this.faithItems.push(item);
  }

  // create a method to display all the faith items
  displayFaithItems(): void {
    console.log(ROOTED_IN_FAITH_TITLE);
    for (let i = 0; i < this.faithItems.length; i++) {
      console.log(this.faithItems[i]);
    }
  }
}

// create instance of RootedInFaith class
let faithItems = new RootedInFaith();

// add items to faithItems
faithItems.addFaithItem("Prayer");
faithItems.addFaithItem("Worship");
faithItems.addFaithItem("Scripture Reading");

// display faith items
faithItems.displayFaithItems();

// create a function to greet the user
function greetUser(name: string) {
  console.log("Hello " + name + ", Welcome to Rooted in Faith!");
}

// call the greetUser function
greetUser("John");

// create a function to display a verse of scripture
function displayVerse(verse: string) {
  console.log(verse);
}

// call the displayVerse function
displayVerse("John 3:16 - For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.");

// create a function to display a faith-related quote
function displayQuote(quote: string) {
  console.log(quote);
}

// call the displayQuote function
displayQuote("“Trust in the Lord with all your heart and lean not on your own understanding.” - Proverbs 3:5");

// create a function to receive prayer requests from the user
function receivePrayerRequest(request: string) {
  console.log("Thank you for submitting your prayer request: " + request);
}

// call the receivePrayerRequest function
receivePrayerRequest("Please pray for my grandmother to have a speedy recovery.");

// create a function to store the user's favorite scripture verse
function storeFavoriteVerse(verse: string) {
  console.log("Storing your favorite verse: " + verse);
}

// call the storeFavoriteVerse function
storeFavoriteVerse("Philippians 4:13 - I can do all this through him who gives me strength.");

// create a function to save faith-related resources
function saveResource(title: string, url: string) {
  console.log("Saving resource '" + title + "' with URL: " + url);
}

// call the saveResource function
saveResource("Bible Study Guide", "www.biblestudyguide.com");

// create a function to display a faith-related verse
function showVerse(verse: string) {
  console.log(verse);
}

// call the showVerse function
showVerse("1 John 4:19 - We love because he first loved us.");

// create a function to display a faith-related affirmation
function showAffirmation(affirmation: string) {
  console.log(affirmation);
}

// call the showAffirmation function
showAffirmation("I am rooted in faith and am in alignment with God's will.");

// create a function to display a faith-related article
function showArticle(title: string, url: string) {
  console.log("Check out this article: " + title + " - " + url);
}

// call the showArticle function
showArticle("The Benefits of Faith-Based Living","www.faithbasedliving.com");

// create a function to save a faith-based quote
function saveQuote(quote: string) {
  console.log("Saving quote: " + quote);
}

// call the saveQuote function
saveQuote("“Trust in the Lord with all your heart and lean not on your own understanding.” - Proverbs 3:5");

// create a function to post a faith-related blog
function postBlog(title: string, content: string) {
  console.log("Posting blog titled '" + title + "', content: " + content);
}

// call the postBlog function
postBlog("The Power of Prayer", "The power of prayer is real and should not be underestimated.");

// create a function to receive user's prayer requests
function receiveRequest(request: string) {
  console.log("Thank you for submitting your prayer request: " + request);
}

// call the receiveRequest function
receiveRequest("Please pray for me to find peace and clarity.");

// create a function to store user's favorite scriptures
function storeScriptures(verses: string[]) {
  console.log("Storing your favorite scriptures: " + verses.join(", "));
}

// call the storeScriptures function
storeScriptures(["Jeremiah 29:11", "Matthew 6:33", "John 15:5"]);

// create a function to save faith-based resources
function saveResource(title: string, url: string) {
  console.log("Saving resource '" + title + "' with URL: " + url);
}

// call the saveResource function
saveResource("Devotionals for Deeper Faith", "www.deeperfaith.com");

// create a function to display a faith-based quote
function showQuote(quote: string) {
  console.log(quote);
}

// call the showQuote function
showQuote("“Cast all your anxiety on him because he cares for you.” - 1 Peter 5:7");

// create a function to display a faith-related affirmation
function showAffirmation(affirmation: string) {
  console.log(affirmation);
}

// call the showAffirmation function
showAffirmation("I am filled with faith and courage.");

// create a function to show a faith-related article
function showArticle(title: string, url: string) {
  console.log("Check out this article: " + title + " - " + url);
}

// call the showArticle function
showArticle("The Benefits of a Faith-based Lifestyle", "www.faithbasedlifestyle.com");

// create a function to store a faith-related blog
function storeBlog(title: string, content: string) {
  console.log("Storing blog titled '" + title + "', content: " + content);
}

// call the storeBlog function
storeBlog("The Blessing of Prayer", "Prayer is a powerful tool to bring about blessings in our lives.");

// create a function to receive user's prayer requests
function receiveRequest(request: string) {
  console.log("Thank you for submitting your prayer request: " + request);
}

// call the receiveRequest function
receiveRequest("Please pray for me to find a job.");

// create a function to save user's favorite scriptures
function saveScriptures(verses: string[]) {
  console.log("Saving your favorite scriptures: " + verses.join(", "));
}

// call the saveScriptures function
saveScriptures(["Isaiah 40:31", "Psalm 46:10", "John 14:27"]);

// create a function to show a faith-related verse
function showVerse(verse: string) {
  console.log(verse);
}

// call the showVerse function
showVerse("Ephesians 6:10-11 - Finally, be strong in the Lord and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the schemes of the devil.");

// create a function to save faith-related quotes
function saveQuote(quote: string) {
  console.log("Saving quote: " + quote);
}

// call the saveQuote function
saveQuote("“Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you.” – Deuteronomy 31:6");

// create a function to display a faith-based affirmation
function showAffirmation(affirmation: string) {
  console.log(affirmation);
}

// call the showAffirmation function
showAffirmation("My faith is a light that guides me in the darkness.");

// create a function to save faith-related resources
function saveResource(title: string, url: string) {
  console.log("Saving resource '" + title + "' with URL: " + url);
}

// call the saveResource function
saveResource("Devotionals for Deeper Faith", "www.deeperfaith.com");