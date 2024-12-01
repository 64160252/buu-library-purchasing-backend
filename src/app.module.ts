import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { RoleModule } from './role/role.module';
import { Role } from './role/entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // ปล่อยว่างไว้หากไม่ได้ตั้งรหัสผ่าน
      database: 'testdb',
      entities: [User, Role],
      synchronize: false, // ใช้ในโหมดพัฒนา
    }),
    UserModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
