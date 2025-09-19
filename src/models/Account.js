export class Account {
  /**
   * @typedef AccountData
   * @property {string} data.id
   * @property {string} data.email
   * @property {string} data.name
   * @property {string} data.picture
   * @property {string} data.bio
   * @property {string} data.coverImg
   * @property {string} data.linkedin
   * 
   * 
   */
  constructor({ id, email, name, picture, bio, coverImg, linkedin }) {
    this.id = id
    this.email = email
    this.name = name
    this.picture = picture
    // TODO add additional properties if needed
    this.bio = bio
    this.coverImg = coverImg
    this.linkedin = linkedin
  }
}
