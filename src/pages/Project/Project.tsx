import {NavLink, useParams} from "react-router-dom";
import ProjectItem from "../../components/Projects/ProjectItem";

import classes from "./Project.module.scss";

import config from "../../config.json";
import NotFound from "../../components/NotFound/NotFound";

const Project = () => {
    const {id} = useParams<{ id?: string }>();
    const projectLen = config.pages.portfolio.projects.length

    let isProject = false;
    if(id && +id < projectLen) {
        isProject = true
    }
    return (
        <>
            <NavLink to={"/portfolio"} className={classes.back}>back</NavLink>
            {id && isProject &&
                <ProjectItem project_id={+id}/>}

            {!isProject && <NotFound />}
        </>
    )
}
export default Project