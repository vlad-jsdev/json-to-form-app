import React from 'react';

interface ConfigTabProps {
	onGenerateForm: (config: string) => void;
	setConfigData: (config: string) => void;
	errorShow: string;
	val: string;
}

const ConfigTab: React.FC<ConfigTabProps> = ({ val, onGenerateForm, errorShow, setConfigData }) => {

	const handleGenerateClick = () => {
		onGenerateForm(val);
	};
	const handleChange:  React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		setConfigData(e.target.value)
	}

	return (
		<div>
			<h2>Config</h2>
			<textarea
				rows={10}
				cols={50}
				value={val}
				onChange={handleChange}
			/>
			{errorShow && <h3 className='error-msg'>{errorShow}</h3>}
			<button onClick={handleGenerateClick}>Generate Form</button>
		</div>
	);
};

export default ConfigTab;
