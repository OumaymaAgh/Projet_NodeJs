function showPaginatedUsers(){
    var table = document.getElementById('body_table') ; 
    var url='http://localhost:3000/users' ;
    fetch(url).then((response)=> {
        return response.json() ;
    }).then(data=>{
       
        var html ="";
        data.forEach(user => {
            var tr=`
        <tr>
              <td scope="row">${user.id}</td>
              <td>${user.username}</td>
              <td>${user.email}</td>
              <td>${user.password}</td>
              <td>${user.role}</td>
              <td>${user.createdAt}</td>
              <td>${user.updatedAt}</td>
              <td><input type="image" id=${user.id} class ="img_modifier" oncklick="modifier()" width="30" height="30"   src="images/modifier.jpg" ></td>
              <td><input type="image" id=${user.id} class ="img_supprimer" oncklick="supprimer(${user.id})" width="30" height="30"  src="images/supprimer.jpg" ></td>
            </tr>`
        html+=tr;
        });
        table.innerHTML  = html ;
    });
}
showPaginatedUsers(); 
function supprimer(id){
  //clearMsgs() ; 
  console.log("success2");
  fetch(`http://localhost:3000/users/${id}`,{method :"DELETE",headers:headers()})
  .then(handleErrors).then(()=>{
      console.log("success2");
      showPaginatedUsers(); 
      showMsg(`user with id ${id} deleted successfully !`,"succcess");
  })
  }
  function modifier(event){

  }


