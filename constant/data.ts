import {
  witcher,
  cyberpunk,
  elden,
  reddead,
  hades,
  stardew,
  among,
  darksoul3,
  cult,
  acval,
  hollowknight,
  nomansky,
  starfield,
  baldur,
  spider,
  alanwake2,
  supermario,
  lotf,
  mortal,
  acmirage,
  forza,
  avatar,
  payday3,
  cities2,
} from "./image";

export const special_deal = [
  {
    id: 1,
    name: "The Witcher 3: Wild Hunt",
    price: 39.99,
    discount_price: 19.99,
    percent_discount: 50,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/witcher.jpg",
  },
  {
    id: 2,
    name: "Cyberpunk 2077",
    price: 59.99,
    discount_price: 29.99,
    percent_discount: 50,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/cyberpunk.jpg"
  },
  {
    id: 3,
    name: "Elden Ring",
    price: 59.99,
    discount_price: 49.99,
    percent_discount: 16,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/elden.jpg",
  },
  {
    id: 4,
    name: "Red Dead Redemption 2",
    price: 59.99,
    discount_price: 29.99,
    percent_discount: 50,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/reddead.jpg",
  },
  {
    id: 5,
    name: "Hades",
    price: 24.99,
    discount_price: 12.49,
    percent_discount: 50,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/hades.jpg",
  },
  {
    id: 6,
    name: "Stardew Valley",
    price: 14.99,
    discount_price: 9.99,
    percent_discount: 33,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/stardew.jpg",
  },
  {
    id: 7,
    name: "Among Us",
    price: 4.99,
    discount_price: 3.99,
    percent_discount: 20,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/among.jpg",
  },
  {
    id: 8,
    name: "Dark Souls III",
    price: 59.99,
    discount_price: 14.99,
    percent_discount: 75,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/darksoul3.jpg",
  },
  {
    id: 9,
    name: "Cult Of The Lamb",
    price: 24.99,
    discount_price: 12.99,
    percent_discount: 50,
    image:"https://valimar-image.s3.ap-southeast-2.amazonaws.com/cult.jpg",
  },
  {
    id: 10,
    name: "Assassin's Creed Valhalla",
    price: 59.99,
    discount_price: 39.99,
    percent_discount: 33,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/acvalhalla.jpg",
  },
  {
    id: 11,
    name: "Hollow Knight",
    price: 14.99,
    discount_price: 7.49,
    percent_discount: 50,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/hollowknight.jpg",
  },
  {
    id: 12,
    name: "No Man's Sky",
    price: 59.99,
    discount_price: 29.99,
    percent_discount: 50,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/nomansky.jpg",
  },
];

export const new_releases = [
  {
    id: 1,
    name: "Starfield",
    price: 69.99,
    discount_price: 59.99,
    percent_discount: 14,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/starfield.jpg"
  },
  {
    id: 2,
    name: "Baldur's Gate 3",
    price: 59.99,
    discount_price: 49.99,
    percent_discount: 16,
    is_Discount: true,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/baldurgate3.jpg"
  },
  {
    id: 3,
    name: "Spider-Man 2",
    price: 69.99,
    discount_price: 0,
    percent_discount: 0,
    is_Discount: false,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/spiderman2.jpg"
  },
  {
    id: 4,
    name: "Alan Wake 2",
    price: 59.99,
    discount_price: 49.99,
    percent_discount: 16,
    is_Discount: true,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/alanwake2.jpg"
  },
  {
    id: 5,
    name: "Super Mario Bros. Wonder",
    price: 59.99,
    discount_price: 0,
    percent_discount: 0,
    is_Discount: false,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/supermariobros.jpg",
  },
  {
    id: 6,
    name: "Lords of the Fallen",
    price: 69.99,
    discount_price: 54.99,
    percent_discount: 21,
    is_Discount: true,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/lordsofthefallen.jpg",
  },
  {
    id: 7,
    name: "Mortal Kombat 1",
    price: 69.99,
    discount_price: 0,
    percent_discount: 0,
    is_Discount: false,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/mortalkombat1.jpg",
  },
  {
    id: 8,
    name: "Assassin's Creed Mirage",
    price: 49.99,
    discount_price: 39.99,
    percent_discount: 20,
    is_Discount: true,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/acmirage.jpg",
  },
  {
    id: 9,
    name: "Forza Motorsport",
    price: 59.99,
    discount_price: 0,
    percent_discount: 0,
    is_Discount: false,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/forzamotor.jpg",
  },
  {
    id: 10,
    name: "Avatar: Frontiers of Pandora",
    price: 69.99,
    discount_price: 64.99,
    percent_discount: 7,
    is_Discount: true,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/avatar.jpg",
  },
  {
    id: 11,
    name: "Payday 3",
    price: 39.99,
    discount_price: 29.99,
    percent_discount: 25,
    is_Discount: true,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/payday3.jpg",
  },
  {
    id: 12,
    name: "Cities: Skylines II",
    price: 49.99,
    discount_price: 0,
    percent_discount: 0,
    is_Discount: false,
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/cities2.jpg",
  },
];

export const features1 = ["Access to all content"];
export const features2 = [
  "Access to all content",
  "10% discount",
  "No delivery fee",
  "Priority customer support",
  "Special effect",
];
export const features3 = [
  "Access to all content",
  "20% discount",
  "No delivery fee",
  "Priority customer support",
  "Special effect",
  "Refund in 7 days",
];
export const features4 = [
  "Access to all content",
  "30% discount, 35% for digital",
  "No delivery fee",
  "Priority customer support",
  "Special effect",
  "Refund in 14 days",
];

export const subcategories = [
  {
    id: 1,
    name: "New Release",
    href: "/category/new-release",
    description: "Explore the latest games released this month.",
  },
  {
    id: 2,
    name: "Upcoming",
    href: "/category/upcoming",
    description: "Discover upcoming games and get ready for the launch.",
  },
  {
    id: 3,
    name: "Best Sale",
    href: "/category/best-sale",
    description: "Find the best deals and discounts on popular games.",
  },
  {
    id: 4,
    name: "Action",
    href: "/category/action",
    description: "Dive into the thrill of high-paced action games.",
  },
  {
    id: 5,
    name: "Horror",
    href: "/category/horror",
    description:
      "Experience spine-chilling horror games that will keep you on edge.",
  },
  {
    id: 6,
    name: "Adventure",
    href: "/category/adventure",
    description: "Embark on epic journeys and immersive adventures.",
  },
  {
    id: 7,
    name: "JRPG",
    href: "/category/jrpg",
    description: "Enjoy the best of Japanese RPG games with deep storytelling.",
  },
  {
    id: 8,
    name: "Music",
    href: "/category/music",
    description: "Play music-inspired games and test your rhythm skills.",
  },
  {
    id: 9,
    name: "Puzzle",
    href: "/category/puzzle",
    description: "Challenge your mind with creative and engaging puzzle games.",
  },
  {
    id: 10,
    name: "Space",
    href: "/category/space",
    description: "Explore the vast universe with exciting space-themed games.",
  },
  {
    id: 11,
    name: "Simulation",
    href: "/category/simulation",
    description: "Experience realistic simulation games that mimic real life.",
  },
  {
    id: 12,
    name: "Dating",
    href: "/category/dating",
    description: "Discover interactive dating simulation games.",
  },
  {
    id: 13,
    name: "Fighting",
    href: "/category/fighting",
    description: "Engage in intense battles and showcase your fighting skills.",
  },
  {
    id: 14,
    name: "Racing",
    href: "/category/racing",
    description: "Feel the adrenaline rush with high-speed racing games.",
  },
  {
    id: 15,
    name: "Strategy",
    href: "/category/strategy",
    description: "Test your tactical skills with challenging strategy games.",
  },
  {
    id: 16,
    name: "Turn-Base",
    href: "/category/turn-base",
    description: "Plan and conquer with classic turn-based gameplay.",
  },
  {
    id: 17,
    name: "Building",
    href: "/category/building",
    description: "Create and manage your world with exciting building games.",
  },
];

export const games = [
  {
    name: "Marvel Rivals",
    link: "https://store.steampowered.com/app/2767030/Marvel_Rivals/?snr=1_7_7_240_150_1",
    release_date: "Dec 5, 2024",
    price: "Free",
    discount_percent: null,
    game_id: "2767030",
    genre: "Action",
    image_url:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2767030/header.jpg",
  },
  {
    name: "Counter-Strike 2",
    link: "https://store.steampowered.com/app/730/CounterStrike_2/?snr=1_7_7_240_150_1",
    release_date: "Aug 21, 2012",
    price: "Free",
    discount_percent: null,
    game_id: "730",
    genre: "Action",
    image_url:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
  },
  {
    name: "Path of Exile 2",
    link: "https://store.steampowered.com/app/2694490/Path_of_Exile_2/?snr=1_7_7_240_150_1",
    release_date: "Dec 6, 2024",
    price: "$29.99",
    discount_percent: null,
    game_id: "2694490",
    genre: "Action",
    image_url:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2694490/header.jpg",
  },
  {
    name: "Warframe",
    link: "https://store.steampowered.com/app/230410/Warframe/?snr=1_7_7_240_150_1",
    release_date: "Mar 25, 2013",
    price: "Free",
    discount_percent: null,
    game_id: "230410",
    genre: "Action",
    image_url:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/230410/header.jpg",
  },
  {
    name: "Ready or Not",
    link: "https://store.steampowered.com/app/1144200/Ready_or_Not/?snr=1_7_7_240_150_1",
    release_date: "Dec 13, 2023",
    price: "$29.99",
    discount_percent: "-40%",
    game_id: "1144200",
    genre: "Action",
    image_url:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1144200/header.jpg",
  },
  {
    name: "HELLDIVERS™ 2",
    link: "https://store.steampowered.com/app/553850/HELLDIVERS_2/?snr=1_7_7_240_150_1",
    release_date: "Feb 8, 2024",
    price: "$39.99",
    discount_percent: null,
    game_id: "553850",
    genre: "Action",
    image_url:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg",
  },
  {
    name: "Dota 2",
    link: "https://store.steampowered.com/app/570/Dota_2/?snr=1_7_7_240_150_1",
    release_date: "Jul 9, 2013",
    price: "Free",
    discount_percent: null,
    game_id: "570",
    genre: "Action",
    image_url:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/570/header.jpg",
  },
  {
    name: "War Thunder",
    link: "https://store.steampowered.com/app/236390/War_Thunder/?snr=1_7_7_240_150_1",
    release_date: "Aug 15, 2013",
    price: "Free",
    discount_percent: null,
    game_id: "236390",
    genre: "Action",
    image_url:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/236390/header.jpg",
  },
  {
    name: "Grand Theft Auto V",
    link: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/?snr=1_7_7_240_150_1",
    release_date: "Apr 13, 2015",
    price: "$29.98",
    discount_percent: null,
    game_id: "271590",
    genre: "Action",
    image_url:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
  },
  {
    name: "ELDEN RING",
    link: "https://store.steampowered.com/app/1245620/ELDEN_RING/?snr=1_7_7_240_150_1",
    release_date: "Feb 24, 2022",
    price: "$59.99",
    discount_percent: null,
    game_id: "1245620",
    genre: "Action",
    image_url:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
  },
];

export const filterMenu01 = [
  {
    name: "New Release",
    value: "newrelease",
  },
  {
    name: "Discount",
    value: "discount",
  }
]

export const filterMenu02 = [
  {
    name:"Action",
    value: "action",
  },
  {
    name:"Horror",
    value: "horror",
  },
  {
    name:"Adventure",
    value: "adventure",
  },
  {
    name:"JRPG",
    value: "jrpg",
  },
  {
    name:"Music",
    value: "music",
  },
  {
    name:"Puzzle",
    value: "puzzle",
  },
  {
    name:"Space",
    value: "space",
  },
  {
    name:"Simulation",
    value: "simulation",
  },
  {
    name:"Dating",
    value: "dating",
  },
  {
    name:"Fighting",
    value: "fighting",
  },
  {
    name:"Racing",
    value: "racing",
  },
  {
    name:"Strategy",
    value: "strategy",
  },
  {
    name:"Turn-Base",
    value: "turn-base",
  },
  {
    name:"Building",
    value: "building",
  }
]



