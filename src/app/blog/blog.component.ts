import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs = [];
  constructor() { }

  ngOnInit(): void {

  }
  gblogs = async () => {
    var {blog} = await fetch("/assets/data/blog.json").then(res => res.json());
    this.blogs = blog;
  }
}
