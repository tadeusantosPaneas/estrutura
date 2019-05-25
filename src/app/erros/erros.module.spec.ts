import { ErrosModule } from './erros.module';

describe('ErrosModule', () => {
  let errosModule: ErrosModule;

  beforeEach(() => {
    errosModule = new ErrosModule();
  });

  it('should create an instance', () => {
    expect(errosModule).toBeTruthy();
  });
});
