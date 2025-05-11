import { IsEmail, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { IContact } from '../module/contact.type';

export class CreateContactDto implements IContact {
  @IsString()
  @IsNotEmpty()
  whatsApp: string;

  @IsString()
  @IsNotEmpty()
  telegram: string;

  @IsUrl()
  @IsNotEmpty()
  @IsNotEmpty()
  linkedIn: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsUrl()
  @IsNotEmpty()
  cv: string;

  @IsUrl()
  @IsNotEmpty()
  website: string;

  @IsUrl()
  @IsNotEmpty()
  github: string;

  @IsUrl()
  @IsNotEmpty()
  codewars: string;
}
