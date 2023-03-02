import {Link} from "react-router-dom";
import {ProjectInterface} from "../../models/ProjectInterface"
import classes from "./Projects.module.scss";

interface ProjectsProps {
    projects: ProjectInterface[];
    indexOfFirstPost: number;
}

const Projects: React.FC<ProjectsProps> = ({projects, indexOfFirstPost}) => {
    return (
        <div className={classes.projects}>
            {projects && projects.map(({image}: ProjectInterface, index: number) => {
                const currentProjectId = indexOfFirstPost + index
                const imgSrc: string = require(`/src/assets/portfolio/${image}`);
                return (
                    <div key={index}>
                        <Link to={`/portfolio/${currentProjectId}`}>
                            <img src={imgSrc}/>
                        </Link>
                    </div>
                )

            })}
        </div>
    )
}
export default Projects