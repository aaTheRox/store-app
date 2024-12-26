export type IFilterType = {
  result: ResultFiltersType | null;
  loading: boolean;
  error: string;
};

export type ResultFiltersType = {
  schema: {
    attributes: {
      size: {
        enum: any;
      };
      color: {
        enum: any;
      };
    };
  };
};
