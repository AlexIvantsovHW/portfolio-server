/* import { Test, TestingModule } from '@nestjs/testing';
import { FeedbacksController } from './feedbacks.controller';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

describe('FeedbacksController', () => {
  let feedbacksController: FeedbacksController;
  let feedbacksService: FeedbacksService;

  // ✅ Заменили mockRepository на mockFeedbacksService, т.к. мокаем сервис, а не prisma напрямую
  const mockFeedbacksService = {
    findAll: jest.fn(),
    createFeedback: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedbacksController],
      providers: [
        {
          provide: FeedbacksService, // ✅ Правильно подставили мок-сервис вместо попытки использовать prisma.feedbacks
          useValue: mockFeedbacksService,
        },
      ],
    }).compile();

    feedbacksController = module.get<FeedbacksController>(FeedbacksController);
    feedbacksService = module.get<FeedbacksService>(FeedbacksService); // ✅ Получаем замоканный FeedbacksService
  });

  afterEach(() => {
    jest.clearAllMocks(); // ✅ Очищаем моки после каждого теста, чтобы избежать конфликтов
  });

  describe('findAll', () => {
    it('should return an array of feedbacks', async () => {
      const result = [
        {
          id: 1,
          name: 'test name',
          date: new Date('2025-01-01'),
          description: 'test description',
          position: 'test position',
          companyTitle: 'test company Title',
          logo: 'test logo',
        },
      ];

      mockFeedbacksService.findAll.mockResolvedValue(result); // ✅ Мокаем метод findAll у сервиса

      const data = await feedbacksController.findAll(); // ✅ Тестируем метод контроллера
      expect(data).toBe(result);
      expect(mockFeedbacksService.findAll).toHaveBeenCalled(); // ✅ Проверяем вызов
    });
  });

  describe('createFeedback', () => {
    it('should create a new feedback', async () => {
      const createFeedbackDto: CreateFeedbackDto = {
        name: 'test name',
        date: new Date('2024-12-31'),
        description: 'test description',
        position: 'test position',
        companyTitle: 'test company title',
        logo: 'https://test.com',
      };
      const createdFeedback = { id: 2, ...createFeedbackDto };

      mockFeedbacksService.createFeedback.mockResolvedValue(createdFeedback); // ✅ Мокаем метод createFeedback

      const result = await feedbacksController.create(createFeedbackDto); // ✅ Тестируем метод контроллера
      expect(result).toEqual(createdFeedback);
      expect(mockFeedbacksService.createFeedback).toHaveBeenCalledWith(
        createFeedbackDto,
      ); // ✅ Проверяем аргумент вызова
    });
  });
});
 */
