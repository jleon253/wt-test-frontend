import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TheoryComponent } from './components/pages/theory/theory.component';
import { CommentsComponent } from './components/pages/comments/comments.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'theory', component: TheoryComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
