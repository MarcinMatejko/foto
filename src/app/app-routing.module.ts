import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { OfferComponent } from './components/offer/offer.component';
import { StoriesComponent } from './components/stories/stories.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotBuildPageComponent } from './components/not-build-page/not-build-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about-page', component: AboutPageComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'stories', component: StoriesComponent},
  {path: 'not-build-page', component: NotBuildPageComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
