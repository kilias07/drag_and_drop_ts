///<reference path="components/project-list.ts" />
///<reference path="components/project-input.ts" />
///<reference path="components/base-component.ts" />

namespace App {
    new ProjectInput();
    new ProjectList('active');
    new ProjectList('finished');
}
