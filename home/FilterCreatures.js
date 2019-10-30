import Component from '../Component.js';

class FilterCreatures extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            const keywordFilterValue = document.getElementById('creature-keyword-filter').value;
            const hornsFilterValue = document.getElementById('creature-horns-filter').value;
            
            
            onFilter({
                keywordFilterValue,
                hornsFilterValue,
            });
        });
    }

    renderHTML() {
        return /*html*/`
        <div>
            <select id="creature-keyword-filter">
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
            <select id="creature-horns-filter">
                <option value="" selected>All horn numbers</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
            </select>
        </div>
        `;
    }
}

export default FilterCreatures;