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
          <td>${user.createdAt}</td>
          <td>${user.updatedAt}</td>
          <td><input type="image" id=${user.id} width="30" height="30"   src="images/modifier.jpg" ></td>
          <td><input type="image" id=${user.id} width="30" height="30"  src="images/supprimer.jpg" ></td>
          
        </tr>`
    html+=tr;
    });
    table.innerHTML = html ;
});
function supprimer(id){
    console.log(id);
  }
  function modifier(user){
    console.log('modifier');
  }


