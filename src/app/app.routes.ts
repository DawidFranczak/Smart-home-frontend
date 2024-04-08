import { Routes } from '@angular/router';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { SignUpPageComponent } from './core/pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { SelectAquariumComponent } from './core/pages/select-aquarium/select-aquarium.component';
import { AquariumPageComponent } from './core/pages/aquarium-page/aquarium-page.component';
import { DevicesPageComponent } from './core/pages/devices-page/devices-page.component';
import { AddDevicePageComponent } from './core/pages/add-device-page/add-device-page.component';
import { DeviceInfoPageComponent } from './core/pages/device-info-page/device-info-page.component';

export const routes: Routes = [
    {path: '', redirectTo:'login', pathMatch:"full"},
    {path: 'login', component: LoginPageComponent},
    {path: 'sign-up', component: SignUpPageComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'aquarium/all', component: SelectAquariumComponent},
    {path: 'aquarium/settings/:id', component: AquariumPageComponent},
    {path: 'devices', component: DevicesPageComponent},
    {path: 'devices/add', component: AddDevicePageComponent},
    {path: 'devices/:id/:text', component: DeviceInfoPageComponent}
];
