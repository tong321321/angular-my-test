import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { TemplateDrivenFormEx1Component } from './template-driven-form-ex1/template-driven-form-ex1.component';
import { TemplateExampleComponent } from './template-example/template-example.component';


const routes: Routes = [{path: 'contacts' , component: ContactListComponent},
    {path: 'contact/:id' , component: ContactDetailComponent},
    {path: '', pathMatch: 'full', redirectTo: 'contacts'},
    {path: 'templateDrivenFormEx1' , component: TemplateDrivenFormEx1Component},
    {path: 'templateExample' , component: TemplateExampleComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
