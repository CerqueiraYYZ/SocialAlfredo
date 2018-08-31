import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent }      from './posts/posts.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PostDetailComponent }  from './post-detail/post-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: PostDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
