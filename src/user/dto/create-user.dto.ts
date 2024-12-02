import { IsString, IsEmail, IsNotEmpty, IsNumber } from 'class-validator'; // ใช้ class-validator สำหรับการ validate ข้อมูล

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  user_name: string;

  @IsEmail()
  @IsNotEmpty()
  user_email: string;

  @IsString()
  @IsNotEmpty()
  user_password: string;

  @IsString()
  @IsNotEmpty()
  user_tel: string;

  @IsNumber()
  @IsNotEmpty()
  role_id: number;
}