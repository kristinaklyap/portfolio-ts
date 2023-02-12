import {Link} from "react-router-dom";
import {ProjectItem} from "../../models/ProjectItem"
import classes from "./Projects.module.scss";

const Projects: React.FC<{ projects: ProjectItem[] }> = ({projects}) => {
    return (
        <div className={classes.projects}>
            {projects && projects.map(({image}: ProjectItem, index: number) => {
                const imgSrc: string = require(`/src/assets/portfolio/${image}`);
                return (
                    <div key={index}>
                        <Link to={`/portfolio/${index}`}>
                            <img src={imgSrc}/>
                        </Link>
                    </div>
                )

            })}
        </div>
    )
}
export default Projects