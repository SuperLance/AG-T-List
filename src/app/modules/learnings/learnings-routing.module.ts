import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningsComponent } from './learnings.component';


const routes: Routes = [
  { path: '', component: LearningsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningsRoutingModule {
}
