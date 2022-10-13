const funcs = []; // Utilizando uma forma de repetição com uma function e let ao inveis de var.
for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]();
funcs[3]();
funcs[8]();