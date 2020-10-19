import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FilterPipeDest, FilterPipeFrom } from '../pipes/sort-destinations .pipe';
import { SortFlightLengthPipe } from '../pipes/sort-flight-length.pipe';
import { FilterPricePipe } from '../pipes/sort-price.pipe';
import { FlightsService } from '../services/flights.service';
import { FlightSearchComponent } from './flight-search.component';

describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;
  let MockflightsService: FlightsService;
  let Mockroute: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSearchComponent ,
        FilterPricePipe,
        SortFlightLengthPipe,
        FilterPipeDest,
        FilterPipeFrom
      ],
      providers: [
        { provide: Router, useValue: Mockroute },
        { provide: FlightsService, useValue: FlightsServiceStub }
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
        AngularMaterialModule
      ]
    })
    .compileComponents();
  }));

  
  it('should be created', () => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    console.log("in created ");
    console.log(component);
      expect(component).toBeTruthy();
    });
});

class FlightsServiceStub {
  getFlights() {
    return this.getFlights();
  }
}