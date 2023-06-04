export type QueryString = {
  id?: string;
  name?: string;
  height?: number;
  width?: number;
  depth?: number;
  capacity?: number;
  status?: string;
};

export const objectReference: QueryString = {
  id: null,
  name: null,
  height: null,
  width: null,
  depth: null,
  capacity: null,
  status: null,
};
