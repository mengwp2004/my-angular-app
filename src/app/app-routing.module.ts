import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycomponenlstComponent } from './component/mycomponenlst/mycomponenlst.component';

const routes: Routes = [ {
            path: 'mycomponenlst',
            component: MycomponenlstComponent
         }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
