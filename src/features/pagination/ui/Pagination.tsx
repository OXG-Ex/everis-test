import {useUnit} from "effector-react";
import {type FC} from "react";
import {$page, $search, $total, pageChanged} from "../../../entities/product";

import "../styles/pagination.scss";

export const Pagination: FC = () => {
  const {search, page, total} = useUnit({
    page: $page,
    total: $total,
    search: $search,
  });

  const totalPages = Math.ceil(total / search.limit);

  return (
    <div className="pagination-row">
      <div className="pagination-text">
        Страница: {page} из {totalPages}
      </div>
      <div className="pagination-buttons">
        <button
          className="button"
          disabled={page <= 1}
          onClick={() => pageChanged(page - 1)}
        >
          Предыдущая
        </button>
        <button
          className="button"
          disabled={page >= totalPages}
          onClick={() => pageChanged(page + 1)}
        >
          Следующая
        </button>
      </div>
    </div>
  );
};
