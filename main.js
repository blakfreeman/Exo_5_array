let tabExo = ["String", 'okay' ,30,32,true,];

console.log(tabExo);

console.log(tabExo.length);

tabExo.splice(-1,1);

console.log(tabExo);
//4
tabExo.splice(0,1);

console.log(tabExo);

//5

tabExo.push('text', 'code');

console.log(tabExo);

//6

tabExo.unshift(1,2,3);

console.log(tabExo);


tabExo.reverse();

console.log(tabExo);



// suite

// //1
let x;
let tabExo = ["c11",4,3,x,true];
console.log(tabExo);
//2
console.log(tabExo.length);
//3
//tabExo.splice(-1,1);
tabExo.pop();
console.log(tabExo);
//4
tabExo.shift();
console.log(tabExo);
//5
tabExo.push("ceci","cela");
console.log(tabExo);
//6
tabExo.unshift("1","2","3");
console.log(tabExo);
//7
tabExo.reverse();
console.log(tabExo);
//8
let boiteElias = [];
boiteElias.push("objet1");
boiteElias.push("objet2");
alert(boiteElias);
boiteElias.unshift("objet3");
alert(boiteElias);
boiteElias.unshift("objet4", "objet5", "objet6");
alert(boiteElias);
boiteElias.splice(-3);
alert(boiteElias);
boiteElias.push("objet7");
alert(boiteElias.length);
console.log(boiteElias);
boiteElias.splice(0,2);
console.log(boiteElias);
boiteElias.splice(-2);
alert(boiteElias);