import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategProductsComponent } from './Composants/categ-products/categ-products.component';
import { ListCategoriesComponent } from './Composants/list-categories/list-categories.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path : "",redirectTo:'categories',pathMatch:"full"},
  {path : "categProducts",component:CategProductsComponent},
  {path : "categories",component:ListCategoriesComponent},
  {path : "",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
