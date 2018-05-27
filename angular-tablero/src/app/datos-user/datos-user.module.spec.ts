import { DatosUserModule } from './datos-user.module';

describe('DatosUserModule', () => {
  let datosUserModule: DatosUserModule;

  beforeEach(() => {
    datosUserModule = new DatosUserModule();
  });

  it('should create an instance', () => {
    expect(datosUserModule).toBeTruthy();
  });
});
