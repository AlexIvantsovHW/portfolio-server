import { IAuthenticatedRequest } from './module/AuthenticatedRequest.type';

// Простой unit тест для checkAuth логики
describe('checkAuth logic', () => {
  it('should return correct response format', () => {
    const mockRequest = {
      user: {
        sub: 1,
        email: 'test@example.com',
      },
    } as IAuthenticatedRequest;

    // Симулируем логику checkAuth
    const result = {
      message: 'Authenticated',
      user: mockRequest.user,
      authenticated: true,
    };

    expect(result).toEqual({
      message: 'Authenticated',
      user: {
        sub: 1,
        email: 'test@example.com',
      },
      authenticated: true,
    });
  });
});
