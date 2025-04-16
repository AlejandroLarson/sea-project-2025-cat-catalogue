// JSON array for cat objects

/*

Many of these photos are from my phone while at the Animal Wellness Foundation.
A few have been taken from Reddit.

*/

const cats = 
[
{
    "id" : 1,
    "name" : "Sprinkles",
    "birthdate" : "2024-10-01",
    "arrivaldate" : "2024-11-01",
    "sex" : "Female",
    "breed" : "Domestic Shorthair",
    "pattern" : "Tabby",
    "colors" : ["Brown"],
    "attributes" : ["Good with kids", "Good with dogs"],
    "image" : "images/cat_1.jpg",
    "description" : "Sprinkles is a wonderful little kitten looking for a good home."
},
{
    "id": 2,
    "name": "Shrimp",
    "birthdate": "2025-01-12",
    "arrivaldate": "2025-02-02",
    "sex": "Male",
    "breed": "Domestic Shorthair",
    "pattern" : "Bicolor",
    "colors" : ["Black", "White"],
    "attributes": ["Playful", "Talkative"],
    "image": "images/cat_2.jpg",
    "description": "Shrimp is a kitten that loves attention and can play all day."
},
{
    "id": 3,
    "name": "Ferrari",
    "birthdate": "2024-12-15",
    "arrivaldate": "2025-03-10",
    "sex": "Female",
    "breed": "Domestic Shorthair",
    "pattern" : "Tabby",
    "colors" : ["Brown"],
    "attributes": ["Playful","Good with kids"],
    "image": "images/cat_3.jpg",
    "description": "Ferrari is a sweet kitten discovered at a local junkyard, hence the name."
},
{
    "id": 4,
    "name": "Caputo",
    "birthdate": "2024-01-30",
    "arrivaldate": "2025-01-20",
    "sex": "Male",
    "breed": "Domestic Shorthair",
    "pattern" : "Bicolor",
    "colors" : ["Orange", "White"],
    "attributes": ["Independent", "Calm"],
    "image": "images/cat_4.jpg",
    "description": "Caputo is a very calm and independent cat that would love to explore your home."
},
{
    "id": 5,
    "name": "Creamsicle",
    "birthdate": "2025-02-01",
    "arrivaldate": "2025-04-15",
    "sex": "Female",
    "breed": "Domestic Shorthair",
    "pattern" : "Tabby",
    "colors" : ["Orange"],
    "attributes": ["Good with other cats"],
    "image": "images/cat_5.jpg",
    "description": "Creamsicle loves to play and makes lots of friends with other cats."
},
{
    "id": 6,
    "name": "Dusty",
    "birthdate": "2022-12-03",
    "arrivaldate": "2025-01-10",
    "sex": "Male",
    "breed": "Russian Blue",
    "pattern" : "Solid",
    "colors" : ["Gray"],
    "attributes": ["Shy", "Not good with other cats"],
    "image": "images/cat_6.jpg",
    "description": "Dusty is shy and scared of other cats. Once he trusts you, he can be very loving."
},
{
    "id": 7,
    "name": "Willow",
    "birthdate": "2024-08-05",
    "arrivaldate": "2025-01-01",
    "sex": "Female",
    "breed": "Domestic Shorthair",
    "pattern" : "Solid",
    "colors" : ["Black"],
    "attributes": ["Affectionate", "Shoulderkitty"],
    "image": "images/cat_7.jpg",
    "description": "Willow will climb onto your shoulder like a parrot and stay there forever."
},
{
    "id": 8,
    "name": "Bachata",
    "birthdate": "2024-05-14",
    "arrivaldate": "2025-01-20",
    "sex": "Male",
    "breed": "Domestic Longhair",
    "pattern" : "Tabby",
    "colors" : ["Brown"],
    "attributes": ["Curious", "Talkative"],
    "image": "images/cat_8.jpg",
    "description": "Bachata loves to meow for attention and someone to play with."
},
{
    "id": 9,
    "name": "Zoe",
    "birthdate": "2022-10-31",
    "arrivaldate": "2022-12-15",
    "sex": "Female",
    "breed": "Siamese",
    "pattern" : "Bicolor",
    "colors" : ["White","Black"],
    "attributes": ["Lapkitty"],
    "image": "images/cat_9.jpg",
    "description": "Zoe will look for a comfortable lap to sleep in."
},
{
    "id": 10,
    "name": "Nebula",
    "birthdate": "2024-12-17",
    "arrivaldate": "2025-04-10",
    "sex": "Female",
    "breed": "Domestic Mediumhair",
    "pattern" : "Bicolor",
    "colors" : ["White","Gray"],
    "attributes": ["Independent", "Good with kids"],
    "image": "images/cat_10.jpg",
    "description": "Nebula has a big personality and loves kids."
},
{
    "id": 11,
    "name": "Homer",
    "birthdate": "2025-03-09",
    "arrivaldate": "2025-04-10",
    "sex": "Male",
    "breed": "Domestic Mediumhair",
    "pattern" : "Tabby",
    "colors" : ["Brown"],
    "attributes": ["Lapkitty","Good with other cats"],
    "image": "images/cat_11.jpg",
    "description": "Homer is always looking for a good place to sleep."
},
{
    "id": 12,
    "name": "Felix",
    "birthdate": "2023-02-25",
    "arrivaldate": "2025-03-30",
    "sex": "Male",
    "breed": "Domestic Shorthair",
    "pattern" : "Tuxedo",
    "colors" : ["Black","White"],
    "attributes": ["Friendly", "Loves toys"],
    "image": "images/cat_12.jpg",
    "description": "Felix wants you to play. Time to pause whatever you're working on"
},
{
    "id": 13,
    "name": "Nala",
    "birthdate": "2025-01-10",
    "arrivaldate": "2025-04-01",
    "sex": "Female",
    "breed": "Maine Coon",
    "pattern" : "Solid",
    "colors" : ["White"],
    "attributes": ["Shy"],
    "image": "images/cat_13.jpg",
    "description": "Nala is a shy kitten that needs a patient parent to help her come out of her shell."
},
{
    "id": 14,
    "name": "Meadow",
    "birthdate": "2015-11-18",
    "arrivaldate": "2025-01-02",
    "sex": "Female",
    "breed": "Domestic Shorthair",
    "pattern" : "Tortoiseshell",
    "colors" : ["Black","Orange"],
    "attributes": ["Playful", "Health issue"],
    "image": "images/cat_14.jpg",
    "description": "Meadow is a slightly older cat but still acts like a kitten. She has a kidney issue."
},
{
    "id": 15,
    "name": "Mochi",
    "birthdate": "2025-01-22",
    "arrivaldate": "2025-04-10",
    "sex": "Female",
    "breed": "Russian Blue",
    "pattern" : "Solid",
    "colors" : ["Gray"],
    "attributes": ["Loves water", "Playful"],
    "image": "images/cat_15.jpg",
    "description": "Mochi loves to play and also seems to love water and taking baths."
}
]

