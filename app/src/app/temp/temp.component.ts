import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent {
  celsius: any;
  fahrenheit: any;

  convertToFahrenheit(): void {
    if (this.celsius !== '') {
      const celsiusValue = parseFloat(this.celsius);
      if (!isNaN(celsiusValue)) {
        this.fahrenheit = ((celsiusValue * 9) / 5 + 32).toFixed(2);
      } else {
        this.fahrenheit = '';
      }
    } else {
      this.fahrenheit = '';
    }
  }

  convertToCelsius(): void {
    if (this.fahrenheit !== '') {
      const fahrenheitValue = parseFloat(this.fahrenheit);
      if (!isNaN(fahrenheitValue)) {
        this.celsius = (((fahrenheitValue - 32) * 5) / 9).toFixed(2);
      } else {
        this.celsius = '';
      }
    } else {
      this.celsius = '';
    }
  }
}
