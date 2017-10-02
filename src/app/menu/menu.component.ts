import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ngOnInit() {

  }

  constructor(private router: Router) {

  }

  QuickPostURLs: string[] = ['/trending', '/selected', '/my-posts', '/favourite-posts'];
  MenuURLs: string[] = ['/menu-component'];
  RoutingURLs:string[] = ['/routing'];

  isActive(link): boolean {
    switch (link) {
      case "QuickPosts": {
        return this.QuickPostURLs.indexOf(this.router.url) > -1;
      }
      case "Menu": {
        return this.MenuURLs.indexOf(this.router.url) > -1;
      }
      case "Routing": {
        return this.RoutingURLs.indexOf(this.router.url) > -1;
      }
      default: {
        return link == this.router.url;
      }
    }
  }

}
