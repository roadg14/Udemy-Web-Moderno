function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2; // Esse é o comando ou " || ".
    const comprarTv50 = trabalho1 && trabalho2; // Esse é o comando e " && ".
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor.
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete // Essa é uma negação logica !comprarSorvete.

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // Assim que se criar um OBJETO.
}
console.log(compras(false, false));
console.log(compras(true, false));
console.log(compras(true, true));
console.log(compras(false, true));