import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPostsComponent } from './quick-posts.component';

describe('QuickPostsComponent', () => {
  let component: QuickPostsComponent;
  let fixture: ComponentFixture<QuickPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
