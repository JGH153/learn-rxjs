import { Component, OnInit } from '@angular/core';

import { WebLoaderService } from './web-loader.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'LRXJS-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'LRXJS';

    constructor(private _webLoader:WebLoaderService){}

    ngOnInit(){

        this.loadAsyncData();



    }

    async loadAsyncData(){
        let data = await this._webLoader.loadData();
        console.log(data.text());
    }

    

}
