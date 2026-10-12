const STUDENTS = [
    "Paulina Altamiranda", "Mariangel Alvarez", "Neidy Alvarez", "Antonella Angel",
    "Richard Barrios", "Yeraldin Beltran", "Valentina Benavides", "Sofia Bustamante",
    "Maria Caldera ", "Veronica Cantillo", "Celeste Choles", "Santiago Cochero",
    "Fabian Cogollo", "Sharon Gomez", "Gabriela Hoyos", "Danna Jaramillo",
    "Salome Jimenez", "Luz Londoño", "Xiany Lopez", "Santiago Lopez",
    "Leandro Lopez", "Juan Lopez", "Emmanuel Marin", "Valery Mercado",
    "Juan Monroy", "Gabriela Narvaez", "Emmanuel Noriega", "Mateo Ortega",
    "Sally Paez", "Antony Palomino", "Maria Perez", "Sheryll Perneth",
    "Valery Ramirez", "Gabriela Sanchez", "Estiven Santos", "Emiliano Sotomayor",
    "Dulce Torres", "Jhon Vanegas", "Valentina Zapata"
];

function populateStudentsDropdown() {
    const select = document.getElementById('player-name-input');
    if (!select) return;

    // Limpiar todas las opciones existentes excepto la primera ("Select your name...")
    while (select.options.length > 1) {
        select.remove(1);
    }

    // Agregar estudiantes de la lista plana
    STUDENTS.forEach(studentName => {
        const option = document.createElement('option');
        option.value = studentName;
        option.textContent = studentName;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateStudentsDropdown);
