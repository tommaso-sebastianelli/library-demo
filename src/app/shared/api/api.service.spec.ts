import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { TokenService } from '../auth/token.service';
import { TokenServiceStub } from '../auth/token.stub';
import { AuthService, AuthServiceConfig } from '../../../assets/libs/angularx-social-login-master';
import { Http, BaseRequestOptions } from '@angular/http';
import { IVolume } from './ivolume';
import { VolumeStub } from '../volume/volume.stub';
import { MockBackend } from '@angular/http/testing';

describe('ApiService', () => {
	let service: ApiService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
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
				BaseRequestOptions,
				{
					provide: Http,
					useFactory: (backend, options) => new Http(backend, options),
					deps: [MockBackend, BaseRequestOptions]
				}
			],
		});

		service = TestBed.get(ApiService);
		httpMock = TestBed.get(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return a volume object', () => {
		const bookId = 'yH35dGtd';
		service.volumeGet(bookId).subscribe((data: IVolume) => {
			expect(data.volumeInfo.title).toMatch('test');
		});

		const req = httpMock.expectOne(`${service.api_url}${service.paths.volumes}/${bookId}?key=${service.api_key}`, 'call to api');
		expect(req.request.method).toBe('GET');

		req.flush(<IVolume>VolumeStub);

		httpMock.verify();
	});
});
