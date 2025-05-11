import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, IsUrl, Length } from 'class-validator';
import { IFeedback } from '../model/feedbacks.type';

export class CreateFeedbackDto implements IFeedback {
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
}
