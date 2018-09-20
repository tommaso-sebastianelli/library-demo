import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ApiService } from './api.service';
import { TokenService } from '../auth/token.service';
import { TokenServiceStub } from '../auth/token.stub';
import { AuthService, AuthServiceConfig } from '../../../assets/libs/angularx-social-login-master';
import { IVolume } from './ivolume';
import { VolumeStub } from '../volume/volume.stub';
import { VolumeListStub } from '../volume-showcase/volume-list.stub';
import { IVolumeList } from './ivolume-list';
import { IBookshelf } from './ibookshelf';
import { IBookshelfList } from './ibookshelf-list';

describe('ApiService', () => {
	let service: ApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpModule,
			],
			providers: [
				ApiService,
				{
					provide: TokenService,
					useValue: TokenServiceStub
				},
				{
					provide: AuthService,
					useValue: AuthServiceConfig
				},
				MockBackend,
				{
					provide: Http,
					useFactory: (backend, options) => new Http(backend, options),
					deps: [MockBackend, BaseRequestOptions]
				},
				BaseRequestOptions
			],
		});

		service = TestBed.get(ApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return a volume object', inject([ApiService, MockBackend], (service: ApiService, mockBackend) => {
		const response = VolumeStub;

		mockBackend.connections.subscribe((connection) => {
			connection.mockRespond(new Response(new ResponseOptions({
				body: JSON.stringify(response)
			})));
		});


		const bookId = 'yH35dGtd';
		service.volumeGet(bookId).subscribe((data: IVolume) => {
			expect(data.kind).toMatch('volume');
			expect(data.volumeInfo.title).toMatch('test');
		});
	}));

	it('should return a volume list object', inject([ApiService, MockBackend], (service: ApiService, mockBackend) => {
		const response = VolumeListStub;

		mockBackend.connections.subscribe((connection) => {
			connection.mockRespond(new Response(new ResponseOptions({
				body: JSON.stringify(response)
			})));
		});

		service.volumeList("test").subscribe((data: IVolumeList) => {
			expect(data.kind).toMatch('volume-list');
			expect(data.items.length).toEqual(1);
			expect(data.items[0].volumeInfo.title).toMatch('test');
		});
	}));

	it('should return a bookshelf object', inject([ApiService, MockBackend], (service: ApiService, mockBackend) => {
		const response = <IBookshelf>{
			id: 12345,
			title: 'test',
			kind: 'bookshelf'
		};

		mockBackend.connections.subscribe((connection) => {
			connection.mockRespond(new Response(new ResponseOptions({
				body: JSON.stringify(response)
			})));
		});
		let id = 'yH556TgdhY';
		service.bookshelfGet(id).subscribe((data: IBookshelf) => {
			expect(data.kind).toMatch('bookshelf');
			expect(data.id).toEqual(12345);
			expect(data.title).toMatch('test');
		});
	}));

	it('should return a bookshelf list object', inject([ApiService, MockBackend], (service: ApiService, mockBackend) => {
		const response = <IBookshelfList>{
			kind: 'bookshelf-list',
			items: [{
				id: 12345,
				title: 'test',
				kind: 'bookshelf'
			}]
		};

		mockBackend.connections.subscribe((connection) => {
			connection.mockRespond(new Response(new ResponseOptions({
				body: JSON.stringify(response)
			})));
		});
		service.bookshelfList().subscribe((data: IBookshelfList) => {
			expect(data.kind).toMatch('bookshelf-list');
			expect(data.items.length).toEqual(1);
			expect(data.items[0].title).toMatch('test');
		});
	}));

	it('should return a bookshelf volume list object', inject([ApiService, MockBackend], (service: ApiService, mockBackend) => {
		const response = VolumeListStub;

		mockBackend.connections.subscribe((connection) => {
			connection.mockRespond(new Response(new ResponseOptions({
				body: JSON.stringify(response)
			})));
		});

		let id = 12345;
		service.bookshelfVolumeList(id).subscribe((data: IVolumeList) => {
			expect(data.kind).toMatch('volume-list');
			expect(data.items.length).toEqual(1);
			expect(data.items[0].volumeInfo.title).toMatch('test');
		});
	}));
});
