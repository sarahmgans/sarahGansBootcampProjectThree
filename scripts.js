// Start with an empty object that will be holding all of the code for the application. This object will be called 'myApple' and will be the namespace for the application. 
const myApple = {};

// Add an 'appleProperties' object as a property on the 'myApple' object. It will be holding two arrays, one of which will be holding the eight apple objects with the use of 'cooking', and the other of which will be holding the eight apple objects with the use of 'snacking'.
myApple.appleProperties = {
    cooking: [
        {
            name: 'Empire',
            texture: 'soft',
            flavour: 'tart',
            size: 'little',
            url: 'https://en.wikipedia.org/wiki/Empire_(apple)'
        },
        {
            name: 'Rome Beauty',
            texture: 'soft',
            flavour: 'tart',
            size: 'big',
            url: 'https://en.wikipedia.org/wiki/Rome_apple'
        },
        {
            name: 'Cortland',
            texture: 'soft',
            flavour: 'sweet',
            size: 'big',
            url: 'https://en.wikipedia.org/wiki/Cortland_(apple)'
        },
        {
            name: 'Winesap',
            texture: 'soft',
            flavour: 'sweet',
            size: 'little',
            url: 'https://en.wikipedia.org/wiki/Winesap'
        },
        {
            name: 'Granny Smith',
            texture: 'crisp',
            flavour: 'tart',
            size: 'big',
            url: 'https://en.wikipedia.org/wiki/Granny_Smith'
        },
        {
            name: 'Crab Apple',
            texture: 'crisp',
            flavour: 'tart',
            size: 'little',
            url: 'https://en.wikipedia.org/wiki/Malus'
        },
        {
            name: 'Jonagold',
            texture: 'crisp',
            flavour: 'sweet',
            size: 'little',
            url: 'https://en.wikipedia.org/wiki/Jonagold'
        },
        {
            name: 'Braeburn',
            texture: 'crisp',
            flavour: 'sweet',
            size: 'big',
            url: 'https://en.wikipedia.org/wiki/Braeburn'
        },
    ],

    snack: [
        {
            name: 'McIntosh',
            texture: 'soft',
            flavour: 'tart',
            size: 'little',
            url: 'https://en.wikipedia.org/wiki/McIntosh_(apple)'
        },
        {
            name: 'Cortland',
            texture: 'soft',
            flavour: 'tart',
            size: 'big',
            url: 'https://en.wikipedia.org/wiki/Cortland_(apple)'
        },
        {
            name: 'Red Delicious',
            texture: 'soft',
            flavour: 'sweet',
            size: 'big',
            url: 'https://en.wikipedia.org/wiki/Red_Delicious'
        },
        {
            name: 'Empire',
            texture: 'soft',
            flavour: 'sweet',
            size: 'little',
            url: 'https://en.wikipedia.org/wiki/Empire_(apple)'
        },
        {
            name: 'Honeycrisp',
            texture: 'crisp',
            flavour: 'sweet',
            size: 'big',
            url: 'https://en.wikipedia.org/wiki/Honeycrisp'
        },
        {
            name: 'Jazz',
            texture: 'crisp',
            flavour: 'sweet',
            size: 'little',
            url: 'https://en.wikipedia.org/wiki/Jazz_(apple)'
        },
        {
            name: 'Pink Lady',
            texture: 'crisp',
            flavour: 'tart',
            size: 'big',
            url: 'https://en.wikipedia.org/wiki/Cripps_Pink'
        },
        {
            name: 'Cameo',
            texture: 'crisp',
            flavour: 'tart',
            size: 'little',
            url: 'https://en.wikipedia.org/wiki/Cameo_(apple)'
        },
    ]
}

// Define the scroll function that will be used to scroll from the landing page to the beginning of the form, from the submit button to the results, and from the reset button back to the beginning of the form. Add 'scroll' onto the 'myApple' object. 
myApple.scroll = function (scrollTo) {
    $('html, body').animate({
        scrollTop: $(scrollTo).offset().top
    }, 800);
}

// Attach an event listener onto the start link on the landing page, and on click, have the page scroll to the beginning of the form using the scroll function from above. Define a function containing the event listener and add it onto the 'myApple' object. 
myApple.clickEventStart = () => {
    $('a').on('click', function (e) {
        e.preventDefault();
        myApple.scroll('main');
    })
}

// Attach an event listener onto the submit input on the form. Define a function containing the event listener and add it onto the 'myApple' object. 
myApple.clickEventSubmit = () => {
    $('form').on('submit', function (e) {
        e.preventDefault();

        // If the user tries to submit the form without checking one of the options for each of the questions, have an alert that tells the user to go back and answer all of the questions. 

        // To do this, begin by declaring a variable called allAnswered that starts off as true. 
        let allAnswered = true;

        // If a question does not have any checked radio buttons, the allAnswered variable is changed to false. If any of the questions have the allAnswered variable changed to false, alert the user to go back and complete all of the questions. 
        $("input:radio").each(function () {
            let name = $(this).attr("name");
            if ($("input:radio[name=" + name + "]:checked").length == 0) {
                allAnswered = false;
            }
        });
        if (allAnswered == false) {
            Swal.fire({
                title: 'Oh no!',
                text: 'Please go back and answer all of the questions!',
                imageUrl: './assets/Apple-Fruit-Transparent.png',
                imageWidth: 85,
                imageAlt: 'Apple',
            })
        }

        // Save the checked values from each of the inputs into variables.
        const use = $('input[name="use"]:checked').val();
        const texture = $('input[name="texture"]:checked').val();
        const flavour = $('input[name="flavour"]:checked').val();
        const size = $('input[name="size"]:checked').val();

        // Declare a variable to be an array called appleChoices. This will be filled with eight apple objects, all of which will have the same use.
        const appleChoices = myApple.appleProperties[use];

        // Declare a variable to be an array called finalChoice. This will be filled with the final apple object. 
        const finalChoice = [];

        // Create a for loop that loops through the appleChoices array and matches the property/value pairs of an apple object with the users checked values of the texture, flavour and size inputs to produce one final object. This final object will be stored in the finalChoice array. 
        for (let i = 0; i < appleChoices.length; i++) {
            const store = appleChoices[i]
            if (store.texture === texture && store.flavour === flavour && store.size === size) {
                finalChoice.push(store);
            }
        }

        // Store the name of this final object in the finalChoice array in a variable called finalApple. Save the url property/value pair of each of the apples in a variable called appleInfo. 
        finalApple = finalChoice[0].name
        appleInfo = finalChoice[0].url

        // On submit, scroll to the result. 
        myApple.scroll('.result');

        // Display the result html to a single location on the page. Use a ternary operator so that if the name of the apple is crab apple, the word 'apple' at the end of the sentence is removed and not repeated. Use another ternary operator so that if the name of the apple is empire, the word 'a' in front of Empire is replaced with the word 'an'. 
        $('.result').html(`<h3>You should try a${finalApple === 'Empire' ? 'n' : ''}
        <span class='final'>${finalApple}</span>${finalApple === 'Crab Apple' ? '' : ' apple'}!</h3> 
        <a href='${appleInfo}'>Learn more about the ${finalApple}</a>`);
    });
}

// Attach an event listener to the reset input on the form, so that on click, the html that was posted to the ‘result’ section of the page is cleared, the radio buttons are unchecked and the form is scrolled back to the top of the page, using once again the scroll function from above. Define a function containing the event listener and add it onto the 'myApple' object. 
myApple.clickEventReset = () => {
    $('.reset').click(function () {
    $('.result').empty();
    myApple.scroll('main');
});
}

// Define the init function that will be holding the script. Inside the init function, the three event listener functions that were defined above will be called.
myApple.init = () => {
    myApple.clickEventStart();
    myApple.clickEventSubmit();
    myApple.clickEventReset();
}

// Define the document ready function. This function will allow for our page to fully load before it calls the init function that will run all of the script. 
$(function () {
    myApple.init()
})