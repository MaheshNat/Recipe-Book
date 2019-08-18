import { NgModule } from "@angular/core";
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';

const routes: Routes = [
    {path: '', component: ShoppingListComponent}
]

@NgModule({
    declarations: [
      ShoppingListComponent,
      ShoppingEditComponent,
    ],
    imports: [
      RouterModule.forChild(routes),
      FormsModule,
      SharedModule
    ],
    // providers: [LoggingService]
})
export class ShoppingListModule {}