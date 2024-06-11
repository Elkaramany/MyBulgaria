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
    categories: CategoryType[];
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

type LocationType = {
    [key: string]: any; // Adjust the type according to the actual structure of the location object
};

type FactType = {
    [key: string]: any; // Adjust the type according to the actual structure of the facts array
};

type PoiType = {
    Avatar: string | null;
    Gallery: any[]; // Adjust the type according to the actual structure of the Gallery array
    category: number;
    created_at: string;
    description: string;
    difficulty: number;
    facts: FactType[];
    id: number;
    location: LocationType;
    mountain: string | null;
    name: string;
    province: string | null;
    published_at: string;
    updated_at: string;
    visible: boolean;
};

export type CategoryType = {
    created_at: string;
    id: number;
    name: string;
    pois: PoiType[];
    published_at: string;
    testpois: any[]; // Adjust the type according to the actual structure of the testpois array
    updated_at: string;
};

type CityType = {
    Name: string;
    created_at: string;
    id: number;
    province: number;
    published_at: string;
    updated_at: string;
};

type TestPoiType = {
    Avatar: LocationType; // Adjust the type according to the actual structure of the Avatar object
    Gallery: any[]; // Adjust the type according to the actual structure of the Gallery array
    created_at: string;
    description: string;
    difficulty: number;
    facts: FactType[];
    id: number;
    location: LocationType;
    mountain: string | null;
    name: string;
    province: number;
    published_at: string;
    updated_at: string;
    visible: boolean;
};

export type ProvinceType = {
    Name: string;
    cities: CityType[];
    created_at: string;
    id: number;
    pois: PoiType[];
    published_at: string;
    testpois: TestPoiType[];
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
