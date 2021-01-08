import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-card',
  templateUrl: './aside-card.component.html',
  styleUrls: ['./aside-card.component.css']
})
export class AsideCardComponent implements OnInit {
  @Input() loadStyle;
  
  profile = {
    social:{},
    contact:{}
  };
  constructor() { }

  ngOnInit(): void {
    this.gprofile();
  }
  gprofile = async () =>{
    this.profile = await fetch("/assets/data/profile.json").then(res => res.json());
    document.title = this.profile['name'] + " " + this.profile['lastname']
  }
  stheme = (theme) => {
    this.loadStyle(theme);
  }
}
