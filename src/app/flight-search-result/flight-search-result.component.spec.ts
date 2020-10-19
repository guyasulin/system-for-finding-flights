import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SortFlightLengthPipe } from '../pipes/sort-flight-length.pipe';
import { FilterPricePipe } from '../pipes/sort-price.pipe';
import { FlightsService } from '../services/flights.service';
import { FlightSearchResultComponent } from './flight-search-result.component';


describe('FlightSearchResultComponent', () => {
  let component: FlightSearchResultComponent;
  let fixture: ComponentFixture<FlightSearchResultComponent>;
  let service:FlightsService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         FlightSearchResultComponent ,
         FilterPricePipe,
         SortFlightLengthPipe,
        ],
        providers: [
          { provide: FlightsService }
        ],
        imports: [
          FormsModule,
          RouterTestingModule,
          AngularMaterialModule,
          BrowserAnimationsModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(()=>{
    service = TestBed.inject(FlightsService);
    fixture = TestBed.createComponent(FlightSearchResultComponent);
    component = fixture.componentInstance;
  
  });

  it('should create', () => {
    // fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

