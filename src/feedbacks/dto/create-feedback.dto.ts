import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, IsUrl, Length } from 'class-validator';
import { TFeedback } from '../model/feedbacks.type';

export class CreateFeedbackDto implements TFeedback {
  @IsString()
  @Length(2, 20)
  @IsNotEmpty()
  name: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  date: Date;

  @IsString()
  @Length(2)
  @IsNotEmpty()
  description: string;

  @IsString()
  @Length(2)
  @IsNotEmpty()
  position: string;

  @IsString()
  @Length(2)
  @IsNotEmpty()
  companyTitle: string;

  @IsUrl()
  @IsNotEmpty()
  logo: string;

  @IsString()
  @Length(2)
  @IsNotEmpty()
  country: string;

  @IsString()
  @Length(2)
  @IsNotEmpty()
  city: string;
}
