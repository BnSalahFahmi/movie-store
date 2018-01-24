import { Injectable } from "@angular/core";
import { CommonService } from "../../shared/services/common-service.service";

@Injectable()
export class CoreService{

    constructor(private commonService: CommonService){};

    pushQuery(query: string){
        this.commonService.pushFilter(query);
    }
}