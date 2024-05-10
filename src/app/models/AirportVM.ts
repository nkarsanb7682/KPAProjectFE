export interface AirportVM {
    id: number;
    code: string;
    name: string;
    flights: Flights[];
}

interface Flights {
    id: number
    cancelled: number;
    delayed: number;
    diverted: number;
    onTime: number;
    total: number;
}