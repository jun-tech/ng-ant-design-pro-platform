import { ErrorsModule } from './errors.module';

describe('ErrorsModule', () => {
  let errorsModule: ErrorsModule;

  beforeEach(() => {
    errorsModule = new ErrorsModule();
  });

  it('should create an instance', () => {
    expect(errorsModule).toBeTruthy();
  });
});
