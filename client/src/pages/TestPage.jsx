
// function ReadRemoteFile() {
//   const { readRemoteFile } = usePapaParse();

//   const handleReadRemoteFile = () => {
//     readRemoteFile('../../../../../backend_temp/bb_data/10May2021_filtered_bounds.csv', {
//       complete: (results) => {
//         console.log('---------------------------');
//         console.log('Results:', results);
//         console.log('---------------------------');
//       },
//     });
//   };

//   return <button onClick={() => handleReadRemoteFile()}>readRemoteFile</button>;
// }

import data from "/Users/nicoleyap/Documents/GitHub/FRDC/backend_temp/bb_data_json/18Dec2020_filtered_bounds.json";

export default function TestPage() {
  const entries = Object.entries(data);

  return (
    <div>
      {entries.map((entry, index) => {
        const [key, value] = entry;
        return (
          <div key={index}>
            <p>{`${key}: ${JSON.stringify(value)}`}</p>
          </div>
        );
      })}
    </div>
  );
}
