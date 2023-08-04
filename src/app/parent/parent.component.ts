import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  childName: string = '';
  children: string[] = [];

  addChild() {
    if (this.childName) {
      this.children.push(this.childName);
      this.childName = '';
    }
  }

  clearHistory() {
    this.children = [];
  }
}
