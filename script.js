const axios = require('axios');

// Define the API endpoint URL
const url = 'https://www.ebi.ac.uk/Tools/services/rest/clustalo/run';


// Define your input sequences
const sequences = [
  '>seq1',
  'SEQUENCE1',
  '>seq2',
  'SEQUENCE2',
  '>seq3',
  'SEQUENCE3'
];

// Prepare the request payload
const data = new URLSearchParams();
data.append('sequence', sequences.join('\n'));
data.append('email', 'royerm43@gmail.com');
data.append('outfmt', 'clustal_num');

// Make a POST request to the API
axios
  .post(url, data)
  .then((response) => {
    // Extract the aligned sequences from the response
    const alignedSequences = response.data;

    // Print the aligned sequences
    console.log(alignedSequences);
  })
  .catch((error) => {
    console.error('You Fucked Up:', error.message);
  });