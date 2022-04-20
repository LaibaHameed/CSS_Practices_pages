let dataList = [
    {
        name : "Laiba",
        age : 18
    },
    {
        name : "Mariam",
        age : 19
    },
    {
        name : "Misbha",
        age : 17
    },
    {
        name : "Tuba",
        age : 20
    },
    {
        name : "Ayesha",
        age : 19
    },
    {
        name : "Smavia",
        age : 22
    }
];

const info = document.querySelector("#info");

let details = dataList.map(function(item)  {
    return '<div>' + item.name + " is " + item.age + " year old "  + '</div>'
})


info.innerHTML = details.join('\n');