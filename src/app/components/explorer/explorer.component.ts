import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {
  private _jsonEditor: string;
  public defaultJson: object = {
    text: 'Hello World!',
    array: [1, 2, 3, 4, 5],
    object: {
      more_text: 'This is a nested object.'
    }
  };
  private _json: object = this.defaultJson;

  options = {
    language: 'json'
  };

  constructor() {}

  ngOnInit() {
    this._jsonEditor = JSON.stringify(this.defaultJson, null, '\t');
  }

  clearJson(): void {
    this._jsonEditor = '';
    this.defaultJson = null;
  }

  get jsonEditor(): string {
    return this._jsonEditor;
  }

  @Input()
  set jsonEditor(jsonEditor: string) {
    if (jsonEditor) {
      this.json = JSON.parse(jsonEditor);
    } else {
      this.json = {};
    }
  }

  get json(): object {
    return this._json;
  }

  set json(value: object) {
    this._json = value;
  }

}
