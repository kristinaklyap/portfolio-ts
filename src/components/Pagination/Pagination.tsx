import classes from "./Pagination.module.scss"
import {useEffect} from "react";
import {useWindowSize} from "../../hooks/use-windows-size";

interface PaginationProps {
    postPerPage: number;
    totalPosts: number;
    currentPage: number;
    totalPage: (number: number) => void;
    paginate: (number: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({postPerPage, totalPosts, paginate, totalPage, currentPage}) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }

    const onClickHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
        const targetElement = event.target as HTMLSpanElement
        const number: string = targetElement.getAttribute('data-number')!
        paginate(+number)
    }

    const [width] = useWindowSize()
    useEffect(() => {
        totalPage(pageNumbers.length)
    }, [width, pageNumbers])

    return (
        <div className={classes.pagination}>
            {pageNumbers.map(number =>
                <span className={`${classes.item} ${(+currentPage === +number) && classes.active}`}
                      key={number}
                      data-number={number}
                      onClick={onClickHandler}/>)}
        </div>
    )
}
export default Pagination