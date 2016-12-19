// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  API?: string;
  ENV?: string;
  LoginUrl?: string;
  DashboardUrl?: string;
}

export const Config: EnvConfig = JSON.parse('<%= ENV_CONFIG %>');

