import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyFilter'
})
export class KeyFilterPipe implements PipeTransform {

  transform(list: any, search: any): any {
    
    //check if search term is undefined
    if (search === undefined) return list;
    // return updated list array
    return list.filter(function(listData){
      return listData.name.toLowerCase().includes(search.toLowerCase());
    });

  }

}
