interface Item {
	label: string;
	type: string;
}

interface FormTabProps {
	formData: Item[];
	title?: string;
}

const FormTab: React.FC<FormTabProps> = ({ formData, title }) => {
	const buttons = formData.filter(item => item.type === 'button');
	const inputs = formData.filter(item => item.type !== 'button');

	const capitalizeLabel = (label: string) => {
		return label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
	};

	return (
		<div>
			<h2>Form</h2>
			{title && <h3>{title}</h3>}
			<form>
				{inputs.map((field, index) => (
					<div key={index} className="form-field">
						<label className="label">{capitalizeLabel(field.label)}</label>
						<div className="input-container">
							{field.type === 'string' && <input type="text" />}
							{field.type === 'date' && <input type="date" />}
							{field.type === 'numeric' && <input type="number" />}
							{field.type === 'multi-line' && <textarea />}
							{field.type === 'boolean' && <input type="checkbox" />}
							{field.type === 'enum' && <input type="radio" />}
						</div>
					</div>
				))}
				<div className="buttons-form">
					{buttons.map((field, index) => (
						<div key={index}>
							<button>{field.label}</button>
						</div>
					))}
				</div>
			</form>
		</div>
	);
};

export default FormTab;
