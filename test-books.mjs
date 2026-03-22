import { PrismaClient } from './src/generated/prisma/default.js';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'postgresql://postgres.dtjlwsywqxykpisfjuhh:1602003139Freya!@aws-1-us-east-2.pooler.supabase.com:5432/postgres'
    }
  }
});

async function test() {
  const user = await prisma.user.findFirst({ select: { userId: true } });
  console.log('Usuario:', user?.userId);
  
  if (!user) { console.log('No hay usuarios'); return; }
  
  try {
    const b1 = await prisma.book.create({
      data: { userId: user.userId, isbn: '0000000TEST1', title: 'Test 1', readingStatus: 'pending' }
    });
    console.log('Libro 1 OK id:', b1.bookId);
    
    const b2 = await prisma.book.create({
      data: { userId: user.userId, isbn: '0000000TEST1', title: 'Test 2 mismo isbn', readingStatus: 'pending' }
    });
    console.log('Libro 2 mismo isbn OK:', b2.bookId, '-> NO hay restriccion unica en isbn');
    
    await prisma.book.deleteMany({ where: { isbn: '0000000TEST1' } });
    console.log('Limpieza OK');
  } catch(e) {
    console.error('ERROR al crear:', e.code, '-', e.message?.substring(0, 500));
    await prisma.book.deleteMany({ where: { isbn: '0000000TEST1' } }).catch(() => {});
  }
}
test().finally(() => prisma.$disconnect());
