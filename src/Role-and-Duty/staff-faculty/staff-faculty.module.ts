import { Module } from '@nestjs/common';
import { StaffsFacultyService } from './staff-faculty.service';
import { StaffsFacultyController } from './staff-faculty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffFaculty } from './entities/staff-faculty.entity';
import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StaffFaculty, User, Role])],
  controllers: [StaffsFacultyController],
  providers: [StaffsFacultyService],
  exports: [StaffsFacultyService],
})
export class StaffFacultyModule {}
