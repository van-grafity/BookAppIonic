import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { CategoryPage } from '../category/category.page';
import { SearchPage } from '../search/search.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  tab1Root = HomePage;
  tab2Root = CategoryPage;
  tab3Root = SearchPage;

  constructor() { }

  ngOnInit() {
  }

}
