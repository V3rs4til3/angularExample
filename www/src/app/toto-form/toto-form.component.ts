import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {TotoService} from "../services/toto.service";

@Component({
  selector: 'app-toto-form',
  templateUrl: './toto-form.component.html',
  styleUrls: ['./toto-form.component.scss']
})
export class TotoFormComponent {
  // @ts-ignore
  totoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private TotoService: TotoService) { }

  ngOnInit(): void {
    this.totoForm = this.formBuilder.group({
      name: ['', Validators.required],
      magic: [0, [
        Validators.required,
        Validators.min(0),
        Validators.pattern('^[0-9]*$')]
      ],
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.totoForm?.valid) {
      this.TotoService.createToto(this.totoForm.value).subscribe({
        next: res => {
          alert(res);
        },
        error: err => {
          alert(err);
        }
      });
    }
  }
}
