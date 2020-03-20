const test = QUnit.test;

test('normalizes whitespace', (assert) => {
    // Arrange
    const html = /*html*/`
            <div>
                <span>message</span>
            </div>
    `;
    const expected = /*html*/`
        <div>
                <span>message</span>
        </div>
    `;
    // Act
    // now built in as custom assert
    // Assert
    assert.htmlEqual(html, expected);
});
