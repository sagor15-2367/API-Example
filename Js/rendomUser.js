const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender')
    const nameTag = document.getElementById('name');

    genderTag.innerHTML = user.results[0].gender;
    nameTag.innerHTML = user.results[0].name.first + ' ' + user.results[0].name.last;

    console.log(user.results[0].gender);
    console.log(user.results[0].name.first);
}

loadUser();