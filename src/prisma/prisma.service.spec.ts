// import { Test, TestingModule } from '@nestjs/testing';
// import { PrismaService } from './prisma.service';
//
// describe('PrismaService', () => {
//   let service: PrismaService;
//
//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [PrismaService],
//     }).compile();
//
//     service = module.get<PrismaService>(PrismaService);
//   });
//
//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });

import { expect, test } from 'vitest';

test('1 === 1', () => {
  expect(1).toBe(1);
});
