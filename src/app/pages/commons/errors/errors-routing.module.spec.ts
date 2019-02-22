import { ErrorsRoutingModule } from './errors-routing.module';

describe('ErrorsRoutingModule', () => {
  let errorsRoutingModule: ErrorsRoutingModule;

  beforeEach(() => {
    errorsRoutingModule = new ErrorsRoutingModule();
  });

  it('should create an instance', () => {
    expect(errorsRoutingModule).toBeTruthy();
  });
});
