export type QueryString = {
  id?: string;
  number?: string;
  typeId?: number;
  sectionMapIndexId?: number;
  status?: string;
};

export const objectReference: QueryString = {
  id: null,
  number: null,
  typeId: null,
  sectionMapIndexId: null,
  status: null,
};
