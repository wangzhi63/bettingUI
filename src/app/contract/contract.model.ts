export interface Contract {
    id?: number;
    title?: string;
    description?: string;
    assertionText: string;
    startDate: Date;
    endDate: Date;
    creatorId?: number;
}