import React from 'react'

export const MyComponent = () =>{

    const name = "Inés"
    const repository = "https://github.com/inesmariao/component-practice";

    const student ={
        name: " Vale",
        lastName: "Ovalle", 
        mobile: "300687680",
        linkedinProfile:"https://www.linkedin.com/in/laura-ovalle-8bb495252/"
    }

    console.log(student);


    return(
        <div>
            <hr />
            <p>Este es mi primer componente</p>
            <h2>Temas de react</h2>
            <ul>
                <li>Componentes</li>
                <li>Eventos</li>
                <li>Estados - Hooks</li>
                <li>Comunicación</li>
            </ul>
            <hr />
            <h2>
                Datos del Docente
            </h2>
            <p>Nombre: {name}</p>
            <p>Repositorio: {repository}</p>
            <hr />
            <h2>Datos del estudiante</h2>
            <p>Nombre: {student.name}</p>
            <p>Apellido: {student.lastName}</p>
            <p>Celular: {student.mobile}</p>
            <p>Perfil Linkedin: {student.linkedinProfile}</p>

        </div>
    )
}