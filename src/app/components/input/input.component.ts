import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Input() control: FormControl;
  @Input() placeholder: string;
  @Input() ngModelInput: any;
  @Input() exampleText: string;
  @Input() prefix: string;
  @Input() dummyControl: boolean;
  @Input() withTooltip: boolean;
  @Input() class: string;
  @Input() isTextArea: boolean;
  @Input() isSelect: boolean;
  @Input() optionsSelect: string[];
  constructor() {
    this.control = new FormControl();
    this.dummyControl = false;
    this.title = '';
    this.type = '';
    this.placeholder = '';
    this.exampleText = '';
    this.prefix = '';
    this.class = '';
    this.ngModelInput = '';
    this.optionsSelect = [];
    this.isTextArea = false;
    this.isSelect = false;
  }

  public get inputClass(): string | null {
    return this.control.touched ? this.control.valid ? 'valid-input' : 'invalid-input' : null;
  }

  ngOnInit() {}

}
