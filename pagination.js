/*const heading=document.getElementsByTagName('h1')
console.log(heading[0].innerText);
console.log(heading[1].innerText);

const content=document.getElementsByTagName('p')
console.log(content[0].innerText)

const message=document.getElementsByClassName('message');
console.log(message[0].innerText)
console.log(message[1].innerText)

const signup=document.getElementById('signup')
console.log(signup.innerText)

const messageAll=document.querySelectorAll('.message')
console.log(messageAll[1].innerText)

const signup1=document.querySelector('#signup')
console.log(signup1.innerText)

const heading2=document.querySelector("h1");
const headingAll=document.querySelectorAll("h1");
console.log(heading2.innerText)
console.log(headingAll[0].innerText);
console.log(headingAll[1].innerText);
headingAll[0].innerText="Nice Class!!!"
signup1.innerText="create user"
signup1.setAttribute('class','red');
const username=document.querySelector(".user-name");
username.setAttribute('placeholder',"enter your name")
const students=document.querySelector(".students")
console.log(students.innerText)
console.log(students.innerHTML)

const h2=document.createElement('h2');
h2.innerText="Germany";*/
/*const subHeading=document.createElement('h2');
subHeading.innerText="Srimayai";
document.body.append(subHeading);
subHeading.setAttribute('class','text-color')
subHeading.style.color='red'
subHeading.style.fontSize='50px'*/

/*const img=document.createElement('img');
img.setAttribute('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII=')
const h2=document.createElement('h2');
h2.innerText="Germany";
const p1=document.createElement('p');
p1.innerText="Population:81,770,900";
const p2=document.createElement('p');
p2.innerText="Region:Europe";
const p3=document.createElement('p');
p3.innerText="Capital:Berlin";

const container=document.createElement('div')
container.append(img,h2,p1,p2,p3)
document.body.append(container)
document.body.style.background='whitesmoke';
container.style.background='white';
container.style.padding='10px';
container.style.borderRadius='5px';
container.style.boxShadow='3px 3px 10px 0px rgba(50,50,0.1)';
container.style.width='18rem'
container.style.overflow='hidden'
*/

const infoContainer=document.createElement('div');
infoContainer.innerHTML=`
  <a href="#">&laquo;</a>
  <a href="href1.js">1</a>
  <a href="href2.js">2</a>
  <a href="href3.js">3</a>
  <a href="href4.js">4</a>
  <a href="href5.js">5</a>
  <a href="href6.js">6</a>
  <a href="#">&raquo;</a>
`
document.body.append(infoContainer);



