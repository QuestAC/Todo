import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { formatCurrency, formatDate, formatNumber } from '@angular/common';

@Component({
  selector: 'app-inter',
  // templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.css'],
  template: `
    <p>{{ 'WELCOME' | translate }}</p>
    <p>{{ 'HELLO' | translate }}</p>
    <p>{{ 'GREETINGS' | translate }}</p>
    <p>Amount: {{ formattedAmount }}</p>
    <p>Currency: {{ formattedCurrency }}</p>
    <p>Date: {{ formattedDate }}</p>
    <button (click)="changeLanguage('en')">English</button>
    <button (click)="changeLanguage('fr')">French</button>
    <button (click)="changeLanguage('ml')">Malayalam</button>
    <button (click)="changeLanguage('hi')">Hindi</button>
  `
})
export class InterComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  amount = 1234.56;
  currenyCode = 'USD';
  date = new Date();

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  formattedAmount = formatNumber(this.amount, 'fr-SY', '1.2-3');
  formattedDate = formatDate(this.date, 'fullDate', 'fr-SY');
  formattedCurrency = formatCurrency(this.amount,'fr-SY', 'EUR', 'symbol', '1.2-3');
}
