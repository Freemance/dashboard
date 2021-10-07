export interface ApolloLinkJWT {}
export interface ApolloLinkJwtArgs {
  apiUrl: string;
  getTokens: () => RefreshTokenType;
  fetchBody: () => {};
  fetchHeaders?: () => {};
  onRefreshComplete: (data: any) => RefreshCompleteType;
  debugMode: boolean = false;
}

export type RefreshCompleteType = {
  newAccessToken: string;
  newRefreshToken: string;
};
export type RefreshTokenType = {
  accessToken?: string;
  refreshToken?: string;
};

export type FetchDataArgs = {
  apiUrl: string;
  headers: any;
  body: any;
};

export type RefreshTokenToBodyArgs = {
  body: any;
  refreshToken: string;
};
