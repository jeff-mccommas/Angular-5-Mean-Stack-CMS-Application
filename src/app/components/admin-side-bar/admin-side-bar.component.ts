import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {SidebarService} from '../../services/sidebar.service';

declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  content: string;
  successMsg: boolean = false;

  constructor(private router: Router,
              private sidebarService: SidebarService) {
  }

  ngOnInit() {

    if (localStorage.getItem('user') !== '\"jeffmccommas@gmail.com\"') {
      this.router.navigateByUrl('');
    } else {
      CKEDITOR.replace('content');
    }

    this.sidebarService.getSidebar().subscribe(res => {
      this.content = res.content;
    });

  }
}
