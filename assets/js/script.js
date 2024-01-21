
function findUnivercity() {
    var uni = document.getElementById("search").value
    var url = `http://universities.hipolabs.com/search?name=${uni}`

    var resBox = document.querySelector(".resBox")
    resBox.textContent = ""

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.length)

            if (data.length == 0) {
                alert("No Data In Database")
            } else {
                data.forEach(x => {
                    console.log(x.name)

                    var res = document.createElement('div')

                    var h3 = document.createElement('h3')
                    h3.textContent = x.country
                    res.appendChild(h3)

                    var h2 = document.createElement('h2')
                    h2.textContent = x.name
                    res.appendChild(h2)


                    resBox.appendChild(res)

                    res.classList.add("res")


                });
            }


        })
        .catch(err => console.log(err))
}