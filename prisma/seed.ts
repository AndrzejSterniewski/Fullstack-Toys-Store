import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
        id: '7fefb90e-73a4-4406-bf30-d97daa5e1110',
        name: 'Pluszowy miś',
        price: 40,
        description: 'Najlepszy przyjaciel każdego malucha.',
        category: 'Teddy bears',
        main_img: 'teddy.jpg',
      },
      {
        id: '7fefb90e-73a4-4406-bf30-d97daa5e1111',
        name: 'Lego Star Wars 1111',
        price: 69,
        description: 'Battlepack żołnierzy klonów 501 legionu republiki.',
        category: 'Lego',
        main_img: 'lego-501st-legion.png',
    },
      {
        id: '7fefb90e-73a4-4406-bf30-d97daa5e1112',
        name: 'Gra planszowa Monopoly',
        price: 120,
        description: 'Legendarna gra planszowa sprzedana na świecie w milionach egzemplarzy',
        category: 'Board games',
        main_img: 'monopoly.jpg'
      },
      {
        id: '7fefb90e-73a4-4406-bf30-d97daa5e1113',
        name: 'Gra planszowa Talisman',
        price: 150,
        description: 'Legendarna gra przygodowa docenienona przez wielu graczy.',
        category: 'Board games',
        main_img: 'talisman.jpg',
      },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}

seed();