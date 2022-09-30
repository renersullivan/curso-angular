import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmitterComponent } from './components/emitter/emitter.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { CharacterComponent } from './pages/character/character.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'first', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'emitter', component: EmitterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'character', component: CharacterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
