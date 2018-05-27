import { DatosEntrantesModule } from './datos-entrantes.module';

describe('DatosEntrantesModule', () => {
  let datosEntrantesModule: DatosEntrantesModule;

  beforeEach(() => {
    datosEntrantesModule = new DatosEntrantesModule();
  });

  it('should create an instance', () => {
    expect(datosEntrantesModule).toBeTruthy();
  });
});
