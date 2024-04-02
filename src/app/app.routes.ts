import { Routes } from '@angular/router';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { SignUpPageComponent } from './core/pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { SelectAquariumComponent } from './core/pages/select-aquarium/select-aquarium.component';
import { AquariumPageComponent } from './core/pages/aquarium-page/aquarium-page.component';

export const routes: Routes = [
    {path: '', redirectTo:'login', pathMatch:"full"},
    {path: 'login', component: LoginPageComponent},
    {path: 'sign-up', component: SignUpPageComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'aquarium/all', component: SelectAquariumComponent},
    {path: 'aquarium/settings/:id',component: AquariumPageComponent}
];
