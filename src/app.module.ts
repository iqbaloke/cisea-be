import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './module/category/category.module';
import { SubcategoryModule } from './module/subcategory/subcategory.module';
import { DistrictModule } from './module/district/district.module';
import { AllocationModule } from './module/allocation/allocation.module';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { AuthModule } from './module/auth/auth.module';
import { TokenService } from './module/token/token.service';
import { ExportexcelModule } from './module/exportexcel/exportexcel.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    CategoryModule,
    SubcategoryModule,
    DistrictModule,
    AllocationModule,
    DashboardModule,
    AuthModule,
    ExportexcelModule,
  ],
  controllers: [],
  providers: [TokenService],
})
export class AppModule {}
