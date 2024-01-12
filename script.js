// this line capture all the element
const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// when we  press enter key it can take any random value
textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

// this method take input 1st &with the help of filter& map it will be  remove all the space & comma  refresh the array also
function createTags(input) {
    const tags = input.split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())
    
    tagsEl.innerHTML = ''
// this method is create a span & innertext it create tag appendchild in parent element

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// it will be random select within 100s & highlight it
function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

// this method for highlighting the tag
function highlightTag(tag) {
    tag.classList.add('highlight')
}

// this code for unhighlighting the tag
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}