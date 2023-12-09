import { NgModule } from "@angular/core";
import { AsPipe } from "./as-pipe.pipe";

@NgModule({
    declarations: [
        AsPipe
    ],
    exports: [
        AsPipe
    ]
})
export class AsPipeModule { }