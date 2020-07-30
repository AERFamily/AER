import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';


const routes: Routes = [{ path: '', redirectTo: '/comingsoon', pathMatch: 'full' }, { path: 'comingsoon', component: ComingsoonComponent},{ path: 'home', component: HomeComponent },{path:'about',component:AboutpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
