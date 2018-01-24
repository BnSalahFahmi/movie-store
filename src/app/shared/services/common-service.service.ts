import { EventEmitter } from "@angular/core";

export class CommonService {
    filterListener= new EventEmitter<string>();

    pushFilter(query: string){
        this.filterListener.emit(query);
    }
}