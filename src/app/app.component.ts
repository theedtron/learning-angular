import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>The Boss</h1>
    
    <app-parent></app-parent>
`,

  styles: [`
    h1{
    color:green
    }
`]
})
export class AppComponent {
  title = 'app works mayne!!!!';
}
