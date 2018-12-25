import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReqComponent} from './req/req.component';
import {ResComponent} from './res/res.component';
const routes: Routes = [
{path:'', component: ReqComponent},
{path:'res', component: ResComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
