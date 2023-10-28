import {HeaderItem} from "../../Core/interfaces/ui-elements";

export default function HeaderItem(props: HeaderItem) {
    const {title} = props
    return (
        <span className="header-item">{title}</span>
    )
}