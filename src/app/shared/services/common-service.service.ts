import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CommonService {
    filterListener= new EventEmitter<string>();

    pushFilter(query: string){
        this.filterListener.emit(query);
    }
}