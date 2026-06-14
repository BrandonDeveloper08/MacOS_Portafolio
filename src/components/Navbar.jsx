import {navIcons, navLinks} from "#constants";
import dayjs from "dayjs";

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Brandon'z Portafolio</p>

                <ul>
                    {navLinks.map((item) => (
                        <li key={item.key}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img} alt={`icon-${id}`} />
                        </li>
                    ))}
                    <time>{dayjs().format('ddd MMM D h:mm A')}</time>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
