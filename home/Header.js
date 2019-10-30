import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <nav>
            <img id="logo" src="./data/logo.jpg">
            <h1>Photo Gallery</h1>
        </nav>
        `;
    }
}

export default Header;