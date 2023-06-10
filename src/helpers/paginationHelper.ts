import { SortOrder } from 'mongoose';

type IOption = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: SortOrder;
};

const calculatePagination = (
  option: IOption
): {
  page: number;
  limit: number;
  skip: number;
  sortBy?: string;
  sortOrder?: SortOrder;
} => {
  const page = Number(option.page) || 1;
  const limit = Number(option.limit) || 10;
  const skip = (page - 1) * limit;

  const sortBy = option.sortBy || 'createdAt';
  const sortOrder = option.sortOrder || 'desc';

  return { page, limit, skip, sortBy, sortOrder };
};

export const paginationHelpers = { calculatePagination };
