import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const userIdArg = process.argv[2];
  const planSlug = process.argv[3];

  if (!userIdArg || !planSlug) {
    console.error(
      'Usage: ts-node --project tsconfig.seed.json prisma/set-user-plan.ts <userId> <planSlug>',
    );
    process.exit(1);
  }

  const userId = Number(userIdArg);
  if (Number.isNaN(userId)) {
    console.error('userId must be a number');
    process.exit(1);
  }

  const plan = await prisma.plan.findUnique({
    where: { slug: planSlug },
  });

  if (!plan) {
    console.error(`Plan with slug "${planSlug}" not found`);
    process.exit(1);
  }

  await prisma.user.update({
    where: { userId },
    data: { planId: plan.planId },
  });

  console.log(`User ${userId} updated to plan "${planSlug}" (id=${plan.planId}).`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

