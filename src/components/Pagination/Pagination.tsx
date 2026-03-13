type Props = {
  pages: number[];
  currentPage: number;
  isFirstPage: boolean;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  pages,
  currentPage,
  isFirstPage,
  onPageChange,
}) => {
  return (
    <ul className="pagination">
      {/* Prev link */}
      <li className={isFirstPage ? "page-item disabled" : "page-item"}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={isFirstPage}
          onClick={(e) => {
            e.preventDefault();
            if (!isFirstPage) onPageChange(currentPage - 1);
          }}
        >
          «
        </a>
      </li>

      {/* Page numbers */}
      {pages.map((page) => (
        <li
          className={page === currentPage ? "page-item active" : "page-item"}
          key={page}
        >
          <a
            data-cy="pageLink"
            className="page-link"
            href={`#${page}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(page);
            }}
          >
            {page}
          </a>
        </li>
      ))}

      {/* Next link */}
      <li
        className={
          currentPage === pages.length ? "page-item disabled" : "page-item"
        }
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={currentPage === pages.length}
          onClick={(e) => {
            e.preventDefault();
            if (currentPage !== pages.length) onPageChange(currentPage + 1);
          }}
        >
          »
        </a>
      </li>
    </ul>
  );
};
