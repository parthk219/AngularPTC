import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent   {

searchText: string="Mens Wear1";

updateSearchText(event: any)
{
  this.searchText=event.target.value;
}

}
