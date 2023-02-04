import { Component } from '@angular/core';
import {TotoService} from "../services/toto.service";
import {Toto} from "../models/toto";


@Component({
  selector: 'app-toto-list',
  templateUrl: './toto-list.component.html',
  styleUrls: ['./toto-list.component.scss']
})
export class TotoListComponent {
  totos: Toto[] = [
  ];

  constructor(private totoListService: TotoService) {

  }

  ngOnInit(): void {
    this.totoListService.getTotos().subscribe({
      next: totos => {
        this.totos = totos;
      },
    });
  }
}
