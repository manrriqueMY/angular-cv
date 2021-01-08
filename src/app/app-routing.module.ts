import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: "",component: AboutComponent},
  {path: "about",component: AboutComponent},
  {path: "resume",component: ResumeComponent},
  {path: "portfolio",component: PortafolioComponent},
  {path: "blog",component: BlogComponent},
  {path: "contact",component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
