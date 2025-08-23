import { IsNotEmpty, IsString, IsUrl, MinLength } from 'class-validator';
import { ISoftware } from '../model/software.interface';

export class CreateSoftwareDto implements ISoftware {
  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: 'Software title should include at least 2 chars! ' })
  title: string;
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  logo: string;
}
