
// ===== GET example: Fetch repos =====
document.addEventListener('DOMContentLoaded',()=>{
  const repoForm = document.getElementById('repoForm');
  if(repoForm){
    repoForm.addEventListener('submit', async e=>{
      e.preventDefault();
      const user = document.getElementById('ghUser').value.trim();
      const list = document.getElementById('repoList');
      list.textContent='Cargando...';
      const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=5`);
      const data = await res.json();
      list.innerHTML='';
      data.forEach(repo=>{
        const li=document.createElement('li');
        li.innerHTML=`<a href="${repo.html_url}" target="_blank">${repo.name}</a> ★${repo.stargazers_count}`;
        list.appendChild(li);
      });
    });
  }

  // ===== PUT example: JSONPlaceholder =====
  const putForm = document.getElementById('putForm');
  if(putForm){
    putForm.addEventListener('submit', async e=>{
      e.preventDefault();
      const id=document.getElementById('resId').value;
      const title=document.getElementById('newTitle').value;
      const result=document.getElementById('putResult');
      result.textContent='Actualizando...';
      const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({id,title})
      });
      const data=await res.json();
      result.textContent=JSON.stringify(data,null,2);
    });
  }
});
