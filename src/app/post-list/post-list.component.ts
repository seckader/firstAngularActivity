import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    this.post.setLoveIts(this.post.getLoveIts() + 1);
  }

  onDontLove() {
    this.post.setLoveIts(this.post.getLoveIts() - 1);
  }

}
