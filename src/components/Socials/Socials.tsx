import config from "../../config.json";
import SocialItem from "./SocialItem";
import classes from "./Socials.module.scss"

export interface SocialItemTypes {
    brand: string,
    url: string
}

const Socials = () => {
    const socialItems: SocialItemTypes[] = config?.socials;
    return (
        <div className={classes.socials}>
            {socialItems &&
                socialItems.map(({brand, url}) =>
                    <SocialItem key={brand} brand={brand} url={url}/>
                )
            }
        </div>
    )
}
export default Socials