import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriterInfoComponent } from './components/writer-info/writer-info.component';
import { WritersComponent } from './components/writers/writers.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WritersComponent },
  { path: 'writers', component: WritersComponent },
  { path: 'escritores', redirectTo: 'writers' },
  { path: 'writer/:id', component: WriterInfoComponent },
  { path: '**', redirectTo: 'writers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
