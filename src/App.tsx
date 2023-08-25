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
      const parsedConfig = JSON.parse(config);
      if (!parsedConfig.items) {
        setTab(0);
        showError('Error parsing config JSON, please write valid JSON data');
        return;
      }
      setConfigData(config);
      if (parsedConfig.title && typeof parsedConfig.title === 'string') {
        setTitle(parsedConfig.title);
      }
      else {
        setTitle('');
      }
      setFormData(parsedConfig.items);
      setTab(1);
    } catch (error) {
      console.error('Error parsing config JSON', error);
      showError('Error parsing config JSON, please write valid JSON data');
    }
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
