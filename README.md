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

| Cas | Déclaration                       | Aussi providé dans un `providers[]` ? | Consommé (`inject()`) ? | Dans le dist ? | Comportement d'instanciation ?                                             |
| --- | --------------------------------- | ------------------------------------- | ----------------------- | -------------: | -------------------------------------------------------------------------- |
| 1   | `@Injectable(providedIn: 'root')` | non                                   | oui                     |             ✅ | app-wide singleton                                                         |
| 2   | `@Injectable(providedIn: 'root')` | non                                   | non                     |             ❌ | N/A                                                                        |
| 3   | `@Injectable()`                   | `@Component.providers`                | oui                     |             ✅ | instancié avec chaque composant                                            |
| 4   | `@Injectable()`                   | `Route.providers`                     | oui                     |             ✅ | 1 instance créée pour la route (=singleton dans le sous-arbre d'injection) |

## Todo

Spoilers : <details><summary>❔</summary>app-wide singleton</details>
