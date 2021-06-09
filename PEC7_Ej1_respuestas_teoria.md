### a) ¿Qué es y cómo funciona el elemento RouterOutlet?

RouterOutlet es una directiva que se encarga de mostrar el componente activo. Es proporcionada por Router Module
 y este instruye a RouterOutlet sobre cuál es el componente activado según la ruta.

### b) ¿Para qué se utilizan las directivas routerLink y routerLinkActive? ¿Existen más directivas relacionadas con el router?

- Routerlink se utiliza para proveer de una mecanismo de navegación. Al hacer click en un elemento que define un routerlink 
se desencadenará un evento de navegación.
  
- RouterLinkActive: Detecta si la ruta actual es la activa y en caso afirmativo añade las clases CSS que se especifican.

- Otras directivas: RouterLinkWithHref y RouterOutlet

### c) ¿Qué diferencias hay entre los servicios Router y ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios? Describe algunos de los métodos más importantes por los que están compuestos.

- Router es el servicio que proporciona la funcionalidad de navegacion
- ActivatedRoute es la información de la ruta que actualmente está activada o se mostrando debido al RouterOutlet


### d) ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular (consulta para ello la documentación oficial de Angular)

Son clases que protegen la activación o desactivación de rutas.

- CanActivate: Define si es posible activar la ruta.
- CanActivateChild: Define si es posible activar las rutas hijas.
- CanDeactivate: Define si es posible desactivar la ruta.
- CanLoad: Define si es posible cargar rutas hijas.

### e) ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy? ( https://angular.io/guide/lazy-loading-ngmodules )

La carga Lazy consiste en cargar los modulos cuando son necesarios. Se carga un módulo inicial, y a medida que se requieren
 componentes y rutas de otros módulos se cargan bajo demanda.

```typescript
const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  }
]
```
Cuando se solicita la ruta `/items` se carga el módulo `ItemsModule`.

### f) ¿Qué es/para qué son útiles los middlewares en el contexto de node.js? ¿Dónde estás usando middlewares en nuestra aplicación?

Son trozos de código que se ejecutan entre una petición y una respuesta.

Por ejemplo las guards (interceptan el acceso a rutas). También interceptores de llamadas http tanto para request como 
responses, por ejemplo para incluir el token de usuario en las llamadas.
