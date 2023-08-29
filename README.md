# express-mvc-gene

**Express MVC Generator** is a Node.js library that allows you to quickly set up a new Express.js MVC application using a pre-configured scaffold. It provides a streamlined way to create the basic structure for your project, including controllers, models, routes, views, utilities, and more.

## Installation

You can install the `express-mvc-gene` library globally using npm:

```
npm install -g express-mvc-gene
```
## Usage
After installing the library, you can use the express-mvc-gen command to create a new Express.js MVC application template in your current working directory:
    
 ```
express-mvc-gen create MyExpressApp
```
This command will set up the basic project structure, including controllers, models, routes, views, utilities, and public assets.

## Project Structure
The generated project structure will follow the MVC architecture and include the following directories:

controllers/: Controllers for handling route logic.
models/: Models for interacting with the database.
public/: Public assets such as CSS, JavaScript, and images.
routes/: Route definitions for the Express.js application.
util/: Utility functions or modules.
views/: Pug templates for rendering HTML.
## Getting Started
1. Install the express-mvc-generator library globally as shown above.
2. Create a new Express.js MVC application template in your desired directory:
    ```
    express-mvc-gen create MyExpressApp
    ```
3. Navigate into the newly created project directory:
    ```
    cd MyExpressApp
    ```
4. Start customizing your application by adding routes, controllers, models, views, and more.

## Contributions
Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request on our GitHub repository.

## License
This library is released under the MIT License. See the LICENSE file for more details.

For more information and documentation, visit the GitHub repository.

Author: Toumi Meriem.
