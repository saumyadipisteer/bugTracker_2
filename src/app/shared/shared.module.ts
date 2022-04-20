import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { userReducer } from '../user/state/user.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('user',userReducer)],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
