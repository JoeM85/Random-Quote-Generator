// Quotes and authors 
var quoteArray = [
    {quote: "Fortune favors the bold.",
     author: "Virgil"},
    {quote: "Reality leaves a lot to the imagination.",
     author: "John Lennon"},
    {quote: "Whatever the mind of man can conceive and believe, it can achieve.", 
     author: "Napoleon Hill"},
    {quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"},
    {quote: " You miss 100% of the shots you don’t take. ",
    author: "Wayne Gretzky"},
    {quote:"Every strike brings me closer to the next home run.",
    author: "Babe Ruth"},
    {quote: "We become what we think about.",
    author: "Earl Nightingale"},
    {quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll"},
    {quote: "The mind is everything. What you think you become.",
    author: "Buddha"},
    {quote: "An unexamined life is not worth living.",
    author: "Socrates"},
    {quote:" Eighty percent of success is showing up.",
    author: "Woody Allen"},
    {quote:" I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey"},
    {quote: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin"},
    {quote: " Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt"},
    {quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair"},
    {quote: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu"},
    {quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin"},
    {quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein"},
    {quote: " It is never too late to be what you might have been.",
    author: "George Eliot"},
    {quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
    author: "Ayn Rand"}];

$(document).ready(function() {

document.querySelector(".quote-btn").onclick = function() {
    //Get a random number to pick a random quote object
    var random = Math.floor(Math.random() * quoteArray.length);
    //Get a random quote
    document.querySelector(".quote").innerHTML = quoteArray[random].quote;
    //Get that random quote's author
    document.querySelector(".author").innerHTML = '&mdash; ' + quoteArray[random].author;
};

document.querySelector(".btn-add-quote").onclick = function() {
    //Adds users own authors and quotes to the quoteArray
    var yourAuthor = document.querySelector(".input-author").value;
    var newQuote = document.querySelector(".input-quote").value;
    if(newQuote === "" || yourAuthor === "") {
        alert("You left a text field empty");
        return false;
    } else {
        quoteArray.push({quote: newQuote, author: yourAuthor});
    }
    //Reset text fields
    function reset() {
        document.querySelector(".input-author").value = null;
        document.querySelector(".input-quote").value = null;
    }
    reset();
}

    //Adds fade in animation for quote text
    $(".quote-btn").on("click", function () {
        $("h1").addClass("animated fadeIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
        function() {
        $("h1").removeClass("animated fadeIn");
        }); 
    });  
    //Adds slide animation for author text
     $(".quote-btn").on("click", function () {
        $(".author").addClass("animated slideInLeft").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
        function() {
        $(".author").removeClass("animated slideInLeft");
        });
    });
    //Adds quotation marks around quotes
    $(".quote-btn").click(function(){
        $("h1").prepend(' <span>" </span>');
        $("h1").append(' <span> "</span>');
    });
    //Changes button text   
    $(".btn").click(function(){
        var $this = $(this);
        $this.toggleClass('btn-text');
        if($this.hasClass('btn-text')){
            $this.text('Close');         
        } else {
            $this.text('Add your own quote');
        }
    }); 
});





