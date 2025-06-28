let book={
    title: "The Howl Within the veins",
    author:"Arushi Paul",
    price:30
};

book.price=25.99;
console.log("New book price:",book.price);

book.publisher="Bribooks";
console.log("publisher:", book.publisher);

function printBookDetails(bookObj){
    console.log("Book Details:");
    console.log("Title:"+bookObj.title);
    console.log("Author:"+bookObj.author);
    console.log("Price:"+bookObj.price);
    console.log("publisher:"+bookObj.publisher);
}

printBookDetails(book);
let currentDate=new Date();
console.log("Current Date and Time:", currentDate);
console.log("Random Math Operation:",Math.random)