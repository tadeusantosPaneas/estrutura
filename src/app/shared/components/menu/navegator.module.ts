import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavegatorComponent } from "./navegator/navegator.component";



@NgModule({
    declarations: [NavegatorComponent],
    exports: [NavegatorComponent],
    imports: [CommonModule]
})
export class NavegatorModule { }