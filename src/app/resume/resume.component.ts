import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  languages = [];
  frameworks = [];
  librerias = [];
  servidors = [];
  otros = [];

  constructor() { }

  ngOnInit(): void {
    this.gresume();
  }
  
  gresume = async() => {
    var {language, framework, libreria, servidor, otro} = await fetch("/assets/data/resume.json").then(res => res.json());
    this.languages = language || [];
    this.frameworks = framework || [];
    this.librerias = libreria || [];
    this.servidors = servidor || [];
    this.otros = otro || [];
    window['progressBar']();
  }

}
