const items = [
  {
    name: "coffee",
    price: 40,
    category: "drinks",
    image: "https://picfiles.alphacoders.com/422/422931.jpg",
  },
  {
    name: "ice-cream",
    price: 45,
    category: "drinks",
    image: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20993.png",
  },
  {
    name: "ice cream",
    price: 50,
    category: "drinks",
    image: "https://th.bing.com/th/id/OIP.ZysvxH_f022B3eazSpah_AHaKe?rs=1&pid=ImgDetMain",
  },
  {
    name: "vanilla cone",
    price: 40,
    category: "drinks",
    image: "https://images.fineartamerica.com/images-medium-large-5/large-vanilla-ice-cream-and-cone-kim-haddon-photography.jpg",
  },
  {
    name: "strawberry ice cream",
    price: 100,
    category: "drinks",
    image: "https://inspirationseek.com/wp-content/uploads/2016/02/Tasteful-Ice-Cream-Pictures.jpg",
  },
  {
    name: "coca-cola",
    price: 70,
    category: "drinks",
    image: "https://th.bing.com/th/id/R.29cd89f20d8a4a0c4c4858b52c8371b8?rik=ck494FBWw1hFjw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31700000%2fIcy-Cold-Coke-random-31711993-270-270.jpg&ehk=oYnE98Abn8E6cNkwop15p%2fFflT%2fL2CX5EcG8S1Ru0HE%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "cold-coffee",
    price: 120,
    category: "drinks",
    image: "https://mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream.jpg",
  },
  
  {
    name: "lomon-soda",
    price: 25,
    category: "drinks",
    image: "https://th.bing.com/th/id/OIP.cVMtYTYlLDBip7jocx-LQAHaF7?rs=1&pid=ImgDetMain",
  },
  {
    name: "cocktails",
    price: 200,
    category: "drinks",
    image: "https://bluewater.co.uk/sites/bluewater/files/images/spotlights/cocktails-2400x1200_0.gif",
  },
  {
    name: "juice",
    price: 50,
    category: "drinks",
    image: "https://th.bing.com/th/id/R.a0eb4e6b84f80571eaccae5438686c15?rik=0AVA%2ba3QWg4mJA&riu=http%3a%2f%2fesq.h-cdn.co%2fassets%2f15%2f18%2f1430408520-dmg-cosmopolitan-cocktail-001.jpg&ehk=kKmBqZKvd9U0WZfB5ZDZdKPNluqPhYw3TeV3z9bXbRY%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Chicken Biryani",
    price: 130,
    category: "rice",
    image:
      "https://th.bing.com/th/id/R.09d7570ca347e320f19925b4aa057c2e?rik=jpTwTjtLLsd%2fKQ&riu=http%3a%2f%2fwww.bombaycafeboca.com%2fwp-content%2fuploads%2f2016%2f12%2f28978-chicken-biryani.jpg&ehk=pDqNcMSLbccL6T0AK0YSKoUHgdjiCuiNJ%2boG0dxsem4%3d&risl=&pid=ImgRaw&r=0",
  },
  
  {
    name: "Pot chicken Biryani",
    price: 140,
    category: "rice",
    image:
      "https://spicecravings.com/wp-content/uploads/2021/04/Chicken-Biryani-8.jpg",
  },
  {
    name: "Mutton Biryani",
    price: 150,
    category: "rice",
    image:
      "https://i.pinimg.com/originals/5e/23/fa/5e23fa7402d8d37912e75b66e086148f.jpg",
  },
  {
    name: "Paneer Biryani",
    price: 120,
    category: "rice",
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Paneer-Biryani-Instant-Pot-400x606.jpg",
  },
  {
    name: "Mushroom Biryani",
    price: 120,
    category: "rice",
    image:
      "https://th.bing.com/th/id/R.36e5544e28e244363cdac820ebafaaab?rik=zcaf%2bVj8zpFQIQ&riu=http%3a%2f%2fwww.ticklingpalates.com%2fwp-content%2fuploads%2f2016%2f05%2fMushroom-Biryani-Recipe.jpg&ehk=XmoT1VBIpHyScY5w681UYXwQwZ%2fITcI%2fP9NeYJU1g6E%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "veg Biryani",
    price: 70,
    category: "rice",
    image:
      "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2017/09/Veg-Biryani-in-Pressure-Cooker-4.jpg?resize=683%2C1024&ssl=1",
  },
  {
    name: "Pulao",
    price: 75,
    category: "rice",
    image:
      "https://thespicemess.com/wp-content/uploads/2021/01/Vegetable-Pulao-21-feature-1280x904.jpg",
  },
  {
    name: "veg Pulao",
    price: 70,
    category: "rice",
    image:
      "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/pulao-indian-rice-4.jpg",
  },
  {
    name: "Egg Biryani",
    price: 80,
    category: "rice",
    image:
      "https://www.pavaniskitchen.com/wp-content/uploads/2021/04/egg-biryani-recipe-1024x1024.jpg",
  },
  {
    name: "Chicken chawmin",
    price: 50,
    category: "noodles",
    image: "https://drivemehungry.com/wp-content/uploads/2020/08/chicken-chow-mein-2.jpg",
  },
  {
    name: "Egg Chawmein",
    price: 5,
    category: "noodles",
    image:
      "https://i.ytimg.com/vi/iSz1GwFcRYk/maxresdefault.jpg",
  },
  {
    name: "Manchurian chowmein",
    price: 5,
    category: "noodles",
    image:
      "https://myfoodstory.com/wp-content/uploads/2016/03/one-pan-veg-noodle-and-manchurian-stir-fry-indo-chinese-recipe.1024x1024-4.jpg?fit=1200,9999",
  },
  {
    name: "Veg chowmein",
    price: 5,
    category: "noodles",
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/veg-chowmein-min-scaled.jpg?v=1620296035",
  },
];
module.exports = items;
