//Lista de ingredientes//
const ingredientes = [
    "3 ovos",
    "2 xicaras de farinha de trigo",
    "1/2 xicara de óleo",
    "1 xicara de leite",
    "1 colher de sopa de fermento em pó"
];

//Titulo
console.log("📌 Receita do Bolo Simples");
console.log("Ingredientes:");

//exibindo cada ingrediente de lista
ingredientes.forEach((item,index) => {
    console.log(`${index + 1} - ${item}`);
});