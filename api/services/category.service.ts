import { AxiosResponse } from "axios";
import { Prefix } from "api/decorators/Prefix";
import { Get, Post } from "api/decorators";
import { IGet } from "api/decorators/types/Get.types";
import { get } from "lodash";

interface IPost {
    data: any;
    requestUrl?: string[];
    callbackResponse?: () => AxiosResponse<any>;
}

@Prefix("category")
class CategoryService {
    @Get()
    async getCategoryByKey({ requestUrl, callbackResponse }: IGet) {
        return callbackResponse();
    }

    @Post("create")
    async categoryCreate({ data, requestUrl, callbackResponse }: IPost) {
        return callbackResponse();
    }

    @Get()
    async getAllCategory({ requestUrl, callbackResponse }: IGet) {
        return callbackResponse();
    }
}

export const categoryService = new CategoryService();
