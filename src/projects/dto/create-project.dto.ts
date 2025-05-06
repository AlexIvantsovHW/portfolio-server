import { IsString, MinLength, IsUrl } from 'class-validator';

export class CreateProjectDto {
    @IsString()
    @MinLength(3,{message:'Project title should be at least 3 chars'})
    title: string;

    @IsString()
    startAt: string;
    @IsString()
    endAt: string;
    
    @IsString()
    @MinLength(5,{message:'Project description should be at least 5 chars'})
    description: string;

    @IsUrl({}, { message: 'Link must be a valid URL' })
    link: string;

    @IsUrl({}, { message: 'Logo must be a valid URL' })
    logo: string;
}
