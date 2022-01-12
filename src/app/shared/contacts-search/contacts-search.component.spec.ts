import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/pages/quotes/components/table-loaded-sites/table-loaded-sites.component.spec.ts
import { TableLoadedSitesComponent } from './table-loaded-sites.component';

describe('TableLoadedSitesComponent', () => {
  let component: TableLoadedSitesComponent;
  let fixture: ComponentFixture<TableLoadedSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLoadedSitesComponent ]
========
import { ContactsSearchComponent } from './contacts-search.component';

describe('ContactsSearchComponent', () => {
  let component: ContactsSearchComponent;
  let fixture: ComponentFixture<ContactsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsSearchComponent ]
>>>>>>>> 95a12bfe25e71c864d51029ac484312eef72cd01:src/app/shared/contacts-search/contacts-search.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/pages/quotes/components/table-loaded-sites/table-loaded-sites.component.spec.ts
    fixture = TestBed.createComponent(TableLoadedSitesComponent);
========
    fixture = TestBed.createComponent(ContactsSearchComponent);
>>>>>>>> 95a12bfe25e71c864d51029ac484312eef72cd01:src/app/shared/contacts-search/contacts-search.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
