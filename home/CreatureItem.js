import Component from '../Component.js';

class CreatureItem extends Component {
    renderHTML() {
        const { title, description, url, keyword, horns } = this.props.creature;

        return /*html*/`
            <li class="creature-item">
                <div class="info-container">
                    <h2>${title}</h2>
                    <p class="creature-type">${keyword}</p>
                </div>
                <div class="image-container">
                    <img src="${url}" alt="${title} image">
                </div>
                <p class="num-horns">${horns}</p>
                <p class="description">${description}</p>
            </li>
        `;
    }
}

export default CreatureItem;