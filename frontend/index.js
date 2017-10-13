;(function() {
  $.get("http://localhost:3000", data => {
    console.log(data)
    // console.log(gunplaCollection)

    data.map(item => {
      const id = item.id
      const name = item.name
      const gender = item.gender
      const education = item.education
      const age = item.age
      // console.log(id, model, year, price)

      const newRow = `
      <tr>
        <th scope="row">${id}</th>
        <td>${name}</td>
        <td>${gender}</td>
        <td>${education}</td>
        <td>${age}</td>
      </tr>
      `
      // console.log(newRow)

      $("#app-table-body").append(newRow)
    })
  })
})()
