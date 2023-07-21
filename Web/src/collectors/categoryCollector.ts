import { AxiosResponse } from "axios";
import { del, get, post, put } from "../utilities/httpClient";


class CategoryCollector {
    private baseUrl = 'https://api.example.com/categories'; // URL base del API

    getAllCategories(): Promise<AxiosResponse<Category[], any>> {
        const url = `${this.baseUrl}`;
        return get(url, '');
    }

    getCategoryById(id: number): Promise<AxiosResponse<Category, any>> {
        const url = `${this.baseUrl}/${id}`;
        return get(url, '');
    }

    createCategory(category: Category): Promise<AxiosResponse<Category[], any>> {
        const url = `${this.baseUrl}`;
        return post(url, category);
    }

    updateCategory(id: number, category: Category): Promise<AxiosResponse<Category[], any>> {
        const url = `${this.baseUrl}/${id}`;
        return put(url, category);
    }

    deleteCategory(id: number): Promise<AxiosResponse<void, any>> {
        const url = `${this.baseUrl}/${id}`;
        return del(url);
    }
}

export default CategoryCollector;
