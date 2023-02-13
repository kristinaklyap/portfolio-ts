import {Link} from "react-router-dom";
import {ProjectInterface} from "../../models/ProjectInterface"
import classes from "./Projects.module.scss";

interface ProjectsProps {
    projects: ProjectInterface[]
}

const Projects: React.FC<ProjectsProps> = ({projects}) => {
    return (
        <div className={classes.projects}>
            {projects && projects.map(({image}: ProjectInterface, index: number) => {
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