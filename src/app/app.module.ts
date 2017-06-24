import { NgModule } from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { SharedModule } from "../shared/shared.module";
import { MaterializeModule } from "angular2-materialize";

const routes:any = [];

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    MaterializeModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}