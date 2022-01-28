export interface TimeListener {
    setTime(id: number, number: number): void;
    getTime(id: number): number;
}