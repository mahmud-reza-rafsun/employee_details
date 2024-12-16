const people = [
    {
        id: 1,
        name: 'Jon Doe',
        age: 30,
        occupation: 'Software Enginner',
        contact: {
            email: 'john.doe@developer.com'
        },
        address: {
            street: '123, Main St',
            city: 'San Francisco',
            state: 'CA',
            zip: '94105',
        },
        social: {
            twitter: '@johndoe',
        },
        hobbies: ["Coding", "Hiking", "Photography"],
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        occupation: 'Graphic Desingner',
        contact: {
            email: 'jane.smith@desingner.com',
            phone: '123-456-789',
        },
        hobbies: ["Drawing", "Traveling"],
    },
    {
        id: 3,
        name: 'Mark Johnson',
        age: 40,
        occupation: 'Marketing Manager',
        contact: {
            email: 'mark.johnson@market.com',
            phone: '123-456-7890'
        },
        address: {
            street: '789, Oak St',
            city: 'Chicago',
            state: 'IL',
            zip: '60607',
        },
        hobbies: ["Running", "Golf"],
    },
];

const peopleList = document.getElementById('people-list');
const personInfo = document.getElementById('person-info');

const renderPeopleList = (people) => {
    people.map((person) => {
        const li = document.createElement('li');
        li.classList.add("cursor-pointer", "text-white", "font-semibold", "bg-indigo-500","py-1", "px-3", "rounded-md");
        li.textContent = person.name;

        peopleList.appendChild(li)
        li.addEventListener('click', () => {
            handlePersonClick(person.id);
        })

    })
}


const displayPerson = (person) => {
    personInfo.classList.remove('hidden');
    document.getElementById('no-selection').classList.add('hidden');    
    personInfo.innerHTML =`
        <h2 class="text-xl font-bold bg-indigo-500 p-2 rounded-md mb-3">${person.name}</h2>
        <div class="bg-indigo-500 p-2 rounded-md">
            <p> <span class="font-bold">Age: </span> ${person.age}</p>
            <p> <span class="font-bold">Occupation: </span> ${person.occupation}</p>
            <p> <span class="font-bold">Email: </span> ${person.contact.email}</p>
            <p> <span class="font-bold">Street: </span> ${person?.address?.street || "N/A"}</p>
            <p> <span class="font-bold">City: </span> ${person?.address?.city || "N/A"}</p>
            <p> <span class="font-bold">State: </span> ${person?.address?.state || "N/A"}</p>
            <p> <span class="font-bold">Zip: </span> ${person?.address?.zip || "N/A"}</p>
            <p> <span class="font-bold">Twitter: </span> ${person?.social?.twitter || "N/A"}</p>
            <p> <span class="font-bold">Hobby: </span> ${person?.hobbies?.map((hobby) => hobby)}</p>
        </div>
    `;
}

const handlePersonClick = (id) =>{
    const person = people.find((p) => p.id == id);
    displayPerson(person);
}


renderPeopleList(people);