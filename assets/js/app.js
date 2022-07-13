const tabla = document.getElementById('tbEstablecimientos')
const filas = document.getElementById('totalFilas')
let rowsTabla = tabla.getElementsByTagName('tr').length - 1

console.log(rowsTabla+" filas en la tabla.")
filas.innerHTML = rowsTabla