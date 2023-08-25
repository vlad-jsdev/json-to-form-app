import React, { useState } from 'react';

interface ConfigTabProps {
	onGenerateForm: (config: string) => void;
	errorShow: string;
	val: string;
}

const ConfigTab: React.FC<ConfigTabProps> = ({ val, onGenerateForm, errorShow }) => {
	const [config, setConfig] = useState<string>(val);

	const handleGenerateClick = () => {
		onGenerateForm(config);
	};

	return (
		<div>
			<h2>Config</h2>
			<textarea
				rows={10}
				cols={50}
				value={config}
				onChange={(e) => setConfig(e.target.value)}
			/>
			{errorShow && <h3 className='error-msg'>{errorShow}</h3>}
			<button onClick={handleGenerateClick}>Generate Form</button>
		</div>
	);
};

export default ConfigTab;
