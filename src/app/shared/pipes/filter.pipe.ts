import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'filter',
    pure: true
})
export class FilterPipe implements PipeTransform{
    transform(value: any, query: string){
        if(value.length === 0 || query === '' || query == null){
            return value;
        }
        const resultArray = [];
        for(let item of value){
            if(item.title.toLowerCase().startsWith(query.toLowerCase())){
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}