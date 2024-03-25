export type User = {
    profile: string,
    username: string,
    bio: string,
    followers: number,
    following: number,
    location: string,
}

export type Repo = {
    name: string,
    description: string | null,
    license: null | boolean,
    forks_count: number,
    stargazers_count: number,
    updated_at: string,
    html_url: string,
}

export type Username = {
    state: (user: string)=> void,
}

export type UserTab = Pick<User, "profile" | "username" | "bio"> 


