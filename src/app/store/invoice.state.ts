export interface PaperWorkState<T extends RequiredBaseType> {
  entities: T[];
  selectedId: number;
}

export interface RequiredBaseType {
  id: number,
  positions?: any[]
};
