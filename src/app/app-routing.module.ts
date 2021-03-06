import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExplorerComponent} from './components/explorer/explorer.component';

const routes: Routes = [
  {path: 'explorer', component: ExplorerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
