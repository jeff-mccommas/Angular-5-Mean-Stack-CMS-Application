import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PageService } from './../../services/page.service';
import { SidebarService } from './../../services/sidebar.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  private param: any;
  public pageBody: any;
  public pages: any;
  public sidebar: string;
  public hasSidebar: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sidebarService: SidebarService,
    private pageService: PageService,
    private title: Title
  ) { }

  ngOnInit() {
    this.pageService.getPages().subscribe(pages => {
      this.pages = pages;
    });

    this.route.params.subscribe(params => {
      this.param = params['page'];
      if (this.param === undefined) {
        this.param = 'home';
        this.title.setTitle('CMS');
      } else {
        this.title.setTitle(this.param.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
      }

      this.pageService.getPage(this.param).subscribe(pageBody => {
        if (pageBody == null) {
          this.router.navigateByUrl('');
        }
        this.pageBody = pageBody;

        if (pageBody["sidebar"] === "yes") {
          this.hasSidebar = true;
          this.sidebarService.getSidebar().subscribe(sidebar => {
            this.sidebar = sidebar.content;
          });
        } else {
          this.hasSidebar = false;
        }
      });
    });
  }

}
