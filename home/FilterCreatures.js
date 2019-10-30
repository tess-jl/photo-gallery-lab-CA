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
        const creatureArray = this.props.creatures; 

        const keywordArray = creatureArray.map(creature => creature.keyword); 
        const uniqueKeywordArry = [...new Set(keywordArray)]; 
        const uniqueKeywordHTMLElementStrings = uniqueKeywordArry.map(keyword => `<option value="${keyword}">${keyword}</options>`);

        let keywordSelectString = '';
        
        uniqueKeywordHTMLElementStrings.forEach(string => {
            keywordSelectString += string; 
        });

        return `
        <div>
            <select id="creature-keyword-filter">
            <option value="" selected>All Keywords</options>
            ${keywordSelectString}
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