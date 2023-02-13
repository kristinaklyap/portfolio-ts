import classes from "./Intro.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import introImg from "../../assets/intro/bg.png";
import config from "../../config.json";
import {BreadcrumbsInterface} from "../../models/Breadcrumbs";

interface IntroProps {
    title: string;
    content?: string;
    breadcrumbs: BreadcrumbsInterface

}

const Intro = () => {
    const {title, content, breadcrumbs}: IntroProps = config.pages?.intro
    return (
        <>
            <div className={classes.intro}>
                <div className={classes.image}>
                    <img src={introImg} alt={"Intro image"}/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
                        <clipPath id="t" clipPathUnits="objectBoundingBox">
                            <path
                                d="M0.633,0.002 C0.743,0.004,0.838,0.042,0.868,0.064 C0.932,0.111,0.979,0.185,1,0.27 C1,0.386,1,0.476,0.993,0.603 C0.956,0.797,0.965,0.927,0.889,0.982 C0.854,1,0.739,1,0.59,0.966 C0.517,0.941,0.411,0.868,0.305,0.862 C0.257,0.859,0.145,0.898,0.091,0.857 C0,0.789,0.011,0.577,0.063,0.432 C0.081,0.382,0.136,0.285,0.211,0.201 C0.271,0.134,0.34,0.079,0.377,0.06 C0.44,0.025,0.523,0,0.633,0.002"
                            />
                        </clipPath>
                    </svg>

                </div>
                <div className={classes.content}>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
            <Breadcrumbs pageTitle={breadcrumbs.pageTitle} pageNo={breadcrumbs.pageNo}/>
        </>
    )
}
export default Intro