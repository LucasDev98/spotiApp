import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
    { path:'home', component: HomeComponent },
    { path:'search', component: SearchComponent },
    { path:'instrucciones', component: InstruccionesComponent },
    { path:'artista', component: ArtistaComponent },
    { path:' ', component: HomeComponent },
    { path:'**', pathMatch:'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
