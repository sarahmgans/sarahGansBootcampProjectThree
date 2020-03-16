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

    // 4) Declare a variable to be an empty array to be filled with eight objects, all eight of which will have the same use.
    const appleChoices = appleProperties[use];

    // 5) Declare a variable to be an empty array to be filled with four objects, all of which will have the same texture and use.
    const textureChoices = [];
    for(let i = 0; i < appleChoices.length; i++){

        const store = appleChoices[i]
        if(store.texture === texture) {
            textureChoices.push(store); 
        }    
    }   

    // 6) Declare another variable to be an empty array to be filled with two objects, both with the same use, flavour and texture. 
    const flavourChoices = [];
    for(let i = 0; i < textureChoices.length; i++){

        const secondStore = textureChoices[i]
        if(secondStore.flavour === flavour) {
            flavourChoices.push(secondStore); 
        }
    }

    // 8) Declare a last variable to be an empty array to be filled with the final apple object. 
    const finalChoice = [];
    for(let i = 0; i < flavourChoices.length; i++){
        
        const thirdStore = flavourChoices[i]
        if(thirdStore.size === size){
            finalChoice.push(thirdStore);
        }
    }

    // 7) Display the html to a single location on the page.
    $('.results').html(`<h2>You should try the ${finalChoice[0].name} apple!</h2>`);

    // 8) On reset, clear the html that was posted to the .results section of the page. 
    $('.reset').click(function() {
    $('.results').empty();
});

})
