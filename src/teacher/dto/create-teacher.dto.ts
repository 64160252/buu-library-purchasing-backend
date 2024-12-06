import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTeacherDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number; // เชื่อมกับ User ID

  @IsString()
  @IsNotEmpty()
  faculty: string;

  @IsString()
  @IsNotEmpty()
  department: string;
}
