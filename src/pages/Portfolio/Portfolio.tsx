import {useEffect, useState} from "react";
import {useSwipeable} from "react-swipeable";
import {useWindowSize} from "../../hooks/use-windows-size";
import config from "../../config.json";
import Projects from "../../components/Projects/Projects";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import {ProjectItem} from "../../models/ProjectItem";
import {BreadcrumbsInterface} from "../../models/Breadcrumbs";
import classes from "./Portfolio.module.scss"

interface PortfolioProps {
    projects: ProjectItem[];
    breadcrumbs?: BreadcrumbsInterface
}

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage, setPostsPerPage] = useState<number>(6);
    const [pageTotal, setPageTotal] = useState<number>(1);
    const {projects, breadcrumbs}: PortfolioProps = config.pages.portfolio


    //Pagination settings
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = projects.slice(indexOfFirstPost, indexOfLastPost)


    const [width] = useWindowSize()

    useEffect(() => {
        if (width <= 560) {
            setPostsPerPage(2)
        } else if (width < 768) {
            setPostsPerPage(4)
        } else {
            setPostsPerPage(6)
        }
    }, [width])


    const changePage = (direction: string): void => {
        const next = currentPage >= pageTotal ? 1 : currentPage + 1;
        const prev = currentPage <= 1 ? pageTotal : currentPage - 1;

        direction === "Left" ? setCurrentPage(next) : setCurrentPage(prev);
    }

    const handleTouch = useSwipeable({
        onSwiped: (eventData) => changePage(eventData.dir),
        touchEventOptions: {passive: false},
        trackMouse: true
    });


    return (
        <div className={classes.portfolio}>
            {
                projects && <div className={classes.portolio_container} {...handleTouch}>
                    <Projects projects={currentPosts}/>
                    <Pagination totalPage={setPageTotal}
                                paginate={setCurrentPage}
                                currentPage={currentPage}
                                postPerPage={postsPerPage}
                                totalPosts={projects.length}/>
                </div>
            }

            {breadcrumbs &&
                <Breadcrumbs pageTitle={breadcrumbs.pageTitle} pageNo={breadcrumbs.pageNo}/>
            }
        </div>
    )
}
export default Portfolio