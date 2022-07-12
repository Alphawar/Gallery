export interface IPost {
    alt_description: null | string
    blur_hash: string
    categories: []
    color: string
    created_at: string
    current_user_collections: []
    description: null | string
    height: number
    id: string
    liked_by_user: boolean
    likes: number
    links: ILinks
    promoted_at: null | string
    sponsorship: ISponsorship
    topic_submissions: Object
    updated_at: string
    urls: IUrls
    user: User
    width: number
}

interface ILinks {
    download: string
    download_location: string
    html: string
    self: string
}

interface ISponsorship {
    impression_urls: string[]
    sponsor: ISponsor
    tagline: string
    tagline_url: string
}

interface ISponsorLinks {
    followers: string
    following: string
    html: string
    likes: string
    photos: string
    portfolio: string
    self: string
}

interface IProfile_image {
    large: string
    medium: string
    small: string
}

interface ISocial {
    instagram_username: string
    paypal_email: string | null
    portfolio_url: string
    twitter_username: string | null
}

interface ISponsor {
    accepted_tos: boolean
    bio: string
    first_name: string
    for_hire: boolean
    id: string
    instagram_username: string
    last_name: null | string
    links: ISponsorLinks
    location: null | string
    name: string
    portfolio_url: string
    profile_image: IProfile_image
    social: ISocial
    total_collections: number
    total_likes: number
    total_photos: number
    twitter_username: null | string
    updated_at: string
    username: string
}

interface IUrls {
    full: string
    raw: string
    regular: string
    small: string
    small_s3: string
    thumb: string
}

type User = ISponsor