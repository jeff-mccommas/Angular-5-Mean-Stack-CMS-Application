import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PageService } from './../../services/page.service';

declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-add-page',
  templateUrl: './admin-add-page.component.html',
  styleUrls: ['./admin-add-page.component.css']
})
export class AdminAddPageComponent implements OnInit {

  public successMsg: boolean = false;
  public errorMsg: boolean = false;
  public title: string;
  public content: string;

  constructor(
    private router: Router,
    private pageService: PageService
  ) { }

  ngOnInit() {

    if (localStorage.getItem("user") !== "\"jeffmccommas@gmail.com\"") {
      this.router.navigateByUrl('');
    } else {
      CKEDITOR.replace('content');
    }

  }

  addPage({form, value, valid}) {
    form.reset();
    if (valid) {
      value.content = CKEDITOR.instances.content.getData();
      this.pageService.postAddPage(value).subscribe(res => {
        if (res == 'pageExists') {
          this.errorMsg = true;
          setTimeout(function() {
            this.errorMsg = false;
          }.bind(this),2000);
        } else {
          this.successMsg = true;
          setTimeout(function() {
            this.successMsg = false;
          }.bind(this),2000);

          CKEDITOR.instances.content.setData('');

          this.pageService.getPages().subscribe(pages => {
            this.pageService.pagesBS.next(pages);
          })
        }
      });
    } else {
      console.log('Form is not valid.');
    }
  }

}
