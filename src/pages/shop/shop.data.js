const SHOP_DATA = [
  {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202751M140036_3.jpg",
        price: 25,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202899M140058_3.jpg",
        price: 18,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202381F014089_3.jpg",
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202607F014074_3.jpg",
        price: 25,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202055F015044_3.jpg",
        price: 18,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202261F016001_3.jpg",
        price: 14,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202607F014075_3.jpg",
        price: 18,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202376F016393_3.jpg",
        price: 14,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202111F014021_3.jpg",
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202476M236120_1.jpg",
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202739M236025_1.jpg",
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202688M255015_1.jpg",
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202799M236018_1.jpg",
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202266M236010_1.jpg",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202381M237264_1.jpg",
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202349M228009_1.jpg",
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202342M237031_1.jpg",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202168M180019_2.jpg",
        price: 125,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202342M177065_2.jpg",
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202342F063087_2.jpg",
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202279F057005_2.jpg",
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202111F061063_2.jpg",
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202214F069003_2.jpg",
        price: 25,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202188F069101_2.jpg",
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202370F090009_2.jpg",
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202553F092229_2.jpg",
        price: 80,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202126F092038_2.jpg",
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202607F090335_2.jpgg",
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202967F090032_2.jpg",
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202161M212121_2.jpg",
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202168M213029_2.jpg",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202342M213075_2.jpg",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202381M213015_2.jpg",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202037M213025_2.jpg",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202970M213035_2.jpg",
        price: 25,
      },
    ],
  },
]

export default SHOP_DATA
