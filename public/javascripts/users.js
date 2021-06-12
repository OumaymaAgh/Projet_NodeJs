var table =document.getElementById('body_table') ; 
var url='http://localhost:3000/users' ;
fetch(url).then((response)=> {
    return response.json() ;
}).then(data=>{
    /*console.log(data);*/
    var html ="";
    data.forEach(user => {
        var tr=`
    <tr>
          <th scope="row">${user.id}</th>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.password}</td>
          <td>${user.role}</td>
          <td>Date de modification</td>
        </tr>`
    html+=tr;
    });
    table.innerHTML = html ;
});


