import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ThemeToggleComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
