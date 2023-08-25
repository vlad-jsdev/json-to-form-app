# JSON Form Generator App

This is a simple React application designed to generate a form based on JSON configuration. The app has two tabs: "Config" and "Form". In the "Config" tab, you can input JSON configuration data, and upon clicking the "Generate Form" button, the corresponding form is generated and displayed in the "Form" tab.

## Features

- **Config Tab:** In this tab, you can input JSON configuration data using a textarea. The configuration should include an array of items, each specifying a label (title) and a type for the form element.

- **Generate Form Button:** Upon clicking the "Generate Form" button in the "Config" tab, the app validates the JSON configuration and generates the form elements accordingly.

- **Form Tab:** The generated form elements are displayed in this tab. The label corresponds to the form field title, and the type determines the type of input to be rendered (e.g., text input, date picker, etc.).

## Project Structure

The project structure follows a simplified approach to keep the codebase concise and focused on the main task. Notable points about the project structure include:

- **Components:** All React components are contained within a single directory without further subdivision. While this structure may not be suitable for larger applications, it suits the simplicity of this project's scope.

- **Styles:** Styles for components are not separated into individual files. Instead, they are embedded directly in the components for simplicity. In a more extensive project, external stylesheets or styled components might be more appropriate.

- **Interfaces and Constants:** Due to the specific nature of this project, separate files for interfaces and constants have not been created. In a larger application, maintaining separate files can enhance code readability and maintainability.

## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the development server with `npm run dev`.
5. Open your browser and go to `http://localhost:5173/` to see the app in action.

## Technologies Used

- React: JavaScript library for building user interfaces.
- react-tabs: Library for creating tabbed interfaces.
- TypeScript: Superset of JavaScript that adds static types.

## Conclusion

This application demonstrates a simplified approach to generating forms based on JSON configuration. While the project structure may not adhere to best practices for larger and more complex applications, it serves its purpose for this focused task.

Feel free to explore and modify the code to better understand React, TypeScript, and working with JSON data in a React application.

## Example

This is the JSON data structure that the application expects as input.

```
  {
	"title": "My Form",
	"items": [
		{
			"label": "LABEl1",
			"type": "enum"
		},
		{
			"label": "LABEl2",
			"type": "multi-line"
		},
		{
			"label": "label3",
			"type": "numeric"
		},
		{
			"label": "label4",
			"type": "string"
		},
		{
			"label": "label5",
			"type": "boolean"
		},
		{
			"label": "label6",
			"type": "date"
		},
		{
			"label": "OK",
			"type": "button"
		}
	]
}
```