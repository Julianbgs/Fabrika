import { HeaderItemInterface} from "../../Core/interfaces/ui-elements";
import './HeaderItem.css';

export default function HeaderItem(props: HeaderItemInterface) {
    const {title, isHover} = props
    return (
        <span className={`header-item ${isHover ? 'hover' : ''}`}>{title}</span>
    )
}