Este proyecto fue creado con [Create React App](https://github.com/facebookincubator/create-react-app).

### Descripción

Proyecto prueba de lista de contacto, consta de una vista con usuarios, un buscador, un modal que nos permite agregar nuevos usuarios y por último un paginador. 

- Fue construido solamente con React.
- Cada componenten cuenta con CSS individual.
- Se utilizó Axios para los HTTP resquest.


---

### Componentes

Los componentes son funcionales, a excepción del ContactForm que maneja el estado de la data para agregar el nuevo usuario.

Componente | Descripción
--- | ---
**Button.js** | Botón estilizado reusable.
**ContactForm.js** | Se encarga de renderizar un formulario y cargar la data para luego ser enviada a través de Axios.
**ContactList.js** | Recibe los contactos y a través del método map crea los mismos en una tabla.
**Header.js** | Crea el Logo y llama a Search y Button para mostrar la barra de busqueda y el botón añadir contacto.
**Modal.js** | Recibe un children para mostrar dentro del Modal.
**Pagination.js** | Consta de dos botones para la paginación de la lista.
**Search.js** | Permite introducir un input que recibe un prop onChange para que a través del componente padre App se establezca la query para la busqueda en el estado.


---

### Métodos en App.js 

Los siguientes métodos se encargan de manejar la data a través de la aplicación, agregar el contacto, realizar la busqueda, establecer el estado, eliminar al contacto, abrir el modal y manejar el paginado.

Método | Descripción
--- | ---
**componentDidMount** | Llama a  **getInfo**  obtiene el listado de personas desde la API, y los setea en el estado del componente.
**getInfo** | Se encarga de hacer el request a la API para obtener los users, verificando si existe una query para realizar una busqueda.
**ComponentDidUpdate** | Se ejecuta después de que la actualización ocurre para comparar si la query de la busqueda ha cambiado con respecto al prevState y así llamar a getInfo()
**onDeleteUser** | Recibe un id de usuario para eliminarlo a través la llamada Delete de Axios.
**toggleModal** | Alterna entre True o False el Modal en el state para mostrar/cerrarlo.
**onSubmit** | Recibe un nuevo usuario y lo crea a través de un POST de Axios.


---
