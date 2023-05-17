const cozy = [{tea: 'flavors'},
{tea: 'tea'},
{tea: 'tea cozy'},
{tea: 'Fall Berry Blitz'},
{tea: 'Spiced Rum tea'},
{tea: 'Myrtle Ave Tea'},
{tea: 'Bedford Bizarre Tea'},
{tea: 'tea of the month'},
{tea: 'donuts'},
{tea: 'tea leaves'},
{tea: 'steep'},
{tea: 'hours of operation'},
{tea: 'hours'},
{tea: 'locations'},
{tea: 'stores'},
{tea: 'contact'},
{tea: 'mission'},
{tea: 'teabags'},
{tea: 'tea bags'},
]

const searchInput = document.querySelector('.input')

searchInput.addEventListener("input", (e) => 
{
    let value = e.target.value
    if (value && value.trim().length > 0)
    {
        value = value.trim().toLowerCase()
    } else { }})

    function setList(results){

        for (const find of results){
            
            const resultItem = document.createElement('li')
            resultItem.classList.add('result-item')
            const text = document.createTextNode(find.tea)
            resultItem.appendChild(text)
            list.appendChild(resultItem)
    }

    if (results.length === 0 ){
        noResults()
    }
}


searchInput.addEventListener("input", (e) => {
    let value = e.target.value

    if (value && value.trim().length > 0){
         value = value.trim().toLowerCase()
         setList(cozy.filter(find => {
            return find.tea.includes(value)
         }))}})

        function noResults(){
            const error = document.createElement('li')
            const text = document.createTextNode('No results found. Sorry!')
            error.appendChild(text)
            list.appendChild(error)
}

