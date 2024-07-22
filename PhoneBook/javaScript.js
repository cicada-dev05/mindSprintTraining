{
  // // // // var count = 0
  // // // // function addTask() {
  // // // //     var task = document.getElementById('inputField').value
  // // // //     if (task === '') {
  // // // //         alert('Please enter a task!');
  // // // //         return;
  // // // //     }
  // // // //     console.log(task)
  // // // //     taskAdd(task)
  // // // // }
  // // // // function taskAdd(task) {
  // // // //     console.log(task)
  // // // //     const taskList = document.getElementById('taskList');
  // // // //     taskList.innerHTML=""
  // // // //     var li = document.createElement('li')
  // // // //     // var li1 = document.createElement('li')
  // // // //     li.innerHTML = `
  // // // //     <h3>${task}</h3>
  // // // //     <button id='${count}' onclick="removeTask(${count})>Remove Task</button>`
  // // // //     taskList.appendChild(li)
  // // // //   }
  // // // function checkFunction() {
  // // //   var mp = new Map();
  // // //   v = document.getElementById("text").value;
  // // //   console.log(v);
  // // //   v = v.split("");
  // // //   for (const indx of v) {
  // // //     if (mp.has(indx)) {
  // // //       mp.set(indx, mp.get(indx) + 1);
  // // //     } else mp.set(indx, 1);
  // // //   }
  // // //   let html = ''
  // // //   console.log(mp);
  // // // }
  // // // let data = []
  // // // function fetchData(cb) {
  // // //     setTimeout(() => {
  // // //         data = [1,2,3,3,45,5,6];
  // // //     console.log('data fetched');
  // // //     cb();
  // // //     }, 3000);
  // // // }
  // // // function display(){
  // // //     console.log(data);
  // // // }
  // // // fetchData(display)
  // // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // // console.log(arr);
  // // arr = arr.map((i) => i * 3);
  // // console.log(arr);
  // // var arrNew = arr.filter((i) => i % 2 == 0);
  // // console.log(arrNew);
  // // var arrNew = arr.filter((i) => i % 2 !== 0);
  // // console.log(arrNew);
  // // console.log(arr.find((i) => i == 3));
  // // console.log(arr.findIndex((i) => i == 9));
  // // arr.forEach(i => {
  // //     console.log(i);
  // // });
  // // console.log(arr.reduce((acc,curr)=>acc+curr,0))
  // // const age = parseInt(prompt("enter your Age"));
  // // const promise = new Promise((resolve, reject) => {
  // //   if (age >= 18) {
  // //     resolve("valid");
  // //   } else {
  // //     reject("not valid");
  // //   }
  // // });
  // // promise
  // //   .then((resp) => resp.toUpperCase())
  // //   .then((resp) => console.log(resp))
  // //   .catch((err) => console.log(err));
  // async function getData(){
  //     try {
  //         const result = await fetch('https://jsonplaceholder.typicode.com/users')
  //         const json = await result.json()
  //         console.log(json);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  // getData()
  // function fetchFun() {
  //     const p = fetch('https://jsonplaceholder.typicode.com/users')
  //     p
  //     .then(res=> res.json())
  //     .then(res=>console.log(res))
  //     .catch(err=>console.log(err))
  // }
  // fetchFun()
  // function displayImage(url) {
  //     console.log(url);
  //     let html = `
  //     <h1>${url}</h1>
  //     <img src ='${url}' alt='hello world'>
  //     `
  //     document.querySelector('#imgTag').innerHTML = html
  //   }
  //   displayImage('https://www.bing.com/th?id=OIP.G37tgeQqSNt7v2oPfj9ltQHaE7&w=174&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2');
}

// function displayImage(data) {
//     let html = `
// <img src ='${data}' alt='hello world'>
// `;

//     document.querySelector("#imgTag").innerHTML = html;
//   }
//   displayImage('https://apod.nasa.gov/apod/image/2407/M24-HaLRGB-RC51_1024.jpg');

class Contact {
  constructor(id, name, pNumber) {
    this.id = id;
    this.name = name;
    this.pNumber = pNumber;
  }
}

class phoneBook {
  constructor() {
    this.contactArray = [];
  }

  addContact(contact) {
    // console.log(contact);
    this.contactArray.push(contact);
    // console.log(this.contactArray);
  }

  getAllContact() {
    // console.log(this.contactArray);
    return this.contactArray;
  }
}

const pBook = new phoneBook();
function addContactDetails(event) {
  event.preventDefault();
  const name = document.getElementById("nameInput").value;
  const pNumber = document.getElementById("numberInput").value;
  // console.log(name, pNumber);
  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  // console.log(timestamp);
  const contactDetail = new Contact(timestamp, name, pNumber);
  pBook.addContact(contactDetail);
  displayContact();
}

function displayContact() {
  const Array = pBook.getAllContact();
  console.log(Array);
  let html = "";
  for (const i of Array) {
    console.log(i.id);
    html += `
    <tr>
    <td>${i.id}</td>
    <td>${i.name}</td>
    <td>${i.pNumber}</td>
    <td> 
    <button class="btn btn-danger" id="${i.id}" onclick="deleteContact(${i.id})">Delete</button> 

    <button class="btn btn-secondary" id="${i.id}" onclick="updateContact(${i.id})">Update</button>
    </td>
    </tr>`;
    document.querySelector("#tableContent").innerHTML = html;
  }
}

function deleteContact(indx) {
  // console.log(indx);
  // console.log(pBook.contactArray);
  pBook.contactArray = pBook.contactArray.filter((itr) => indx != itr.id);
  console.log(pBook.contactArray.length);
  if (pBook.contactArray.length == 0) 
    location.reload();
  // console.log(pBook.contactArray);
  displayContact();
}

function updateContact(indx) {
  // console.log(indx);
  // console.log(pBook.contactArray);
  var getContact = [];
  var i = 0;
  for (const key in pBook.contactArray) {
    if (pBook.contactArray[key].id == indx) {
      var newContact = pBook.contactArray[key];
      i = parseInt(key);
    }
  }
  
  // console.log(pBook.contactArray);
  var inputElement = document.getElementById("nameDisplay");
  var inputElement1 = document.getElementById("numberDisplay");
  inputElement.value = newContact.name;
  inputElement1.value = newContact.pNumber;
  // pBook.contactArray.splice(i,1)
  deleteContact(pBook.contactArray[i].id)
  // console.log(pBook.contactArray);
}

function updateContactToTable(event) {
  event.preventDefault()
  var inputElement = document.getElementById("nameDisplay").value;
  var inputElement1 = document.getElementById("numberDisplay").value;
  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  const contactDetail = new Contact(timestamp, inputElement, inputElement1);
  pBook.contactArray.push(contactDetail)
  // pBook.addContact(contactDetail);
  displayContact();
}
