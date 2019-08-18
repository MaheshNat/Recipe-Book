import { NgModule } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { AuthService } from './auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { LoggingService } from './logging.service';

@NgModule({
    providers: [
      ShoppingListService, 
      RecipeService, 
      AuthService, 
      {
        provide: HTTP_INTERCEPTORS, 
        useClass: AuthInterceptorService, 
        multi: true
      },
    ]
})
export class CoreModule { }