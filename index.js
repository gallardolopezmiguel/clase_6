examen1 = parseFloat(process.argv[2]);
examen2 = parseFloat(process.argv[3]);
examen3 = parseFloat(process.argv[4]);
totalexamenes = (examen1 + examen2 + examen3) / 3;

promedio = totalexamenes;

if(totalexamenes > 8.5) {
    console.log("!!Premio perro");
} else {
    console.log("!!castigadoooo!!!!!");
}