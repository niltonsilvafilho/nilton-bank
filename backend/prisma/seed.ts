/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const earningsCategory = await prisma.category.create({
      data: {
        name: "Ganhos",
        slug: "earnings",
      },
    });

    const expensesCategory = await prisma.category.create({
      data: {
        name: "Despesas",
        slug: "expenses",
      },
    });

    const balanceCategory = await prisma.category.create({
      data: {
        name: "Balanço",
        slug: "balance",
      },
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
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
