// import { Component } from '@angular/core';
// import { TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import {
//   async
// } from '@angular/core/testing';
// import {
//   BaseRequestOptions,
//   ConnectionBackend,
//   Http, HttpModule
// } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';

// import { HomeModule } from './login.module';

// export function main() {
//   describe('Home component', () => {
//     // setting module for testing
//     // Disable old forms
//     beforeEach(() => {
//       TestBed.configureTestingModule({
//         imports: [FormsModule, RouterModule, HttpModule, HomeModule],
//         declarations: [TestComponent],
//         providers: [
//           BaseRequestOptions,
//           MockBackend,
//           {
//             provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
//               return new Http(backend, defaultOptions);
//             },
//             deps: [MockBackend, BaseRequestOptions]
//           },
//         ]
//       });
//     });

//     it('should work',
//       async(() => {
//         TestBed
//           .compileComponents()
//           .then(() => {
//             let fixture = TestBed.createComponent(TestComponent);
//             fixture.detectChanges();

//             let homeInstance = fixture.debugElement.children[0].componentInstance;
//             let homeDOMEl = fixture.debugElement.children[0].nativeElement;
//           });

//       }));
//   });
// }

// @Component({
//   selector: 'test-cmp',
//   template: '<sd-home></sd-home>'
// })
// class TestComponent { }