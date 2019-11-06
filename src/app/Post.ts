export class Post {

  private title;
  private content;
  private loveIts;
  private createdAt;

  constructor(title, content, loveIts, createdAt) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = createdAt;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getContent() {
    return this.content;
  }

  setContent(content) {
    this.content = content;
  }

  getLoveIts() {
    return this.loveIts;
  }

  setLoveIts(loveIts) {
    this.loveIts = loveIts;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }


}
