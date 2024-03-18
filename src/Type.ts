export type User = {
    profile: string,
    username: string,
    bio: string,
    followers: number,
    following: number,
    location: string,
}

export type Username = {
    // username: string,
    state: (user: string)=> void,
    // found: boolean,
    // userprofile: User
}

export type UserTab = Pick<User, "profile" | "username" | "bio"  >


