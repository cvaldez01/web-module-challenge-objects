///////////////Menu Items (MVP)///////////////////

const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const burger = {name: "Burger", price: 18, category: "Lunch"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

/* Task 1a: write a function to return more menu items with the same format as the items above. */

function createMenuItem(name, price, category){
            this.name=name,
            this.price=price,
            this.category=category;

}


/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */
   const cheeseburger = new createMenuItem("BaconBurger",10,"Lunch");
   const salad = new createMenuItem("cesarsalad",15,"Lunch");
   const vodka = new createMenuItem("vodkaloca",20,"drinks");
   console.log(cheeseburger,salad,vodka);


/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else.
Add a method to your burger object that automatically calculates
price given a string as a parameter.

Your method should accept:

(1) A string (teacher, student, or public)

and should return a number.

For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/

function client(name,age,price,type){

  this.name=name,
  this.age=age,
  this.price=price,
  this.type=type;

}
const burger1 = {
  name:"Burger",
  price:18,
  category:"Lunch",
  discount:function (customer){
    if(customer==='student'||customer ==='teacher'){
    return this.price -(this.price*0.25);
  }else if (customer==='public') {
    return this.price -(this.price*0.1);
  }
  }
};

//console.log(burger.discount('student'));
//console.log(burger.discount('teacher'));
//console.log(burger.discount('public'));

///////////////Reviews (MVP)///////////////////

const reviews = [{name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name:"Reyna", rating: 3.5, feedback: ""},
]

/* Task 3: Console.log just Julius' feedback */
function feedbackByName(names){
  for (let i=0; i < reviews.length; i++){
    if(reviews[i].name==="Julius"){
      return reviews[i].feedback;
    }

  }
}
console.log(feedbackByName("Julius"));


/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */
function addNewRating(reviews){
  for(let i=0 ; i < reviews.length;i++){
    if(reviews[i].rating===3.5){
      reviews.push(reviews[i].rating=5);

    }
  }

}
addNewRating(reviews);
console.log(reviews);

/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"*/
function changeFeedback(names){
  for (let i=0; i < reviews.length; i++){
    if(reviews[i].name==="Reyna"){
      reviews.push(reviews[i].feedback="this place is chill with really cool people, great for getting work done on weekdays");
    }

  }
}
changeFeedback(reviews);
console.log(reviews);


/*  Task 6: Write a function to return a review based on the index of the review in the array.


 Your function should take two arguments:

(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.

and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 *
 * For example, if getReviewByIndex is invoked with reviews and the number 0
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/
const index=3;
function getReviewByIndex(reviews, index) {
    for(let i=0 ; i < reviews.length;i++){
      if([i]==index){
        return `${reviews[i].name} gave the restaurant a  ${reviews[i].rating} , and their feedback was: ${reviews[i].feedback}`;
      }

    }
  }
console.log(getReviewByIndex(reviews,index));

/* Task 7: Write a function to get information about the most recent review called `getLastReview`

getLastReview should accept:
  (1) an array of objects

and should return a string in the format `name} gave the restaurant a {rating}, and their feedback was: {feedback}`

For example, if getLastReview is invoked passing the reviews array it will return `Reyna gave the restaurant a 3.5 star review and their feedback was: "this place is chill with really cool people, great for getting work done on weekdays"`.
*/
let lastreview=reviews.length;
function getLastReview(reviews) {
  for(let i=0;i < reviews.length;i++)

    if([i]){
      return `${reviews[i].name} gave the restaurant a  ${reviews[i].rating} star review and their feedback was:${reviews[i].feedback}`;
    }

  }
  
  console.log(getLastReview(reviews));
  console.log(lastreview);


///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a certain range. Your function should accept:

  (1) An array of objects
  (2) A rating

  and should return an array of objects.

  For example, invoking getReviewByRating(reviews, 4) would return [{name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}]
*/

 function getReviewByRating(/* code here */) {
    /* code here */
  }


/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words.

Your function should accept:

  (1) An array of objects

and should return an array of objects.

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/
  function getLongReviews(/* code here */) {
    /* code here */
  }


/* STRETCH 3:  This challenge is not related to the data above!

Write a function called carMarker

Your function should accept:

(1) a single odometer argument (a number)

and return an object.

The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.
*/


function carMaker(/* code here */) {
    /* code here */

}
