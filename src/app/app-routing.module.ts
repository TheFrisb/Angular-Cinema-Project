import { FrontpageComponent } from './component/frontpage/frontpage.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MoviesComponent } from './component/movies/movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonComponent } from './component/coming-soon/coming-soon.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'coming-soon', component: ComingSoonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
