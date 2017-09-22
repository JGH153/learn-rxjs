import { Component, OnInit, Input } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'lrxjs-subject-tester',
  templateUrl: './subject-tester.component.html',
  styleUrls: ['./subject-tester.component.scss']
})
export class SubjectTesterComponent implements OnInit {

    @Input() theSubject:Subject<any>;
    @Input() myValue:number;

    constructor() { }

    ngOnInit() {
        this.theSubject.subscribe(
            (nextVal) => {
                if(nextVal.sender != this){
                    console.log("I am  " + this.myValue + " and i got " + nextVal.number);
                }

            }
        )

    }

    clickFunction(){
        console.log("clicked");
        this.theSubject.next({
            sender: this,
            number: this.myValue
        });
    }

}
