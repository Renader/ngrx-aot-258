import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {reducers, reducerToken} from './store/index';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducerToken),
    StoreDevtoolsModule.instrument({maxAge: 50}),

  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    },
    {
      provide: reducerToken,
      useValue: reducers
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
