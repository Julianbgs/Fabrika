import { HeaderItemInterface} from "../../Core/interfaces/ui-elements";
import './HeaderItem.css';

export default function HeaderItem(props: HeaderItemInterface) {
    const {title, isHover, isLastItem} = props
    return (
        <span className={`header__item ${isHover ? 'hover' : ''} ${isLastItem ? 'header__item--no-margin' : ''}`}>{title}</span>
    )
}