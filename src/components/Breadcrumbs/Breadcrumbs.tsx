import classes from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
    pageNo: string;
    pageTitle: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({pageNo, pageTitle}) => {
    return (
        <div>
            <div className={classes.breadcrumbs}>
                <span className={classes.text}>{pageNo}</span>
                <span className={classes.line}/>
                <span className={classes.text}>{pageTitle}</span>
            </div>
        </div>
    )
}

export default Breadcrumbs