import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LugarPage } from './lugar/lugar.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lugar/id',
    loadChildren: () => import('./lugar/lugar.module').then( m => m.LugarPageModule)
  },
  {path: 'lugar', component: LugarPage},
  {
    path: 'tercera',
    loadChildren: () => import('./tercera/tercera.module').then( m => m.TerceraPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'addlugar',
    loadChildren: () => import('./addlugar/addlugar.module').then( m => m.AddlugarPageModule)
  },
  {
    path: 'addlugar/:id',
    loadChildren: () => import('./addlugar/addlugar.module').then( m => m.AddlugarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
