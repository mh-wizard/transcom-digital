import prisma from "./prisma";

async function seed() {

  const admin = await prisma.admin.create({
    data: {
      username: 'admin',
      firstName: "Mahadi",
      lastName: "Hasan",
      email: "admin@mail.com",
      role: "MAIN",
      password: "admin"
    }
  })

  // Create users
  const user1 = await prisma.user.create({
    data: {
      phone: '1234567890'
    },
  });

  const user2 = await prisma.user.create({
    data: {
      phone: '9876543210',
    },
  });

  // Create categories
  const category1 = await prisma.category.create({
    data: {
      name: 'Electronics',
      popularity: 10,
    },
  });


  const brand1 = await prisma.brand.create({
    data: {
      name: 'Brand Electronics',
      popularity: 8,
      categoryId: category1.id,
    },
  });


  // Create products for each model
  const product1 = await prisma.product.createMany({
    data: [
      {
        name: 'Hitachi Stylish Bottom Freezer | R-BG410P6PBX(GBK) | 366L',
        sku: 'O911350',
        model: "R-BG410P6PBX",
        img: 'https://uploadthing.com/f/6c0c8116-a7d9-414d-84d0-8d956e1cc6e0_image.webp',
        price: 107500,
        features: ['Flat Glass Door', 'Touch Screen Controller', "Nano Titanium Filter", "Powerful Cooling"],
        stockAvailable: true,
        discount: 3.72,
        emiDuration: 6,
        exchangeOffer: 2000,
        offerValidityTill: "May 31, 2023)",
        warrentyOn: 'Service-24 M, Parts-12 M, Compressor-120 M',
        warrentyType: 'Limited',
      }, {
        name: 'Hitachi Stylish Bottom Freezer | R-BG410P6PBX(GBK) | 366L',
        sku: 'O911350',
        model: "R-BG410P6PBX",
        img: 'https://uploadthing.com/f/6c0c8116-a7d9-414d-84d0-8d956e1cc6e0_image.webp',
        price: 107500,
        features: ['Flat Glass Door', 'Touch Screen Controller', "Nano Titanium Filter", "Powerful Cooling"],
        stockAvailable: true,
        discount: 3.72,
        emiDuration: 6,
        exchangeOffer: 2000,
        offerValidityTill: "May 31, 2023)",
        warrentyOn: 'Service-24 M, Parts-12 M, Compressor-120 M',
        warrentyType: 'Limited',
      }, {
        name: 'Hitachi Stylish Bottom Freezer | R-BG410P6PBX(GBK) | 366L',
        sku: 'O911350',
        model: "R-BG410P6PBX",
        img: 'https://uploadthing.com/f/6c0c8116-a7d9-414d-84d0-8d956e1cc6e0_image.webp',
        price: 107500,
        features: ['Flat Glass Door', 'Touch Screen Controller', "Nano Titanium Filter", "Powerful Cooling"],
        stockAvailable: true,
        discount: 3.72,
        emiDuration: 6,
        exchangeOffer: 2000,
        offerValidityTill: "May 31, 2023)",
        warrentyOn: 'Service-24 M, Parts-12 M, Compressor-120 M',
        warrentyType: 'Limited',
      }, {
        name: 'Hitachi Stylish Bottom Freezer | R-BG410P6PBX(GBK) | 366L',
        sku: 'O911350',
        model: "R-BG410P6PBX",
        img: 'https://uploadthing.com/f/6c0c8116-a7d9-414d-84d0-8d956e1cc6e0_image.webp',
        price: 107500,
        features: ['Flat Glass Door', 'Touch Screen Controller', "Nano Titanium Filter", "Powerful Cooling"],
        stockAvailable: true,
        discount: 3.72,
        emiDuration: 6,
        exchangeOffer: 2000,
        offerValidityTill: "May 31, 2023)",
        warrentyOn: 'Service-24 M, Parts-12 M, Compressor-120 M',
        warrentyType: 'Limited',
      }, {
        name: 'Hitachi Stylish Bottom Freezer | R-BG410P6PBX(GBK) | 366L',
        sku: 'O911350',
        model: "R-BG410P6PBX",
        img: 'https://uploadthing.com/f/6c0c8116-a7d9-414d-84d0-8d956e1cc6e0_image.webp',
        price: 107500,
        features: ['Flat Glass Door', 'Touch Screen Controller', "Nano Titanium Filter", "Powerful Cooling"],
        stockAvailable: true,
        discount: 3.72,
        emiDuration: 6,
        exchangeOffer: 2000,
        offerValidityTill: "May 31, 2023)",
        warrentyOn: 'Service-24 M, Parts-12 M, Compressor-120 M',
        warrentyType: 'Limited',
      }, {
        name: 'Hitachi Stylish Bottom Freezer | R-BG410P6PBX(GBK) | 366L',
        sku: 'O911350',
        model: "R-BG410P6PBX",
        img: 'https://uploadthing.com/f/6c0c8116-a7d9-414d-84d0-8d956e1cc6e0_image.webp',
        price: 107500,
        features: ['Flat Glass Door', 'Touch Screen Controller', "Nano Titanium Filter", "Powerful Cooling"],
        stockAvailable: true,
        discount: 3.72,
        emiDuration: 6,
        exchangeOffer: 2000,
        offerValidityTill: "May 31, 2023)",
        warrentyOn: 'Service-24 M, Parts-12 M, Compressor-120 M',
        warrentyType: 'Limited',
      }, {
        name: 'Hitachi Stylish Bottom Freezer | R-BG410P6PBX(GBK) | 366L',
        sku: 'O911350',
        model: "R-BG410P6PBX",
        img: 'https://uploadthing.com/f/6c0c8116-a7d9-414d-84d0-8d956e1cc6e0_image.webp',
        price: 107500,
        features: ['Flat Glass Door', 'Touch Screen Controller', "Nano Titanium Filter", "Powerful Cooling"],
        stockAvailable: true,
        discount: 3.72,
        emiDuration: 6,
        exchangeOffer: 2000,
        offerValidityTill: "May 31, 2023)",
        warrentyOn: 'Service-24 M, Parts-12 M, Compressor-120 M',
        warrentyType: 'Limited',
      },
    ]
  });


  console.log('Demo data seeding complete.');
}

seed()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
