import Component from '../Component.js';

class FilterCreatures extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        return /*html*/`
        <select class="creature-type-filter">
            <option value="" selected>All Keywords</option>
            <option value="narwhal">narwhal</option>
            <option value="rhino">rhino</option>
            <option value="unicorn">unicorn</option>
            <option value="unilego">unilego</option>
            <option value="triceratops">triceratops</option>
            <option value="markhor">markhor</option>
            <option value="mouflon">mouflon</option>
            <option value="addax">addax</option>
            <option value="chameleon">chameleon</option>
            <option value="lizard">lizard</option>
            <option value="dragon">dragon</option>
        </select>
        `;
    }
}

export default FilterCreatures;