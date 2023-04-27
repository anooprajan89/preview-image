export interface AccordianHorizontalModel {
    title: string;
    count: number;
    isExpanded: boolean;
    widget: WidgetModel[]
}

export interface WidgetModel {
    title: string;
}