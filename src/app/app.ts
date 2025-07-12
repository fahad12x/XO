import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    

    <main>
    <router-outlet />
    </main>
    
  `,
  styles: [],
})
export class App {
  protected title = 'first-ng-app';
}
