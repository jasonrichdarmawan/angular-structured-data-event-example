# How to deploy to firebase

```
npm run build-library
npx ng build --configuration production
npx firebase-tools deploy
```

# Folder Structure

1. `src` is Angular Application.
2. `projects/common/pipes` is an Angular Library.
3. `projects/features/experience` is an Angular Library.
4. `projects/features/event` is an Angular Application.

# Clean Architecture

Clean Architecture is a way to let back end do their stuff and front end also do their own stuff.
1. The data layer can change as the back end like.

GetEventByIdResponseBody.ts
```
export interface GetEventByIdResponseBody {
    id?: string
    name?: string

    description?: string
}
```

2. The domain layer can change as the front end like.

EventData.ts
```
export interface EventData {
    id: string;
    name: string;
}
```

notice that the domain layer:
1. do not need the `description` key.
2. the keys do not have `optional` value. 

   this is mandatory. this is because what is inside `EvenData` must be exist and not be optional, or expected when things do not go wrong, it will be used for rendering the presentation layer or to execute the business logic. 
   
   although things can happen i.e. server do not response, etc. it's the front end job to handle such cases.

event-page.component.ts
```
export class EventPageComponent implements OnInit {
  event?: EventData;

  constructor(
    route: ActivatedRoute,
    getEventById: GetEventByIdService,
  ) {
    let id = route.snapshot.paramMap.get("id") ?? undefined;

    if (id == undefined) { return }

    this.event = getEventById.call(id)
  }

  ngOnInit(): void {
  }

}
```

# topoint-org

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
