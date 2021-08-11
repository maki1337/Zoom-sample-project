import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components
import { ZoomComponent } from 'src/app/pages/zoom/zoom.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'zoom', component: ZoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
