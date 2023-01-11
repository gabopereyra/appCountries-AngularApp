import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  @Output() onEnterTermino : EventEmitter<string> = new EventEmitter();

  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  dobouncer : Subject<string> = new Subject();

  @Input() _placeholder : string = "";

  public termino: string = '';

  ngOnInit(){
    this.dobouncer
    .pipe(debounceTime(300))
    .subscribe(value => {
      this.onDebounce.emit(value);
    });
  }
 
  buscar() {
    this.onEnterTermino.emit(this.termino);
  }

  teclaPresionada(){
    this.dobouncer.next(this.termino);
  }
}
