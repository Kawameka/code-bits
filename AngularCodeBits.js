// Code Bit #1
// Adding the router package to an Angular App
// and setting the initial routes

// add to app.module.ts
import { RouterModule, Routes } from '@angular/router';

// some default route examples
const appRoutes: Routes = [
  {path:'', component:RootComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent}
]

// add to imports
RouterModule.forRoot(appRoutes)

// add to app.component.html
<div class="container">
  <router-outlet></router-outlet>
</div>

// End Code Bit #1

// Code Bit #2
// angular router link format
<a class="nav-link" href="#" routerLink="/">Text</a>

// End Code Bit #2

// Code Bit #3
// to pull an id from the URL

// set route to include ID
{path:'user/:id', component:UserDetailsComponent}

// within appropriate component
import { Router, ActivatedRoute, Params } from '@angular/router';

// within ngOninit function
this.id = this.route.snapshot.params['id'];

// End Code Bit #3