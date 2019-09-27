import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
import { FormsModule } from '@angular/forms';
// import { RecipeService } from './recipes/recipe.service';
import { HttpClientModule } from '@angular/common/http';
// import { AuthService } from './auth/auth.service';
// import { AuthGuard } from './auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // AppRoutingModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
