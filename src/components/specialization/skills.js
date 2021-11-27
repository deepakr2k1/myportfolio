import H2 from '../UI/H2'
import './style.css'

const Skills = (props) => {
    return (
        <>
            <H2 styles={{margin: "50px auto 20px"}}>{props.tech.heading}</H2>
            <div className="flexRow inline-flex images-grp">
            {
                props.tech.icons.map((src, i) =>
                    <img title={props.tech.tooltip[i]} src={src} height="100px" alt="Framework Icon" />
                )
            }
            </div>
        </>
    )
}
export default Skills;