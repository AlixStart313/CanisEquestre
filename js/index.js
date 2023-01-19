// declarar una variable en js
// const genera una constante
// var y let generar una variable
//$scope= fragmento de codigo (funcions, estructura condicional, repetitiva)
//Scope
function suma() {
  //$scope 1
  const num = 2;
  let num2 = 4;
  var num3 = 5;
  function suma2() {
    //$scope 2
    const num = 3;
    let num2 = 4;
    var num3 = 5;
  }
}

// en ellas si se declara mismo nombre en diferente scope son permitidos
//Var no implementa el $scope, si lo declcaro en un archivo no lo puedo
//volver a declarar  en un #scope diferente, desde egmascript  se aconseja no usar Var
//El $sCope nos ayudata a evitar crear variable sque no se ocuparan

//funciones

//funcion  primitiva
//recibira dos datos y los va a retornar
function suma(num1, num2) {
  return num1 + num2;
}

//funcion constante
const suma = function (num1, num2) {
  return num1 + num2;
};

// funcion flecha
//tiene un return implicito siempre que no sean mas de dos lineas, osea solo una
//mientras menos proceso hagas, mejor sera tu codigo
//=> ese caracter se llama funcion lambda
const suma = () => num1 + num2;

// no se recomienda usar js pru, es mejor usar un framework js 
//ocupar inner html esta mal, de preferencia no usarlo


//Template String

``

const name= "liss"
const sur="fuentes"
const last="Figueroa"
const full=name+" "+sur+" "+last
const nameFull=`${name} ${sur} ${last}`


//objetos en js
const person={
    name:"liss",
    last:"Fuentes",
    surn:""
}

//funcion autoejecutable o anonima
(()=>{
    const name=person.name.toString();
    const name2=`${person.name} ${person.last?person.last:""}`
})()

// Arreglos
//
 const roles=[1,2,3{}]

 //ArrayList
 const roles2=[{
    key:"Admin",
    name:"SuperAdmin",
 }
 {
    key:"user",
    name:"usuario"
 }
]

 // lista
 const roles3={}


//prototipes de los arrays metodos de la clas array
 //push,splice,indexOf, find, filter,map,foreach,leng

 roles2.forEach((element,index)=>{console.log(element.name)});

 for (let i=0;i<=roles.length;i++){
    console.log(roles[i].name);
 }


  while(){

  }


 do{}while();


 //desestructuracion  de objetos
 const person2={
    name:"Erick",
    age:24,
    Addres:{
        street:"barona",
        number:29,
    }
 }
 console.log(person2.name);
 console.log(person2.Addres.street);

 const{name,Addres:{street}}=person2
 console.log(street);
