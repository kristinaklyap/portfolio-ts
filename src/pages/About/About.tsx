import config from "../../config.json";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import {BreadcrumbsInterface} from "../../models/Breadcrumbs";

import classes from "./About.module.scss";
import aboutImg from "../../assets/about/bg.png";

interface BlockItem {
    title: string;
    content: string
}

interface AboutProps {
    title: string;
    cv?: {
        title: string;
        file: string;
    };
    blocks?: BlockItem[];
    breadcrumbs?: BreadcrumbsInterface

}

const About = () => {
    const {title, cv, breadcrumbs, blocks}: AboutProps = config.pages?.about
    const cvFile = cv && require(`/src/assets/about/${cv.file}`)
    return (
        <div>
                <>
                    <div className={classes.about}>
                        <div className={classes.content}>
                            <div className={classes.title}>
                                <h1>{title}</h1>
                            </div>
                            {blocks &&
                                blocks.map(({title, content}, index) =>
                                    <div key={index} className={classes.block}>
                                        <h5>{title}</h5>
                                        <p>{content}</p>
                                    </div>)
                            }
                            {cv && <div className={classes.cv}>
                                <a href={cvFile} target={"_blank"} download>{cv.title}</a>
                            </div>}
                        </div>
                        <div className={classes.image}>
                            <img src={aboutImg} alt={"About image"}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
                                <clipPath id="t" clipPathUnits="objectBoundingBox">
                                    <path fill="rgb(58, 84, 87)"
                                          d="M0.987,0.374 C0.972,0.507,0.964,0.646,0.974,0.705 C0.979,0.723,0.985,0.751,0.978,0.782 C0.95,0.904,0.764,0.963,0.643,0.985 C0.464,1,0.34,0.984,0.278,0.943 C0.229,0.909,0.198,0.859,0.15,0.789 C0.096,0.704,0.04,0.631,0.022,0.567 C-0.019,0.423,-0.004,0.223,0.104,0.147 C0.175,0.101,0.264,0.137,0.344,0.118 C0.459,0.092,0.485,0.028,0.598,0.006 C0.745,-0.018,0.918,0.035,0.98,0.147 C1,0.212,0.999,0.27,0.987,0.374"/>
                                </clipPath>
                            </svg>
                        </div>
                    </div>
                    {breadcrumbs &&
                        <Breadcrumbs pageTitle={breadcrumbs.pageTitle} pageNo={breadcrumbs.pageNo}/>
                    }
                </>

        </div>
    )
}
export default About