import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.plan.upsert({
    where: { planId: 1 },
    update: {},
    create: {
      planId: 1,
      name: 'Free',
      slug: 'free',
      description: 'Plan gratuito con límite de libros e IA mensual.',
      bookLimit: 100,
      monthlyAiLimit: 5,
      isPaid: false,
      price: 0,
    } as any,
  });
  await prisma.plan.upsert({
    where: { planId: 2 },
    update: {},
    create: {
      planId: 2,
      name: 'Premium',
      slug: 'premium',
      description: 'Plan de pago con límites ampliados o sin límites.',
      bookLimit: null,
      monthlyAiLimit: null,
      isPaid: true,
      price: 9.99,
    } as any,
  });
  await prisma.plan.upsert({
    where: { planId: 3 },
    update: {},
    create: {
      planId: 3,
      name: 'De por vida',
      slug: 'lifetime',
      description: 'Pago único, acceso de por vida sin límites de libros ni IA.',
      bookLimit: null,
      monthlyAiLimit: null,
      isPaid: true,
      price: 199.0,
    } as any,
  });
  console.log('Default plans inserted: Free, Premium, Lifetime.');
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
