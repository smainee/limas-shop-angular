import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  public collapsed = true;
  public isSearchBarOpend = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  public toggleMenuCollap(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  public toggleSearchBar(){
    this.isSearchBarOpend = !this.isSearchBarOpend;
  }

}
