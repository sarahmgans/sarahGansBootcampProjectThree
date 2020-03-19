const appleProperties = {
    cooking: [
    {
        name: 'Empire',
        texture: 'soft',
        flavour: 'tart',
        size: 'little'
    },
    {
        name: 'Rome Beauty',
        texture: 'soft',
        flavour: 'tart',
        size: 'big'
    },
    {
        name: 'Cortland',
        texture: 'soft',
        flavour: 'sweet',
        size: 'big'
    },
    {
        name: 'Winesap',
        texture: 'soft',
        flavour: 'sweet',
        size: 'little'
    },
    {
        name: 'Granny Smith',
        texture: 'crisp',
        flavour: 'tart',
        size: 'big'
    },
    {
        name: 'Crab Apple',
        texture: 'crisp',
        flavour: 'tart',
        size: 'little'
    },
    {
        name: 'Jonagold',
        texture: 'crisp',
        flavour: 'sweet',
        size: 'little'
    },
    {
        name: 'Braeburn',
        texture: 'crisp',
        flavour: 'sweet',
        size: 'big'
    },
    ],

    snack: [
    {
        name: 'McIntosh',
        texture: 'soft',
        flavour: 'tart',
        size: 'little'
    },
    {
        name: 'Cortland',
        texture: 'soft',
        flavour: 'tart',
        size: 'big'
    },
    {
        name: 'Red Delicious',
        texture: 'soft',
        flavour: 'sweet',
        size: 'big'
    },
    {
        name: 'Empire',
        texture: 'soft',
        flavour: 'sweet',
        size: 'little'
    },
    {
        name: 'Honeycrisp',
        texture: 'crisp',
        flavour: 'sweet',
        size: 'big'
    },
    {
        name: 'Jazz',
        texture: 'crisp',
        flavour: 'sweet',
        size: 'little'
    },
    {
        name: 'Pink Lady',
        texture: 'crisp',
        flavour: 'tart',
        size: 'big'
    },
    {
        name: 'Cameo',
        texture: 'crisp',
        flavour: 'tart',
        size: 'little'
    },
]
}



// 1) attach event listener onto submit on form
$('form').on('submit', function(e){

    // 2) prevent default behaviour
    e.preventDefault();

    // 3) save the values from the inputs into variables
    const use = $('input[name="use"]:checked').val();
    const texture = $('input[name="texture"]:checked').val();
    const flavour = $('input[name="flavour"]:checked').val();
    const size = $('input[name="size"]:checked').val();

    // 4) Declare a variable to be an empty that will be filled with eight objects, all eight of which will have the same use.
    const appleChoices = appleProperties[use];

    // 5) Declare a variable to be an array that will be filled with the final object.
    const finalChoice = [];
    
    // 6) Create a for loop that loops through and matches the property/value pairs with the saved values from the checked texture, flavour and size inputs. This will result in one array named the finalChoice array. 
    for (let i = 0; i < appleChoices.length; i++) {
        const store = appleChoices[i]
        if (store.texture === texture && store.flavour === flavour && store.size === size) {
            finalChoice.push(store);
        }
    }

    // 7) Store the name of the object left in the finalChoice array in a variable called finalApple.
    const finalApple = finalChoice[0].name

    // 6) Display the html to a single location on the page. Modify one of the html's so that if the name of the apple is crab apple, remove the word apple at the end of the sentence so that the word apple is not repeated. 
    if (finalApple === 'Crab Apple') {
        $('.result').html(`
        <h3>You should try a 
        <span>${finalApple}</span>!
        </h3>`);
    } else if (finalApple === 'Empire') {
        $('.result').html(`
        <h3>You should try an 
        <span>${finalApple}</span> 
        apple!</h3>`);
    } else {
        $('.result').html(`
        <h3>You should try a 
        <span>${finalApple}</span> 
        apple!</h3>`);
    }

    // 7) on submit button scroll to the result
    $('html, body').animate({
        scrollTop: $('.result').offset().top
    }, 800);
});

// 8) On reset, clear the html that was posted to the .results section of the page. 
$('.reset').click(function () {
    $('.result').empty();
    $('html, body').animate({
        scrollTop: $('.textBackground').offset().top
    }, 800);

});


