import {type FC} from "react";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  return (
    <div>
      <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        Назад
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Вперед
      </button>
    </div>
  );
};
