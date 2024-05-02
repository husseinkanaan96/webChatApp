import { TestBed } from '@angular/core/testing';

import { ChatAppServicesService } from './chat-app-services.service';

describe('ChatAppServicesService', () => {
  let service: ChatAppServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatAppServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
