import config from "../../config.json";

const NotFound = () => {
    const title: string = config.pages?.not_found?.title;
    const content: string = config.pages?.not_found?.content;

    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}
export default NotFound