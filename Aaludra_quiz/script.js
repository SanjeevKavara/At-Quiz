
const nextPage = () => {
    let user = document.getElementById('color').value;
    if(user=="")
    {
        alert('Enter valid name')
        return
    }
    
    localStorage.setItem('name',user);
    if(localStorage.getItem('leaderboard')==null) //if no leaderboard array create the array
    {
        const arr1 = []
        arr2 = JSON.stringify(arr1)
        localStorage.setItem('leaderboard',arr2)
    }
    window.location.href = './sec.html';
}