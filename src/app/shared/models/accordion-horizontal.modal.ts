export interface AccordianHorizontalModel {
    name: string;
    id: number;
    isExpanded?: boolean;
    cardList: CardList[]
}

export interface CardList {
    batchNumber: string;
    brandName: string;
    manufactureStage:  string;
    imageLink: string;
    event: [];
}
