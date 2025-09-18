import { Account } from "./Account.js"




export class Blog {
    constructor(data) {

        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.tags = data.tags
        this.published = data.published
        this.creatorId = data.creatorId
        this.id = data.id
        this.creator = new Account(data.creator)
    }
}