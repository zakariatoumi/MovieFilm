import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FootreComponent } from './footre/footre.component';
import { FilmsComponent } from './films/films.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AproposComponent } from './apropos/apropos.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { SearchComponent } from './search/search.component';
import { YoutubePipe } from './pipe/youtube.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscrire', component: InscrireComponent },
  { path: 'search', component: SearchComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FootreComponent,
    FilmsComponent,
    AproposComponent,
    DetailsComponent,
    LoginComponent,
    InscrireComponent,
    SearchComponent,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } //
    ),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
