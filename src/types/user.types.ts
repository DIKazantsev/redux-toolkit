export interface IUser {
    id: number,
    name: string
}

export interface IInitialState {
    isLoading: boolean,
    error: string | null,
    user: IUser
}