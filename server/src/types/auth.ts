export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginUserResponse {
    accessToken: string;
    refreshToken?: string;
    needsChangePassword: boolean | undefined;
}

export interface IRefreshTokenResponse {
    accessToken: string;
}
