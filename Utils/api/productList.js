//dummy data
const productListData = {
    "New Products": [
        {
          id: 1,
          name: "Classic Canvas Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Timeless canvas sneakers for everyday wear.",
          long_description: "Step out in style with these classic canvas sneakers. Featuring a comfortable design and durable construction, they're perfect for everyday wear. The versatile design pairs well with jeans or shorts for a casual look, making them a must-have addition to your shoe collection.",
          price: 29.99
        },
        {
          id: 2,
          name: "Graphic Print T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Stylish graphic print t-shirt for a trendy look.",
          long_description: "Make a statement with this stylish graphic print t-shirt. Featuring a bold design and comfortable fit, it's perfect for adding a pop of personality to your casual outfits. Whether you're pairing it with jeans or shorts, this t-shirt is sure to turn heads wherever you go.",
          price: 19.99
        },
        {
          id: 3,
          name: "Hooded Sweatshirt",
          type_of_clothing: "Hoodie",
          medium_description: "Cozy hooded sweatshirt for chilly days.",
          long_description: "Stay warm and comfortable in this cozy hooded sweatshirt. Made from soft and plush fabric, it features a relaxed fit and a drawstring hood for added warmth. Whether you're lounging at home or running errands, this hoodie is sure to keep you cozy all day long.",
          price: 39.99
        },
        {
          id: 4,
          name: "Athletic Running Shoes",
          type_of_clothing: "Shoes",
          medium_description: "Performance-driven running shoes for athletes.",
          long_description: "Stay ahead of the competition with these performance-driven running shoes. Designed for athletes, they feature a lightweight construction and responsive cushioning to help you reach your full potential. Whether you're training for a race or hitting the gym, these shoes are sure to keep up with your active lifestyle.",
          price: 49.99
        },
        {
          id: 5,
          name: "Striped Polo Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Classic striped polo shirt for a preppy look.",
          long_description: "Add a touch of preppy style to your wardrobe with this classic striped polo shirt. Made from soft and breathable fabric, it features a timeless design with a ribbed collar and cuffs. Whether you're hitting the golf course or grabbing brunch with friends, this polo shirt is sure to impress.",
          price: 24.99
        },
        {
          id: 6,
          name: "Zip-Up Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Versatile zip-up hoodie for everyday wear.",
          long_description: "Stay cozy and stylish with this versatile zip-up hoodie. Made from soft and stretchy fabric, it features a relaxed fit and a zip-front closure for easy layering. Whether you're headed to the gym or running errands, this hoodie is sure to become a go-to favorite in your wardrobe.",
          price: 34.99
        },
        {
          id: 7,
          name: "Canvas Slip-On Shoes",
          type_of_clothing: "Shoes",
          medium_description: "Casual slip-on shoes for effortless style.",
          long_description: "Add a touch of laid-back style to your wardrobe with these canvas slip-on shoes. Featuring a comfortable design and easy slip-on construction, they're perfect for everyday wear. The versatile design pairs well with jeans or shorts, making them a must-have for any casual outfit.",
          price: 27.99
        },
        {
          id: 8,
          name: "Vintage Graphic T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Vintage-inspired graphic t-shirt for a retro look.",
          long_description: "Channel retro vibes with this vintage-inspired graphic t-shirt. Featuring a distressed print and soft fabric, it's perfect for adding a touch of nostalgia to your wardrobe. Whether you're pairing it with jeans or shorts, this t-shirt is sure to become a staple in your casual rotation.",
          price: 21.99
        },
        {
          id: 9,
          name: "Fleece Pullover Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Cozy fleece pullover hoodie for chilly evenings.",
          long_description: "Stay warm and comfortable in this cozy fleece pullover hoodie. Made from plush fleece fabric, it features a relaxed fit and a kangaroo pocket for added warmth. Whether you're lounging at home or hanging out with friends, this hoodie is sure to keep you cozy all season long.",
          price: 44.99
        },
        {
          id: 10,
          name: "Suede Chelsea Boots",
          type_of_clothing: "Shoes",
          medium_description: "Stylish suede chelsea boots for a polished look.",
          long_description: "Step out in style with these sleek suede chelsea boots. Featuring a classic silhouette and a durable sole, they're perfect for adding a touch of sophistication to any outfit. Whether you're dressing them up for the office or down for a night out, these boots are sure to elevate your look.",
          price: 59.99
        },
        {
          id: 11,
          name: "Pocket T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Essential pocket t-shirt for everyday wear.",
          long_description: "Stay cool and comfortable in this essential pocket t-shirt. Made from soft and breathable fabric, it features a classic design with a chest pocket for added style. Whether you're pairing it with jeans or shorts, this t-shirt is sure to become a go-to favorite in your wardrobe.",
          price: 17.99
        },
        {
          id: 12,
          name: "Graphic Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Cool graphic hoodie for a laid-back look.",
          long_description: "Add a touch of cool to your wardrobe with this graphic hoodie. Featuring a bold print and soft fabric, it's perfect for adding a pop of personality to your casual outfits. Whether you're lounging at home or running errands, this hoodie is sure to keep you stylish and comfortable.",
          price: 36.99
        },
        {
          id: 13,
          name: "Leather Loafers",
          type_of_clothing: "Shoes",
          medium_description: "Classic leather loafers for a sophisticated look.",
          long_description: "Step out in style with these classic leather loafers. Featuring a timeless design and durable construction, they're perfect for adding a touch of sophistication to any outfit. Whether you're dressing them up for the office or down for a night out, these loafers are sure to impress.",
          price: 49.99
        },
        {
          id: 14,
          name: "Striped Raglan T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Sporty striped raglan t-shirt for a casual look.",
          long_description: "Stay stylish and comfortable in this sporty striped raglan t-shirt. Made from soft and stretchy fabric, it features a classic design with contrasting sleeves for added style. Whether you're hitting the gym or hanging out with friends, this t-shirt is sure to become a go-to favorite in your wardrobe.",
          price: 22.99
        },
        {
          id: 15,
          name: "Fleece Zip-Up Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Cozy fleece zip-up hoodie for chilly days.",
          long_description: "Stay warm and comfortable in this cozy fleece zip-up hoodie. Made from plush fleece fabric, it features a relaxed fit and a zip-front closure for easy layering. Whether you're lounging at home or running errands, this hoodie is sure to keep you cozy all season long.",
          price: 39.99
        },
        {
          id: 16,
          name: "Leather Oxford Shoes",
          type_of_clothing: "Shoes",
          medium_description: "Classic leather oxford shoes for a timeless look.",
          long_description: "Step out in style with these classic leather oxford shoes. Featuring a timeless design and durable construction, they're perfect for adding a touch of sophistication to any outfit. Whether you're dressing them up for the office or down for a night out, these oxford shoes are sure to impress.",
          price: 54.99
        },
        {
          id: 17,
          name: "V-Neck T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Essential v-neck t-shirt for everyday wear.",
          long_description: "Stay cool and comfortable in this essential v-neck t-shirt. Made from soft and breathable fabric, it features a classic design with a v-neckline for added style. Whether you're pairing it with jeans or shorts, this t-shirt is sure to become a staple in your casual rotation.",
          price: 15.99
        },
        {
          id: 18,
          name: "Zippered Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Versatile zippered hoodie for everyday wear.",
          long_description: "Stay cozy and stylish with this versatile zippered hoodie. Made from soft and stretchy fabric, it features a relaxed fit and a zip-front closure for easy layering. Whether you're headed to the gym or running errands, this hoodie is sure to become a go-to favorite in your wardrobe.",
          price: 29.99
        },
        {
          id: 19,
          name: "Suede Desert Boots",
          type_of_clothing: "Shoes",
          medium_description: "Stylish suede desert boots for a rugged look.",
          long_description: "Step out in style with these rugged suede desert boots. Featuring a classic design and durable construction, they're perfect for adding a touch of rugged sophistication to any outfit. Whether you're pairing them with jeans or chinos, these desert boots are sure to make a statement.",
          price: 64.99
        },
        {
          id: 20,
          name: "Basic Crew Neck T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Essential crew neck t-shirt for everyday wear.",
          long_description: "Stay cool and comfortable in this essential crew neck t-shirt. Made from soft and breathable fabric, it features a classic design with a ribbed crew neckline for added style. Whether you're pairing it with jeans or shorts, this t-shirt is sure to become a go-to favorite in your casual rotation.",
          price: 12.99
        }
      ],
    "Upcoming Items": [
        {
          id: 21,
          name: "Canvas Low-Top Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Casual low-top sneakers for everyday comfort.",
          long_description: "Stay comfortable and stylish with these casual low-top sneakers. Made from durable canvas, they feature a classic design with a rubber sole for added traction. Whether you're running errands or hanging out with friends, these sneakers are sure to become a go-to favorite in your wardrobe.",
          price: 32.99
        },
        {
          id: 22,
          name: "Graphic Hooded Sweatshirt",
          type_of_clothing: "Hoodie",
          medium_description: "Trendy graphic hoodie for a casual vibe.",
          long_description: "Add some flair to your casual wardrobe with this graphic hooded sweatshirt. Featuring a bold graphic print and a cozy hood, it's perfect for adding a touch of personality to your everyday outfits. Made from soft and comfortable fabric, this hoodie is sure to keep you warm and stylish all day long.",
          price: 42.99
        },
        {
          id: 23,
          name: "Leather Slip-On Loafers",
          type_of_clothing: "Shoes",
          medium_description: "Sleek leather slip-on loafers for a polished look.",
          long_description: "Step out in style with these sleek leather slip-on loafers. Featuring a classic design and smooth leather construction, they're perfect for adding a touch of sophistication to any outfit. Whether you're dressing them up for the office or down for a night out, these loafers are sure to impress.",
          price: 59.99
        },
        {
          id: 24,
          name: "Striped Long Sleeve T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Stylish striped long sleeve t-shirt for a versatile look.",
          long_description: "Elevate your casual wardrobe with this stylish striped long sleeve t-shirt. Made from soft and stretchy fabric, it features a classic design with bold stripes for added visual interest. Whether you're layering it under a jacket or wearing it on its own, this t-shirt is sure to become a staple in your rotation.",
          price: 27.99
        },
        {
          id: 25,
          name: "Fleece-lined Zip Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Warm fleece-lined zip hoodie for chilly days.",
          long_description: "Stay cozy and warm with this fleece-lined zip hoodie. Featuring a soft fleece lining and a zip-front closure, it's perfect for layering on chilly days. The adjustable drawstring hood adds extra warmth, making it a must-have for your winter wardrobe.",
          price: 49.99
        },
        {
          id: 26,
          name: "Casual Slip-On Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Versatile slip-on sneakers for easy style.",
          long_description: "Add effortless style to your look with these versatile slip-on sneakers. Featuring a comfortable design and easy slip-on construction, they're perfect for everyday wear. The neutral color palette makes them easy to pair with a variety of outfits, while the cushioned insole provides all-day comfort.",
          price: 34.99
        },
        {
          id: 27,
          name: "Basic V-Neck T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Essential v-neck t-shirt for everyday wear.",
          long_description: "Keep it simple and stylish with this basic v-neck t-shirt. Made from soft and breathable fabric, it features a classic design with a v-neckline for added style. Whether you're pairing it with jeans or shorts, this t-shirt is sure to become a staple in your casual rotation.",
          price: 14.99
        },
        {
          id: 28,
          name: "Sherpa-Lined Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Cozy sherpa-lined hoodie for extra warmth.",
          long_description: "Stay warm and stylish in this cozy sherpa-lined hoodie. Made from soft fleece with a plush sherpa lining, it's perfect for layering on cold days. The zip-front closure and adjustable drawstring hood add extra warmth and versatility, making it a winter wardrobe essential.",
          price: 54.99
        },
        {
          id: 29,
          name: "Suede Chukka Boots",
          type_of_clothing: "Shoes",
          medium_description: "Stylish suede chukka boots for a rugged look.",
          long_description: "Step out in style with these rugged suede chukka boots. Featuring a classic design and durable construction, they're perfect for adding a touch of rugged sophistication to any outfit. Whether you're dressing them up for a night out or keeping it casual with jeans, these boots are sure to make a statement.",
          price: 69.99
        },
        {
          id: 30,
          name: "Striped Pocket T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Classic striped pocket t-shirt for a timeless look.",
          long_description: "Add a timeless touch to your casual wardrobe with this classic striped pocket t-shirt. Made from soft and breathable fabric, it features a chest pocket and bold stripes for added style. Whether you're pairing it with jeans or shorts, this t-shirt is sure to become a staple in your rotation.",
          price: 19.99
        },
        {
          id: 31,
          name: "Quilted Zip-Up Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Stylish quilted zip-up hoodie for a modern look.",
          long_description: "Stay warm and stylish in this quilted zip-up hoodie. Made from soft and cozy fabric with a quilted design, it's perfect for layering on chilly days. The zip-front closure and adjustable drawstring hood add extra warmth and versatility, making it a must-have for your winter wardrobe.",
          price: 46.99
        },
        {
          id: 32,
          name: "Classic Leather Derby Shoes",
          type_of_clothing: "Shoes",
          medium_description: "Timeless leather derby shoes for a sophisticated look.",
          long_description: "Step out in style with these classic leather derby shoes. Featuring a timeless design and durable construction, they're perfect for adding a touch of sophistication to any outfit. Whether you're dressing them up for the office or down for a night out, these derby shoes are sure to impress.",
          price: 79.99
        },
        {
          id: 33,
          name: "Striped Henley T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Sporty striped henley t-shirt for a casual look.",
          long_description: "Stay stylish and comfortable in this sporty striped henley t-shirt. Made from soft and stretchy fabric, it features a classic henley neckline and bold stripes for added style. Whether you're hitting the gym or hanging out with friends, this t-shirt is sure to become a go-to favorite in your wardrobe.",
          price: 23.99
        },
        {
          id: 34,
          name: "Colorblock Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Trendy colorblock hoodie for a modern vibe.",
          long_description: "Add some flair to your casual wardrobe with this colorblock hoodie. Featuring contrasting panels and a cozy hood, it's perfect for adding a touch of personality to your everyday outfits. Made from soft and comfortable fabric, this hoodie is sure to keep you warm and stylish all day long.",
          price: 38.99
        },
        {
          id: 35,
          name: "Suede Moccasin Slippers",
          type_of_clothing: "Shoes",
          medium_description: "Cozy suede moccasin slippers for indoor comfort.",
          long_description: "Stay cozy and comfortable indoors with these suede moccasin slippers. Made from soft suede with a plush faux fur lining, they're perfect for lounging around the house. The rubber sole provides traction for indoor wear, while the classic moccasin design adds a touch of style to your relaxation time.",
          price: 29.99
        },
        {
          id: 36,
          name: "Striped Raglan Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Sporty striped raglan hoodie for a laid-back look.",
          long_description: "Stay stylish and comfortable in this sporty striped raglan hoodie. Made from soft and stretchy fabric, it features a classic design with contrasting raglan sleeves for added style. Whether you're hitting the gym or hanging out with friends, this hoodie is sure to become a go-to favorite in your wardrobe.",
          price: 31.99
        },
        {
          id: 37,
          name: "Canvas High-Top Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Classic canvas high-top sneakers for a retro vibe.",
          long_description: "Step back in time with these classic canvas high-top sneakers. Featuring a retro design and durable construction, they're perfect for adding a touch of nostalgia to your wardrobe. Whether you're pairing them with jeans or a skirt, these sneakers are sure to make a statement.",
          price: 36.99
        },
        {
          id: 38,
          name: "Cotton Polo Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Classic cotton polo shirt for a timeless look.",
          long_description: "Add a timeless touch to your wardrobe with this classic cotton polo shirt. Made from soft and breathable fabric, it features a ribbed collar and cuffs for a polished finish. Whether you're hitting the golf course or running errands, this polo shirt is sure to become a staple in your rotation.",
          price: 26.99
        },
        {
          id: 39,
          name: "Knit Pullover Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Cozy knit pullover hoodie for everyday comfort.",
          long_description: "Stay cozy and comfortable in this knit pullover hoodie. Made from soft and stretchy fabric, it features a relaxed fit and a kangaroo pocket for added warmth. Whether you're lounging at home or running errands, this hoodie is sure to keep you cozy all day long.",
          price: 33.99
        },
        {
          id: 40,
          name: "Leather Driving Moccasins",
          type_of_clothing: "Shoes",
          medium_description: "Classic leather driving moccasins for a refined look.",
          long_description: "Step out in style with these classic leather driving moccasins. Featuring a timeless design and durable construction, they're perfect for adding a touch of sophistication to any outfit. Whether you're driving or walking, these moccasins are sure to keep you comfortable and stylish.",
          price: 44.99
        }
      ],
      "Collectibles":[
        {
          id: 81,
          name: "Canvas Slip-On Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Casual canvas slip-on sneakers for easy wear.",
          long_description: "Stay comfortable and stylish with these casual canvas slip-on sneakers. Featuring a classic slip-on design and durable canvas upper, they're perfect for everyday wear. Whether you're running errands or hanging out with friends, these sneakers are sure to become a go-to favorite.",
          price: 29.99
        },
        {
          id: 82,
          name: "Graphic Print T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Cool graphic print t-shirt for a trendy look.",
          long_description: "Make a statement with this cool graphic print t-shirt. Featuring a bold graphic print and soft cotton fabric, it's perfect for adding a touch of personality to your wardrobe. Whether you're pairing it with jeans or shorts, this t-shirt is sure to turn heads wherever you go.",
          price: 19.99
        },
        {
          id: 83,
          name: "Classic High-Top Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Iconic classic high-top sneakers for retro style.",
          long_description: "Step back in time with these iconic classic high-top sneakers. Featuring a retro design and durable construction, they're perfect for adding a touch of nostalgia to your wardrobe. Whether you're pairing them with jeans or a dress, these sneakers are sure to make a statement.",
          price: 39.99
        },
        {
          id: 84,
          name: "Striped Polo T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Timeless striped polo t-shirt for a classic look.",
          long_description: "Add a timeless touch to your wardrobe with this classic striped polo t-shirt. Made from soft and breathable fabric, it features a ribbed collar and button-up placket for a polished finish. Whether you're hitting the golf course or running errands, this polo shirt is sure to become a staple in your rotation.",
          price: 24.99
        },
        {
          id: 85,
          name: "Suede Chelsea Boots",
          type_of_clothing: "Shoes",
          medium_description: "Stylish suede chelsea boots for a polished look.",
          long_description: "Step out in style with these stylish suede chelsea boots. Featuring a sleek suede upper and elastic side panels, they're perfect for adding a touch of sophistication to any outfit. Whether you're dressing them up with trousers or keeping it casual with jeans, these boots are sure to elevate your look.",
          price: 59.99
        },
        {
          id: 86,
          name: "Basic Crewneck T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Essential basic crewneck t-shirt for everyday wear.",
          long_description: "Stock up on essentials with this basic crewneck t-shirt. Made from soft and comfortable fabric, it features a classic crew neckline and relaxed fit for all-day comfort. Whether you're wearing it on its own or layering it under a jacket, this t-shirt is a wardrobe staple.",
          price: 14.99
        },
        {
          id: 87,
          name: "Canvas Espadrille Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Casual canvas espadrille sneakers for laid-back style.",
          long_description: "Stay comfortable and stylish with these casual canvas espadrille sneakers. Featuring a classic espadrille sole and durable canvas upper, they're perfect for everyday wear. Whether you're running errands or hanging out with friends, these sneakers are sure to become a go-to favorite.",
          price: 34.99
        },
        {
          id: 88,
          name: "Graphic Print Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Cool graphic print hoodie for a streetwear vibe.",
          long_description: "Make a statement with this cool graphic print hoodie. Featuring a bold graphic print and soft fleece fabric, it's perfect for adding a touch of urban style to your wardrobe. Whether you're hitting the streets or lounging at home, this hoodie is sure to turn heads wherever you go.",
          price: 49.99
        },
        {
          id: 89,
          name: "Leather Loafers",
          type_of_clothing: "Shoes",
          medium_description: "Classic leather loafers for a refined look.",
          long_description: "Step out in style with these classic leather loafers. Featuring a timeless design and durable construction, they're perfect for adding a touch of sophistication to any outfit. Whether you're dressing them up with trousers or keeping it casual with jeans, these loafers are sure to elevate your look.",
          price: 49.99
        },
        {
          id: 90,
          name: "Striped Long Sleeve T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Stylish striped long sleeve t-shirt for a casual look.",
          long_description: "Stay stylish and comfortable with this striped long sleeve t-shirt. Made from soft and stretchy fabric, it features a classic crew neckline and bold stripes for added style. Whether you're layering it under a jacket or wearing it on its own, this t-shirt is sure to become a go-to favorite.",
          price: 29.99
        },
        {
          id: 91,
          name: "Canvas Boat Shoes",
          type_of_clothing: "Shoes",
          medium_description: "Classic canvas boat shoes for a nautical vibe.",
          long_description: "Set sail in style with these classic canvas boat shoes. Featuring a timeless design and durable construction, they're perfect for adding a touch of nautical charm to any outfit. Whether you're on deck or on shore, these boat shoes are sure to keep you looking and feeling great.",
          price: 39.99
        },
        {
          id: 92,
          name: "Striped Zip-Up Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Sporty striped zip-up hoodie for a laid-back look.",
          long_description: "Stay stylish and comfortable with this sporty striped zip-up hoodie. Made from soft and stretchy fabric, it features a classic zip-up design and bold stripes for added style. Whether you're hitting the gym or lounging at home, this hoodie is sure to become a go-to favorite.",
          price: 39.99
        },
        {
          id: 93,
          name: "Canvas Slip-On Loafers",
          type_of_clothing: "Shoes",
          medium_description: "Casual canvas slip-on loafers for easy wear.",
          long_description: "Keep it casual and comfortable with these canvas slip-on loafers. Featuring a classic slip-on design and durable canvas upper, they're perfect for everyday wear. Whether you're running errands or hanging out with friends, these loafers are sure to become a go-to favorite.",
          price: 24.99
        },
        {
          id: 94,
          name: "Basic V-Neck T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Essential basic v-neck t-shirt for everyday wear.",
          long_description: "Stock up on essentials with this basic v-neck t-shirt. Made from soft and comfortable fabric, it features a classic v-neckline and relaxed fit for all-day comfort. Whether you're wearing it on its own or layering it under a hoodie, this t-shirt is a wardrobe staple.",
          price: 14.99
        },
        {
          id: 95,
          name: "Canvas Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Classic canvas sneakers for everyday style.",
          long_description: "Stay stylish and comfortable with these classic canvas sneakers. Featuring a timeless design and durable construction, they're perfect for everyday wear. Whether you're running errands or hanging out with friends, these sneakers are sure to become a go-to favorite.",
          price: 29.99
        },
        {
          id: 96,
          name: "Striped Pullover Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Casual striped pullover hoodie for relaxed style.",
          long_description: "Stay cozy and stylish with this casual striped pullover hoodie. Made from soft and stretchy fabric, it features a classic pullover design and bold stripes for added flair. Whether you're lounging at home or running errands, this hoodie is sure to keep you comfortable all day long.",
          price: 34.99
        },
        {
          id: 97,
          name: "Canvas High-Top Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Classic canvas high-top sneakers for retro style.",
          long_description: "Step back in time with these classic canvas high-top sneakers. Featuring a retro design and durable construction, they're perfect for adding a touch of nostalgia to your wardrobe. Whether you're pairing them with jeans or a dress, these sneakers are sure to make a statement.",
          price: 34.99
        },
        {
          id: 98,
          name: "Graphic Print Long Sleeve T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Cool graphic print long sleeve t-shirt for a trendy look.",
          long_description: "Make a statement with this cool graphic print long sleeve t-shirt. Featuring a bold graphic print and soft cotton fabric, it's perfect for adding a touch of personality to your wardrobe. Whether you're pairing it with jeans or shorts, this t-shirt is sure to turn heads wherever you go.",
          price: 24.99
        },
        {
          id: 99,
          name: "Canvas Slip-On Shoes",
          type_of_clothing: "Shoes",
          medium_description: "Versatile canvas slip-on shoes for easy wear.",
          long_description: "Keep it casual and comfortable with these versatile canvas slip-on shoes. Featuring a classic slip-on design and durable canvas upper, they're perfect for everyday wear. Whether you're running errands or hanging out with friends, these shoes are sure to become a go-to favorite.",
          price: 19.99
        },
        {
          id: 100,
          name: "Striped Zip-Up Sweatshirt",
          type_of_clothing: "Hoodie",
          medium_description: "Sporty striped zip-up sweatshirt for a laid-back look.",
          long_description: "Stay stylish and comfortable with this sporty striped zip-up sweatshirt. Made from soft and stretchy fabric, it features a classic zip-up design and bold stripes for added style. Whether you're hitting the gym or lounging at home, this sweatshirt is sure to become a go-to favorite.",
          price: 39.99
        }
      ],
      "Current Sales":[
        {
          id: 101,
          name: "Canvas Slip-On Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Classic canvas slip-on sneakers for casual comfort.",
          long_description: "Keep it casual and comfortable with these classic canvas slip-on sneakers. Featuring a simple yet timeless design, they're perfect for everyday wear. Whether you're running errands or hanging out with friends, these sneakers are sure to become a staple in your wardrobe.",
          price: 29.99
        },
        {
          id: 102,
          name: "Graphic Print T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Stylish graphic print t-shirt for a trendy look.",
          long_description: "Make a statement with this stylish graphic print t-shirt. Featuring a bold graphic design, it adds a pop of personality to any outfit. Made from soft and breathable fabric, it's perfect for all-day comfort. Whether you're pairing it with jeans or shorts, this t-shirt is sure to turn heads.",
          price: 19.99
        },
        {
          id: 103,
          name: "Canvas High-Top Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Classic canvas high-top sneakers for retro style.",
          long_description: "Step back in time with these classic canvas high-top sneakers. Featuring a retro design and durable construction, they're perfect for adding a touch of nostalgia to your wardrobe. Whether you're pairing them with jeans or a dress, these sneakers are sure to make a statement.",
          price: 39.99
        },
        {
          id: 104,
          name: "Basic Crewneck T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Essential crewneck t-shirt for everyday wear.",
          long_description: "Stock up on essentials with this basic crewneck t-shirt. Made from soft and comfortable fabric, it features a classic crew neckline and relaxed fit for all-day comfort. Whether you're wearing it on its own or layering it under a hoodie, this t-shirt is a versatile addition to your wardrobe.",
          price: 14.99
        },
        {
          id: 105,
          name: "Canvas Espadrille Shoes",
          type_of_clothing: "Shoes",
          medium_description: "Casual canvas espadrille shoes for laid-back style.",
          long_description: "Keep it casual and comfortable with these canvas espadrille shoes. Featuring a classic espadrille sole and durable canvas upper, they're perfect for everyday wear. Whether you're running errands or hanging out with friends, these shoes are sure to become a go-to favorite.",
          price: 34.99
        },
        {
          id: 106,
          name: "Striped Polo T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Classic striped polo t-shirt for timeless style.",
          long_description: "Add a timeless touch to your wardrobe with this classic striped polo t-shirt. Made from soft and breathable fabric, it features a ribbed collar and button-up placket for a polished finish. Whether you're hitting the golf course or running errands, this polo shirt is sure to become a staple in your rotation.",
          price: 24.99
        },
        {
          id: 107,
          name: "Canvas Slip-On Loafers",
          type_of_clothing: "Shoes",
          medium_description: "Versatile canvas slip-on loafers for easy wear.",
          long_description: "Keep it casual and comfortable with these versatile canvas slip-on loafers. Featuring a classic slip-on design and durable canvas upper, they're perfect for everyday wear. Whether you're running errands or hanging out with friends, these loafers are sure to become a go-to favorite.",
          price: 24.99
        },
        {
          id: 108,
          name: "Graphic Print Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Trendy graphic print hoodie for a streetwear vibe.",
          long_description: "Make a statement with this trendy graphic print hoodie. Featuring a bold graphic design and soft fleece fabric, it adds a touch of urban style to any outfit. Whether you're hitting the streets or lounging at home, this hoodie is sure to turn heads wherever you go.",
          price: 49.99
        },
        {
          id: 109,
          name: "Canvas Boat Shoes",
          type_of_clothing: "Shoes",
          medium_description: "Classic canvas boat shoes for a nautical look.",
          long_description: "Set sail in style with these classic canvas boat shoes. Featuring a timeless design and durable construction, they're perfect for adding a touch of nautical charm to any outfit. Whether you're on deck or on shore, these boat shoes are sure to keep you looking and feeling great.",
          price: 39.99
        },
        {
          id: 110,
          name: "Striped Long Sleeve T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Comfortable striped long sleeve t-shirt for everyday wear.",
          long_description: "Stay stylish and comfortable with this striped long sleeve t-shirt. Made from soft and stretchy fabric, it features a classic crew neckline and bold stripes for added style. Whether you're layering it under a jacket or wearing it on its own, this t-shirt is sure to become a go-to favorite.",
          price: 29.99
        },
        {
          id: 111,
          name: "Canvas Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Versatile canvas sneakers for casual style.",
          long_description: "Keep it casual and comfortable with these versatile canvas sneakers. Featuring a simple yet timeless design, they're perfect for everyday wear. Whether you're running errands or hanging out with friends, these sneakers are sure to become a staple in your wardrobe.",
          price: 29.99
        },
        {
          id: 112,
          name: "Striped Zip-Up Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Sporty striped zip-up hoodie for a laid-back look.",
          long_description: "Stay stylish and comfortable with this sporty striped zip-up hoodie. Made from soft and stretchy fabric, it features a classic zip-up design and bold stripes for added style. Whether you're hitting the gym or lounging at home, this hoodie is sure to become a go-to favorite.",
          price: 39.99
        },
        {
          id: 113,
          name: "Canvas Slip-On Shoes",
          type_of_clothing: "Shoes",
          medium_description: "Classic canvas slip-on shoes for easy wear.",
          long_description: "Keep it casual and comfortable with these classic canvas slip-on shoes. Featuring a simple yet timeless design, they're perfect for everyday wear. Whether you're running errands or hanging out with friends, these shoes are sure to become a staple in your wardrobe.",
          price: 19.99
        },
        {
          id: 114,
          name: "Basic V-Neck T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Essential basic v-neck t-shirt for everyday wear.",
          long_description: "Stock up on essentials with this basic v-neck t-shirt. Made from soft and comfortable fabric, it features a classic v-neckline and relaxed fit for all-day comfort. Whether you're wearing it on its own or layering it under a hoodie, this t-shirt is a versatile addition to your wardrobe.",
          price: 14.99
        },
        {
          id: 115,
          name: "Canvas Slip-On Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Stylish canvas slip-on sneakers for casual comfort.",
          long_description: "Keep it casual and comfortable with these stylish canvas slip-on sneakers. Featuring a modern design and durable construction, they're perfect for everyday wear. Whether you're running errands or hanging out with friends, these sneakers are sure to become a staple in your wardrobe.",
          price: 34.99
        },
        {
          id: 116,
          name: "Striped Pullover Hoodie",
          type_of_clothing: "Hoodie",
          medium_description: "Casual striped pullover hoodie for relaxed style.",
          long_description: "Stay cozy and stylish with this casual striped pullover hoodie. Made from soft and stretchy fabric, it features a classic pullover design and bold stripes for added flair. Whether you're lounging at home or running errands, this hoodie is sure to keep you comfortable all day long.",
          price: 34.99
        },
        {
          id: 117,
          name: "Canvas High-Top Sneakers",
          type_of_clothing: "Shoes",
          medium_description: "Classic canvas high-top sneakers for retro style.",
          long_description: "Step back in time with these classic canvas high-top sneakers. Featuring a retro design and durable construction, they're perfect for adding a touch of nostalgia to your wardrobe. Whether you're pairing them with jeans or a dress, these sneakers are sure to make a statement.",
          price: 34.99
        },
        {
          id: 118,
          name: "Graphic Print Long Sleeve T-Shirt",
          type_of_clothing: "T-Shirt",
          medium_description: "Cool graphic print long sleeve t-shirt for a trendy look.",
          long_description: "Make a statement with this cool graphic print long sleeve t-shirt. Featuring a bold graphic print and soft cotton fabric, it's perfect for adding a touch of personality to your wardrobe. Whether you're pairing it with jeans or shorts, this t-shirt is sure to turn heads wherever you go.",
          price: 24.99
        },
        {
          id: 119,
          name: "Canvas Slip-On Shoes",
          type_of_clothing: "Shoes",
          medium_description: "Versatile canvas slip-on shoes for easy wear.",
          long_description: "Keep it casual and comfortable with these versatile canvas slip-on shoes. Featuring a classic slip-on design and durable canvas upper, they're perfect for everyday wear. Whether you're running errands or hanging out with friends, these shoes are sure to become a go-to favorite.",
          price: 19.99
        },
        {
          id: 120,
          name: "Striped Zip-Up Sweatshirt",
          type_of_clothing: "Hoodie",
          medium_description: "Sporty striped zip-up sweatshirt for a laid-back look.",
          long_description: "Stay stylish and comfortable with this sporty striped zip-up sweatshirt. Made from soft and stretchy fabric, it features a classic zip-up design and bold stripes for added style. Whether you're hitting the gym or lounging at home, this sweatshirt is sure to become a go-to favorite.",
          price: 39.99
        }
      ]
      
}
export default fetchProductList = (listType) => {
    return productListData[listType];
}