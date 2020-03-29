import { Component, OnInit, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-no-data-found',
  templateUrl: './no-data-found.component.html',
  styleUrls: ['./no-data-found.component.scss']
})
export class NoDataFoundComponent implements OnInit {
  @Input() showNotFoundError: boolean = false;
  @Input() fontSizeClass: string;
  @Input() color: string;
  @Input() message: string;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

}
