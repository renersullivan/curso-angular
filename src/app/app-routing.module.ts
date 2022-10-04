import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmitterComponent } from './components/emitter/emitter.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { CharacterComponent } from './pages/character/character.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'first', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'emitter', component: EmitterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'character', component: CharacterComponent },
  //{ path: '**', component: PageNotFoundComponent },//
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
