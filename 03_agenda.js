function myAgenda(){
  let agenda = {};

  function insertContact (name) {
    let phone = prompt('Introduce el teléfono del contacto: ');

    if (!isNaN(phone) && phone.length > 0 && phone.length <=11) {
      agenda[name] = phone;      // guarda el objeto(agenda) con clave(name) = valor(numero)
    } else{
      alert('Debes introducir un número válido, máximo 11 dígitos');
    }
  }

  while(true){
    let option = prompt(
      '1. Buscar contacto\n' +
      '2. Insertar contacto\n' +
      '3. Actualizar contacto\n' +
      '4. Eliminar contacto\n' +
      '5. Salir\n' +
      'Seleccione una opción: '
    );

    let name;

    switch (option) {
      case '1':
        name = prompt('Introduce el nombre del contacto a buscar:');
        if (name in agenda){
          alert(`El número de teléfono de ${name} es ${agenda[name]}.`); //accedo al valor de [name]
        }else {
          alert(`El contacto ${name} no existe.`);
        }
        break;
      case '2':
        name  = prompt('Introduce el nombre del contacto a agregar:');
        insertContact(name);
        break;
      case '3':
        name = prompt('Introduce el nombre del contacto a actualizar');
        if (name in agenda) {
          insertContact(name);
        }else {
          alert(`El contacto ${name} no existe`);
        }
        break;
        case '4':
          name = prompt('Introduce el nombre del contacto a eliminar');
          if (name in agenda) {
            delete agenda[name];
          }else {
            alert(`El contacto ${name} no existe`);
          }
          break;
        case '5':
          alert('Saliendo de la agenda.');
          return;
        default:
          alert('Opción no válida. Elige una opción del 1 al 5.')
    }
  }
}

myAgenda();