import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{Routes , RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OperationsComponent } from './operations/operations.component';
import { LoginComponent } from './login/login.component';
import { EmployeComponent } from './employe/employe.component';
import { CreateComponent } from './create/create.component';
import { UserSharedService } from './services/user-shared.service';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { PersonService } from './services/person.service';

const appRoutes: Routes = [

   { path : '', component: EmployeComponent },
   { path : 'login', component: LoginComponent },
   { path : 'create', component : CreateComponent},
   { path : 'read', component : ReadComponent},
   { path : 'update', component : UpdateComponent},
   { path : 'home', component : LoginhomeComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OperationsComponent,
    LoginComponent,
    EmployeComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    LoginhomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UserSharedService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
