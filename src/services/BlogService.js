import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Blog } from "@/models/Blog.js"
import { AppState } from "@/AppState.js"

class BlogService {
    async getBlogs() {
        const response = await api.get('api/blogs')
        const blogs = response.data.map((blogData) => new Blog(blogData))
        AppState.blog = blogs
        logger.log(AppState.blog)

    }

}

export const blogService = new BlogService()