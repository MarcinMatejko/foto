import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuestionsService } from './services/questions.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { StoriesComponent } from './components/stories/stories.component';
import { OfferComponent } from './components/offer/offer.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotBuildPageComponent } from './components/not-build-page/not-build-page.component';
import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HeaderComponent,
    FormComponent,
    InstagramComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    FaqComponent,
    StoriesComponent,
    OfferComponent,
    AboutPageComponent,
    NotFoundComponent,
    NotBuildPageComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
