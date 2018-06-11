import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './views/template-form/template-form.component';
import { ReactiveFormComponent } from './views/reactive-form/reactive-form.component';
import { AttributeDirectiveDirective } from './directives/attribute-directive.directive';
import { StructuralDirectiveDirective } from './directives/structural-directive.directive';
import { LoginComponent } from './views/login/login.component';
import { LayoutComponent } from './views/layout/layout.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    AttributeDirectiveDirective,
    StructuralDirectiveDirective,
    LoginComponent,
    LayoutComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
