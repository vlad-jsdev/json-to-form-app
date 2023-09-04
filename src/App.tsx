import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ConfigTab from './ConfigTab';
import FormTab from './FormTab';

interface Field {
  label: string;
  type: string;
}

function App() {
  const [formData, setFormData] = useState<Field[]>([]);
  const [title, setTitle] = useState<string>('');
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [configData, setConfigData] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const setTab = (num: number) => {
    setTabIndex(num);
  };

  const showError = (msg: string) => {
    setErrorMsg(msg);
    setTimeout(() => setErrorMsg(''), 2000); // Clear error message after 2 seconds
  };

  const handleGenerateForm = (config: string) => {
    try {
      const parsedConfig = parseJSON(config);

      if (!parsedConfig) {
        showError('Invalid JSON format. Please enter valid JSON data.');
        return;
      }

      if (!parsedConfig.items) {
        handleConfigError('JSON does not contain "items" property. Please check your JSON data.');
      } else {
        setConfigData(config);
        setTitle(parsedConfig.title || '');
        setFormData(parsedConfig.items);
        setTab(1);
      }
    } catch (error) {
      console.error('Error parsing config JSON', error);
      showError('Error parsing config JSON. Please write valid JSON data.');
    }
  };

  const parseJSON = (jsonString: string) => {
    try {
      return JSON.parse(jsonString);
    } catch {
      return null;
    }
  };

  const handleConfigError = (errorMessage: string) => {
    showError(errorMessage);
    setTab(0); // Set tab to 0 in case of a config error
  };



  return (
    <Tabs selectedIndex={tabIndex} onSelect={setTab}>
      <TabList>
        <Tab>Config</Tab>
        <Tab>Form</Tab>
      </TabList>

      <TabPanel>
        <ConfigTab
          val={configData}
          onGenerateForm={handleGenerateForm}
          setConfigData={setConfigData}
          errorShow={errorMsg}
        />
      </TabPanel>
      <TabPanel>
        <FormTab formData={formData} title={title} />
      </TabPanel>
    </Tabs>
  );
}

export default App;
