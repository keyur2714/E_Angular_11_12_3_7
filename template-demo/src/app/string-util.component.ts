import { ValueTransformer } from "@angular/compiler/src/util";
import { Component } from "@angular/core";

@Component({
    selector : 'app-string-util',
    template : `
                    Result Is : <ng-content></ng-content>
                    <p>{{data}}</p>
                `,
    styles : ['']    
})
export class StringUtilComponent {

    data : string = '';

    constructor() {
        console.log("StringUtilComponent Object Created...!");        
    }
    
    toUpper(value  :string) : string {
        return value.toUpperCase();
    }

    toLower(value : string) : string {
        return value.toLowerCase();
    }

    toReverse(value : string) : string {
        let revStr = value.split('').reverse().join('');
        return revStr;
    }
    

}