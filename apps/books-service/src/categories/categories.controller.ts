import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from '../entities/Category';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: [Category],
  })
  listBookCategories() {
    return this.categoriesService.listBookCategories();
  }
}
