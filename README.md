# ProvidedInRootBehavior

- branche `main`
  - déclaration service : `@Injectable(providedIn: 'root')`
  - providers : N/A
  - => chunking : OK
  - => instanciation : véritable singleton app-wide
- branche `provide-in-component-metadata`
  - déclaration service : `@Injectable()`
  - providers : `@Component.providers`
  - => chunking : OK
  - => instanciation : 1 instance créée pour chaque instance du composant (à chaque navigation)
- branche `provide-in-lazy-route`
  - déclaration service : `@Injectable()`
  - providers : `Routes.providers`
  - => chunking OK
  - => instanciation : 1 instance "singleton" créée par route (=sous-arbre d'injection)
