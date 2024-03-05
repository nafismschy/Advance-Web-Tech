import { IsString, IsInt, IsEmail, MinLength, Matches, IsNotEmpty, MaxLength,IsOptional } from "class-validator";

export class AdminDTO {
    @IsString()
    @MaxLength(50)
    name: string;

    @IsEmail()
    @MinLength(5)
    email: string;

    @IsString()
    @MinLength(6)
    @Matches(/^(?=.*[a-z])/,{ message: 'Password must contain at least one lowercase character' })
    password: string;

    @IsNotEmpty()
    education: string;

    @IsOptional()
    @Matches(/\.(pdf)$/, {
      message: 'CV must be in pdf format'
    })
    cv?: string;

   
    @Matches(/^0/)
    phone: string;
}

