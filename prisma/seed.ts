import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.plan.upsert({
    where: { planId: 1 },
    update: {},
    create: {
      planId: 1,
      name: 'Free',
      bookLimit: 10,
      monthlyAiLimit: 5,
      price: 0,
    },
  });
  await prisma.plan.upsert({
    where: { planId: 2 },
    update: {},
    create: {
      planId: 2,
      name: 'Premium',
      bookLimit: null,
      monthlyAiLimit: null,
      price: 9.99,
    },
  });
  console.log('Default plans inserted: Free, Premium.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
