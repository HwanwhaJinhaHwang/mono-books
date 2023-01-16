import { Injectable } from '@nestjs/common';
import { Category } from '../entities/Category';
const categories: Category[] = [
  {
    id: '0',
    name: 'Fiction',
  },
  {
    id: '1',
    name: 'French',
  },
];
@Injectable()
export class CategoriesService {
  listBookCategories(): Category[] {
    return categories;
  }
}
