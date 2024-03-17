export type User = {
    Profile: string,
    Username: string,
    Bio: string,
    Followers: number,
    Following: number,
    Location: string,
}

export type Username = {
    username: string,
    state: (val: any)=> void,
    found: boolean,
    userprofile: User
}

