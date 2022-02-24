import './App.css';
import {
  Button
} from "@mui/material"

import {
  postURL
} from './business/actions/'
import Amplify, { Auth } from 'aws-amplify';
import { useState } from 'react';

Amplify.configure({
  API: {
    endpoints: [{
      id: process.env.REACT_APP_AWS_API_ID,
      name: process.env.REACT_APP_AWS_API_NAME,
      endpoint: process.env.REACT_APP_AWS_API_ENDPOINT,
      region: process.env.REACT_APP_AWS_API_REGION
    }]
  },
});

function App() {
  const [url, setURL] = useState("")
  const [shortnerURL, setShortenURL] = useState()
  const onSubmitURL = () => postURL(url).then(setShortenURL)
  return (
    <div className="App">
      <div className="w-full h-full flex">
        <div className="flex flex-1 flex-row justify-center items-center">
          <div className="bg-yellow-300 p-8 rounded flex flex-col items-center gap-4">
            <form>
              <div className="flex flex-col items-center gap-4">
                <input className="w-96 p-4" placeholder='url to short' value={url} onChange={event => setURL(event.target.value)} />
                <Button onClick={onSubmitURL} variant='contained' className='w-24'>Submit</Button>
              </div>
            </form>
            {
              shortnerURL ? <ClickToCopy text={shortnerURL.url} /> : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

const ClickToCopy = ({ text }) => {
  const onClick = () => { navigator.clipboard.writeText(text) }
  return <div onClick={onClick}>
    {text}
  </div>
}

export default App;
