// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthService } from './auth.service';
//
// describe('AuthService', () => {
//   let service: AuthService;
//
//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [AuthService],
//     }).compile();
//
//     service = module.get<AuthService>(AuthService);
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
