import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(){    
    var local = localStorage.getItem("theme") || "light-theme";
    this.loadStyle(local == "light-theme" ? "light-theme":"dark-theme");
    //this.sfavicon();
  }
  
  constructor() {}

  guri = (styleName) => {
    switch(styleName){
      case "dark-theme": 
        return "assets/styles/style-dark.css";
      default:
        return "";
    }
  }

  loadStyle = (styleName) => {
    localStorage.setItem("theme", styleName);
    const head = document.getElementsByTagName('head')[0];

    let themeLink = document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = this.guri(styleName);
    } else {
      const style = document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = this.guri(styleName);

      head.appendChild(style);
    }
  }
  /*
  sfavicon = () => {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'https://stackoverflow.com/favicon.ico';
  }*/
}
