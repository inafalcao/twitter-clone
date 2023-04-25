export interface UserType {
    profileImage?: string
    name: string
    userName: string
}

export interface PostType {
    user: UserType
    date: string
    text: string // TODO: handle texts with links.
}
