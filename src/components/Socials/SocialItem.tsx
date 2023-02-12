import classes from "./SocialItem.module.scss"

const SocialItem:React.FC<{brand:string; url:string}> = ({brand, url}) => {
    const itemBrand = brand ? classes[brand] : '';
    const isMail = brand === "mail"
    const aHref = isMail ? `mailto:${url}` : url
    const aTarget = isMail ? "_self" : "_blank"
    return (
        <>
            <a className={`${classes.socialItem} ${itemBrand}`} href={aHref} target={aTarget}>Link to {brand}</a>
        </>
    );
}
export default SocialItem