import { Component, OnInit } from '@angular/core';
import { VscodeService } from '@pivotal-tools/vscode-extension-webview-angular';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {

  counter = 0;
  message = '';

  constructor(
    private vscodeService: VscodeService
  ) {
  }

  ngOnInit(): void {
    this.vscodeService.getEvents().subscribe(event => {
      console.log('EVENT', event);
      this.message = JSON.stringify(event.data);
    });
  }

  onClick(): void {
    this.counter++;
    this.vscodeService.postMessage({counter: this.counter});
  }
}
