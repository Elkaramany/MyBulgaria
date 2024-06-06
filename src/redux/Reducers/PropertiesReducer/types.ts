export type PropertyType = {
    id: number;
    name: string;
    description: string;
    province: {
        id: number;
        Name: string;
        published_at: string;
        created_at: string;
        updated_at: string;
    };
    visible: boolean;
    mountain?: Mountain; // Optional mountain property
    difficulty: number;
    published_at: string;
    created_at: string;
    updated_at: string;
    location: {
        id: number;
        x: number;
        y: number;
        z: number | null;
        allowed_error: number;
    };
    facts: Fact[];
    Gallery: GalleryImage[];
    Avatar: GalleryImage;
    categories: Category[];
    reviews: Review[];
};

type Mountain = {
    id: number;
    Name: string;
    Description: string | null;
    published_at: string;
    created_at: string;
    updated_at: string;
};

type Fact = {
    id: number;
    name: string;
    description: string;
};

export type GalleryImage = {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
        thumbnail: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            width: number;
            height: number;
            size: number;
            path: string | null;
            url: string;
        },
        medium: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            width: number;
            height: number;
            size: number;
            path: string | null;
            url: string;
        },
        large: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            width: number;
            height: number;
            size: number;
            path: string | null;
            url: string;
        },
        small: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            width: number;
            height: number;
            size: number;
            path: string | null;
            url: string;
        },
        // Other potential image formats (medium, large, small)
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any; // Can be any type since the data structure is unknown
    created_at: string;
    updated_at: string;
};

type Category = {
    id: number;
    name: string;
    published_at: string;
    created_at: string;
    updated_at: string;
};

export type Review = {
    id: number;
    user: number;
    score: number;
    description: string;
    testpois: number;
    published_at: string;
    created_at: string;
    updated_at: string;
    images: ReviewImage[];
};

type ReviewImage = {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
        thumbnail: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            width: number;
            height: number;
            size: number;
            path: string | null;
            url: string;
        },
        medium: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            width: number;
            height: number;
            size: number;
            path: string | null;
            url: string;
        },
        large: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            width: number;
            height: number;
            size: number;
            path: string | null;
            url: string;
        },
        small: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            width: number;
            height: number;
            size: number;
            path: string | null;
            url: string;
        },
        // Other potential image formats (medium, large, small)
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any; // Can be any type since the data structure is unknown
    created_at: string;
    updated_at: string;
};

export interface PropertiesState {
    loading: boolean
    properties: PropertyType[]
}

export const initialState: PropertiesState = {
    loading: false,
    properties: []
};
