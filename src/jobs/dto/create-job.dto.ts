import {
  IsArray,
  IsDateString,
  IsNumber,
  IsString,
  IsUrl,
  Length,
  Min,
} from 'class-validator';
import { IJob } from '../module/jobs.interface';

export class CreateJobDto implements IJob {
  readonly id: number;
  @IsString({ message: 'Job title is always string!' })
  @Length(3, 30, {
    message: 'Job title should be at least 3 chars and no more than 30 chars',
  })
  readonly jobTitle: string;

  @IsDateString({}, { message: 'End date should be in Date format ' })
  readonly startAt: string;

  @IsDateString({}, { message: 'End date should be in Date format ' })
  readonly endAt: string;

  @IsString({ message: 'Company title is always string!' })
  @Length(3, 30, {
    message: 'company title should be at least 3 chars and more than 30 chars',
  })
  readonly companyTitle: string;

  @IsString({ message: 'Description is always string!' })
  readonly description: string;

  @IsArray({ message: 'software_id must be an array' })
  @IsNumber({}, { each: true, message: 'Each software_id must be a number' })
  @Min(0, { each: true, message: 'Each software_id must be at least 0' })
  readonly software_id: number[];

  @IsUrl({}, { message: 'logo should be in URL format!' })
  readonly logo: string;
}
