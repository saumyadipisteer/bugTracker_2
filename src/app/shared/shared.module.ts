import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { userReducer } from '../user/state/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', userReducer),
    HttpClientModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [CommonService],
    };
  }
}
