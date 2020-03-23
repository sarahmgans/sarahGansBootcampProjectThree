const appleProperties = {
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

    // 7) Store the name of the object left in the finalChoice array in a variable called finalApple and the url each of the apples in a variable called appleInfo. 
    const finalApple = finalChoice[0].name
    const appleInfo = finalChoice[0].url

    // 6) Display the html to a single location on the page. Modify one of the html's so that if the name of the apple is crab apple, the word apple at the end of the sentence is removed so that the word apple is not repeated. Modify another one of the html's so that if the name of the apple is empire, the word in front of Empire is replaced with the word an. 
    let identifier = 'a';
    let apple = ' apple'

    if (finalApple === 'Empire') { 
        identifier = 'an';
    } 

    if (finalApple === "Crab Apple") {
        apple ='';
    }

    $('.result').html(`
        <h3>You should try ${identifier}
        <span class='final'>${finalApple}</span>${apple}!</h3> 
        <a href='${appleInfo}'>Click on me to learn more about the ${finalApple}</a>`);

    // 7) on submit button scroll to the result
    $('html, body').animate({
        scrollTop: $('.result').offset().top
    }, 800);
});

// 8) On reset, clear the html that was posted to the .results section of the page, empty the radio buttons and scroll to the top of the page.  
$('.reset').click(function () {
    $('.result').empty();
    $('html, body').animate({
        scrollTop: $('.textBackground').offset().top
    }, 800);
});




