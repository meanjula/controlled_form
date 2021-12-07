## Controlled Form App

This is the project created using create react app to learn react components,controlled form and conditional rendering.

### components Used

#### Form

form data is updated based on user input which are handled by setstate in formHandler function. Overall data is collected and submiited by clicking submit button which trigger the popup handler and makes it true and finally shows the popup box.

#### Popup

Popup component receive all the updated data from formHandler(usestate) as props and display it on popup box.

#### View

View also gets user input data as props and shows it in the browser as notepad which is achieved with some css tricks.

#### Json server

- create db.json file at root level

- install json server

```shell
npm install json-server --save-dev
```

- only for development environment so needed in dev dependencies
  - edit script and include
  ```shell
  "server":"json-server -p3001 --watch db.json"
  ```
- start the server

```shell
http://localhost:3001/notes
```

- install axios for fetching and posting data

#### Notes

Áll backend data inside json server are displayed here.

## Technologies used

- Reactjs
- ReactDom
- Axios
- JsonServer

## Screenshot

![screenshot of controlled form in large screen](./images/screenshot.png)

## Sources

- [Reactjs documentation](https://reactjs.org/tutorial/tutorial.html)
- [Json server](https://github.com/typicode/json-server)

## Authors and acknowledgment

Anjula Timsina

- [GitHub](https://github.com/meanjula)
- [linkedIn](https://www.linkedin.com/in/meanjula/)
