
import './menu-list-item.scss';

const MenuListItem = ({menu, onAddToCard}) => {
    
        return (
            <li className="menu__item">
                <div className="menu__title">{menu.title}</div>
                <img 
                    className="menu__img" 
                    src={menu.url}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src='https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg';
                      }}
                    alt={menu.title}
                    ></img>
                <div className="menu__category">Category: <span>{menu.category}</span></div>
                <div className="menu__price">Price: <span>{menu.price}$</span></div>
                <button className="menu__btn" onClick={ () => onAddToCard()}>Add to cart</button>
            </li>
        )
}

export default MenuListItem;