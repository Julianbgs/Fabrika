import { HeaderItemInterface} from "../../Core/interfaces/ui-elements";
import './HeaderItem.css';

export default function HeaderItem(props: HeaderItemInterface) {
    const {title} = props
    return (
        <span className="header-item">{title}</span>
    )
}