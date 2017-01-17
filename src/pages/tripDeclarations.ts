
export class trip {
    links: tripLink;
    frequency: string;
    departure_place: place;
    arrival_place: place;
    price: price;
    price_with_commission: price;
    price_without_commission: price;
    commision: priceBase;
    seats_left: number;
    seats: number;
    duration: duration;
    distance: duration;
    permanent_id: string;
    car: car;
    viaggio_rosa: Boolean;
    is_comfort: boolean;
    freeway: boolean;
    answer_delay: number;
    booking_mode: string;
    booking_type: string;

    locations_to_display: string[];

    departure_date: Date;
    arrivalDate: Date;

    departureTimeFormatted: string;
    tripDurationHours: number;
}

export class tripLink {
    _self: string;
    _front: string;
    _threads: string;
}

export class place {
    city_name: string;
    address: string;
    latitude: Number;
    longitude: Number;
    country_code: string;
}

export class priceBase {
    value: number;
    currency: string;
    symbol: string;
    string_value: string;
}

export class price extends priceBase {
    price_color: string;
}
export class duration {
    value: number;
    unity: string;
}

export class car {
    model: string;
    make: string;
    comfort: string;
    comfort_nb_star: number;
}

export class TripsResponse {
    links: links;
    pager: pager;
    trips: trip[];
    top_trips: any;
    facets: facet[];
    distance: number;
    duration: number;
    recommended_price: number;
    savings: number;
    lowest_price: number;
    tracktor: string;
}

export class links {
    _self: string = "";
}

export class pager {
    page: number = 1;
    pages: number = 1;
    total: number;
    limit: number;
    departure_date: Date;

}

export class facetItem
{
    value: Number;
    count: number;
    is_selected: boolean;
}

export class facet{
    name: string;
    type: string;
    items: facetItem[];
}
