import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dessert } from '../model/postres.model';
import { DataService } from '../services/data.service';
import { DessertsService } from '../services/desserts.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {
  formDessert: FormGroup = this.formBuilder.group({});
  disableButton = false;
  id: string = '';
  title = 'Crear postre';

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private dessertService: DessertsService,
    private activatedRoute: ActivatedRoute) {

    this.formDessert = this.formBuilder.group({
      clasification: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.dataService.isLoading.subscribe(isLoading => {
      this.disableButton = isLoading;
    });

    this.activatedRoute.params.subscribe(parameters => {
      if (parameters.id) {
        this.id = parameters.id;
        this.title = 'Actualizar postre';

        this.dataService.isLoading.next(true);
        this.dessertService.getSingleDessert(parameters.id).subscribe(item => {
          this.formDessert.patchValue(item);
          this.dataService.isLoading.next(false);
        });
      }
    });
  }

  ngOnInit(): void {
  }

  save(): void {
    const data = {
      clasification: this.formDessert.get('clasification')?.value,
      type: this.formDessert.get('type')?.value,
      price: this.formDessert.get('price')?.value
    } as Dessert;

    console.log(data);

    this.dataService.isLoading.next(true);

    this.dessertService.saveDessert(data, this.id).subscribe(() => {
      this.dataService.isLoading.next(false);
      this.router.navigate(['home']);
    }, () => {
      this.dataService.isLoading.next(false);
      this.dataService.message.next('Lo sentimos, ocurrió un error');
    });
  }

}
