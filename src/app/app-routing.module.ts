import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GzipConverterComponent } from './gzip-converter/gzip-converter.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'gzip', component: GzipConverterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
