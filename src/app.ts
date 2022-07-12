///<reference path="components/project-list.ts" />
///<reference path="components/project-input.ts" />
///<reference path="components/base-component.ts" />

import {ProjectList} from "./components/project-list.js";
import {ProjectInput} from "./components/project-input.js";

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
