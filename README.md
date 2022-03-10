# pop_backend

## Description:
I created a pop inventory database where you would be able to get information on a pop (name, pop number, image), the media the pop came from (media, aired date, rating, characater info), vendor currently selling said pop (vendor name, price, availability), and the shipping company that will exporting your pop to you (shipping company, time it takes to ship the pop, release year of the pop, and shipping price)!

## Technologies Used:
MongoDB, MongoDB Atlas, Express, Node.JS, Mongoose, and Postman.

## Instruction to Install and Run Locally (Windows)
1. Git clone repo link
2. Open file on Visual Studio Code
3. Open terminal on Visual Studio Code (Git Bash)
4. Ensure you cd into the folder pop_backend
5. From there you will type the following command to populate the seed files:
          1. node seeds/origins.js
          2. node seeds/shippings.js
          3. node seeds/sellers.js 
          4. node seeds/pops.js
6. If postman is not already installed, please do so.
*The Postman app was used in testing the database to ensure that the database responded as expected* 🧸
7. In the visual studio terminal, type the command *npm start* and it will allow you to run locally on postman.

## Endpoints
There are four endpoints.
  1. /pop (will have origin details (media) and seller details (vendor ID))
  2. /origin
  3. /shipping 
  4. /seller (will have shipping details through vendor ID)

## Schemas:
### Pop Schema:
```
const Pop = new Schema(
  {
    name: { type: String, required: true },
    category: {type: String, required: false},
    pop_number: { type: String, required: true },
    image: { type: String, required: true },
    media: {type: Schema.Types.ObjectId, ref: 'origins'},
    vendor: {type: Schema.Types.ObjectId, ref: 'sellers'},
  },
  { timestamps: true }
);
```

### Origin Schema:
```
const Origin = new Schema(
  {
    media: { type: String, required: true },
    media_aired: { type: String, required: true },
    ratings: { type: String, required: true },
    character_info: { type: String, required: true },
  },
  { timestamps: true }
);
```

### Shipping Schema
```
const Shipping = new Schema(
  {
    shipping_company: { type: String, required: true },
    shipping_time: { type: String, required: true },
    release_year: { type: String, required: true },
    shipping_price: { type: String, required: true },
  },
  { timestamps: true }
);
```

### Seller Schema:
```
const Seller = new Schema(
  {
    vendor: { type: String, required: true },
    price: { type: String, required: true },
    availability: { type: String, required: true },
    shipping_company: {type: Schema.Types.ObjectId, ref: 'shippings'},
  },
  { timestamps: true }
);
```

## Hosted on Heroku
https://shielded-stream-74836.herokuapp.com/
*please use endpoints listed above*
