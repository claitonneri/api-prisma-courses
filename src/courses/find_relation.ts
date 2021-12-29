import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const courses = await prisma.courses.findMany({
    include: {
      teacher: true
    }
  })

  console.log(courses)
}

main()