import { HeaderItemInterface} from "../../Core/interfaces/ui-elements";
import './HeaderItem.scss';

export default function HeaderItem(props: HeaderItemInterface) {
    const {title, isHover, isLastItem} = props
    return (
        <div className={`header__item ${isHover ? 'hover' : ''} ${isLastItem ? 'header__item--no-margin' : ''}`}>{title}</div>
    )
}