import {useUnit} from "effector-react";
import {type FC} from "react";
import {$limit, $page, $total, pageChanged} from "../../../entities/product";

export const Pagination: FC = () => {
  const {limit, page, total} = useUnit({
    page: $page,
    total: $total,
    limit: $limit,
  });

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => pageChanged(page - 1)}>
        Назад
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button
        disabled={page === totalPages}
        onClick={() => pageChanged(page + 1)}
      >
        Вперед
      </button>
    </div>
  );
};
