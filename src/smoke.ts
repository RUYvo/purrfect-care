import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function run() {
  const pet = await prisma.pet.create({
    data: {
      name: 'Frajola',
      age: 1,
      type: 'gato',
      status: 'AVAILABLE',
      registrationDate: new Date()
    }
  })
  console.log('OK ->', pet)
}
run().finally(() => prisma.$disconnect())
