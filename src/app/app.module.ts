import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo/todo.service';
import { Database } from './todo/database';
import { TodoModule } from './todo/todo.module';
import { HeaderComponent } from './todo/header.component';

@NgModule({
    declarations: [
        AppComponent,
        TodoComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(Database),
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
          name: 'Todo App DevTools',
          maxAge: 25,
          logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),

        TodoModule
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
