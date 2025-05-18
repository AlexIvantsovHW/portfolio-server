import { IsNumber, IsString, Length, Min } from 'class-validator';
import { IPerson } from '../model/personal.type';

export class CreatePersonalDto implements IPerson {
  readonly id: number;
  @IsString({ message: ' User name is always string!' })
  @Length(2, 30, {
    message: 'Name  should be at least 2 chars and no more than 30 chars',
  })
  readonly username: string;
  @IsString({ message: ' Surname is always string!' })
  @Length(2, 30, {
    message: 'Surname  should be at least 2 chars and no more than 30 chars',
  })
  readonly surname: string;
  @IsNumber({}, { message: 'Age  must be a number!' })
  @Min(1)
  readonly age: number;

  @IsString({ message: ' City is always string!' })
  @Length(2, 30, {
    message: 'City  should be at least 2 chars and no more than 30 chars',
  })
  readonly city: string;

  @IsString({ message: ' City is always string!' })
  @Length(2, 30, {
    message: 'City  should be at least 2 chars and no more than 30 chars',
  })
  readonly country: string;

  @IsNumber({}, { message: 'Years of experince  must be a number!' })
  @Min(1)
  readonly yearExperince: number;

  @IsString({ message: ' Description is always string!' })
  @Length(2, 300, {
    message:
      'Description  should be at least 2 chars and no more than 300 chars',
  })
  readonly description: string;
}
