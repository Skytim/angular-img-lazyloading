import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public values: number[] = [];
  constructor() {
    for (let index = 400; index < 500; index++) {
      this.values.push(index);
    }
  }
}
