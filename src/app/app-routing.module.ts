import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmitterComponent } from './components/emitter/emitter.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { HomeComponent } from './pages/nubank/home/home.component';

const routes: Routes = [
  {path:'first',component:FirstComponentComponent},
  {path:'list',component:ListRenderComponent},
  {path:'emitter',component:EmitterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
