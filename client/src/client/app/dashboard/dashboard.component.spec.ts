// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { TestBed } from '@angular/core/testing';
// import { APP_BASE_HREF } from '@angular/common';

// import {
//     async
// } from '@angular/core/testing';
// import {
//     Route
// } from '@angular/router';
// import {
//     RouterTestingModule
// } from '@angular/router/testing';
// import { DashboardComponent } from './dashboard.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ToolbarComponent } from './shared/toolbar/toolbar.component';

// export function main() {

//     describe('App component', () => {

//         let config: Route[] = [
//             { path: '', component: HomeComponent },
//             { path: 'about', component: AboutComponent }
//         ];
//         beforeEach(() => {
//             TestBed.configureTestingModule({
//                 imports: [FormsModule, RouterTestingModule.withRoutes(config)],
//                 declarations: [TestComponent, ToolbarComponent,
//                     DashboardComponent, HomeComponent,
//                     AboutComponent],
//                 providers: [
//                     { provide: APP_BASE_HREF, useValue: '/' }
//                 ]
//             });
//         });

//         it('should build without a problem',
//             async(() => {
//                 TestBed
//                     .compileComponents()
//                     .then(() => {
//                         let fixture = TestBed.createComponent(TestComponent);
//                         let compiled = fixture.nativeElement;

//                         expect(compiled).toBeTruthy();
//                     });
//             }));
//     });
// }

// @Component({
//     selector: 'test-cmp',
//     template: '<app></app>'
// })

// class TestComponent {
// }


