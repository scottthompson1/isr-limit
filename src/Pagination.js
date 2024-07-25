import "./pagination.css";
import classNames from "classnames";

const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};
const getPagesCut = ({pagesCount, pagesCutCount, currentPage}) => {
    const ceiling = Math.ceil(pagesCutCount / 2);
    const floor = Math.floor(pagesCutCount / 2);
    console.log("Ceiling", ceiling)
    console.log("Floor", floor)

    if (pagesCount < pagesCutCount){
        return {start: 1, end: pagesCount+1};
    }
}

const PaginationItem = ({ page, currentPage, onPageChange, isDisabled }) => {
  const liClasses = classNames({
    "page-item": true,
    active: page === currentPage,
    disabled: isDisabled
  });
  return (
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className="page-link">{page}</span>
    </li>
  );
};

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pages.length;
  console.log('if 1', getPagesCut({pagesCount, pagesCutCount: 5, currentPage}))
  return (
    <ul className="pagination">
        <PaginationItem
          page='First'
          currentPage={currentPage}
          onPageChange={()=> onPageChange(1)}
          isDisabled={isFirstPage}
        />
         <PaginationItem
          page='Prev'
          currentPage={currentPage}
          onPageChange={()=> onPageChange(currentPage-1)}
          isDisabled={isFirstPage}
        />
      {pages.map((page) => (
        <PaginationItem
          page={page}
          key={page}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      ))}
      <PaginationItem
          page='Next'
          currentPage={currentPage}
          onPageChange={()=> onPageChange(currentPage+1)}
          isDisabled={isLastPage}
        />
        <PaginationItem
          page='Last'
          currentPage={currentPage}
          onPageChange={()=> onPageChange(pages.length)}
          isDisabled={isLastPage}
        />
    </ul>
  );
};
export default Pagination;