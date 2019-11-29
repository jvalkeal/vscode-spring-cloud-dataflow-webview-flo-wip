import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { AppComponent } from './app.component';
import { VscodeModule } from '@pivotal-tools/vscode-extension-webview-angular';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    VscodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
