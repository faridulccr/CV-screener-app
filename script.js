// candidatesData is an Array of objects that contains information about candidates
{
    const candidatesData = [
        {
            name: 'Rohan Das',
            age: 18,
            city: 'Kolkata',
            language: 'Python',
            framework: 'Django',
            image: 'https://randomuser.me/api/portraits/med/men/70.jpg'
        },
        {
            name: 'Faridul',
            age: 25,
            city: 'Panchagarh',
            language: 'Javascript',
            framework: 'React js',
            image: 'https://randomuser.me/api/portraits/med/men/72.jpg'
        },
        {
            name: 'Hridoy',
            age: 23,
            city: 'Thakurgaon',
            language: 'Javascript',
            framework: 'Node js',
            image: 'https://randomuser.me/api/portraits/med/men/73.jpg'
        },
        {
            name: 'Lamyea',
            age: 19,
            city: 'Rangpur',
            language: 'Go',
            framework: 'Go framwork',
            image: 'https://randomuser.me/api/portraits/med/women/75.jpg'
        },
        {
            name: 'Nusrat',
            age: 23,
            city: 'Rnagpur',
            language: 'C++',
            framework: 'learnig proccess',
            image: 'https://randomuser.me/api/portraits/med/women/77.jpg'
        },
        {
            name: 'Emran',
            age: 21,
            city: 'Dinajpur',
            language: 'Python',
            framework: 'Django',
            image: 'https://randomuser.me/api/portraits/med/men/78.jpg'
        }
    ];

    // get element from html
    let image = document.querySelector('#image img');
    let profileDiv = document.getElementById('profile');
    let nextBtn = document.getElementById('nextBtn');
    // let prevBtn = document.getElementById('prevBtn');

    // create a array iterator
    const cvIterator = (candidatesData) => {
        let count = 0;
        return function () {
            if (count < candidatesData.length){
                let dataObj = candidatesData[count];
                count++;
                return { value: dataObj, done: false };
            }
            else return {done:true};
        };
    };

    // create a next function
    const next = cvIterator(candidatesData); // it returns a object{value: obj, done: false}

    // create a show profile function
    const showProfile = (obj) => {
        if (obj){
            image.src = obj["image"];
            profileDiv.innerHTML = `<ul class="list-group  text-center">
                                    <li class="list-group-item">Name: ${obj["name"]}</li>
                                    <li class="list-group-item">Age: ${obj["age"]}</li>
                                    <li class="list-group-item">City: ${obj["city"]}</li>
                                    <li class="list-group-item">language: ${obj["language"]}</li>
                                    <li class="list-group-item">framework: ${obj["framework"]}</li>
                                </ul>`;
        } else {
            alert('This is the Last candidate');
            window.location.reload();
        };
    };
    showProfile(next().value);
    
    // prevBtn.addEventListener('click', ()=>{showProfile(prev())});
    nextBtn.addEventListener('click', () => { showProfile(next().value) });


}