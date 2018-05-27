import { AppRoutingUsersModule } from './app-routing-users.module';

describe('AppRoutingUsersModule', () => {
  let appRoutingUsersModule: AppRoutingUsersModule;

  beforeEach(() => {
    appRoutingUsersModule = new AppRoutingUsersModule();
  });

  it('should create an instance', () => {
    expect(appRoutingUsersModule).toBeTruthy();
  });
});
