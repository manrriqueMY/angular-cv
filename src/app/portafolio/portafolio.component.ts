import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  portafolios = [];
  classes = [];
  constructor() { }

  ngOnInit(): void {
    this.gportafolio();
  }
  gportafolio = async () => {

    var { portafolio, classe} = await fetch("/assets/data/portafolio.json").then(res => res.json()); 
    this.classes = classe;
    this.portafolios = portafolio;

    setInterval(()=>{
      window["masonry"] ? window["masonry"]() : 1;
      window["switchcategory"] ? window["switchcategory"]() : 1;
      //window['mediumzoom'] ? window['mediumzoom']() : 1;
    }, 250);
    
  }
}
