import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GzipConverterComponent } from './gzip-converter/gzip-converter.component';

const routes: Routes = [
  {path: 'gzip', component: GzipConverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
