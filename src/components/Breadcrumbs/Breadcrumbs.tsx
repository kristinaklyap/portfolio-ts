import classes from './Breadcrumbs.module.scss';
import {BreadcrumbsInterface} from "../../models/Breadcrumbs";

const Breadcrumbs: React.FC<BreadcrumbsInterface> = ({pageNo, pageTitle}) => {
    return (
            <div className={classes.breadcrumbs}>
                <span className={classes.text}>{pageNo}</span>
                <span className={classes.line}/>
                <span className={classes.text}>{pageTitle}</span>
            </div>
    )
}

export default Breadcrumbs