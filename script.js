
const email = 'royerm43@gmail.com';
const title = 'Sequence Alignment';
const resultType = 'aln-clustal';
var jobID = '';

var seq1 = '';
var seq2 = '';


const sequences = [
  '>seq1',
  'ATCACTACGTACGCTAGCA',
  '>seq2',
  'ATCACTACGTACGCTAGCA',
  '>seq3',
  'ATCACTACGTACGCTAGCA'
];

const data = new URLSearchParams();
data.append('email', email);
data.append('outfmt','clustal');
data.append('order','aligned');
data.append('stype','dna');
data.append('sequence',sequences.join('\n'));

//URL variables
const runURL = 'https://www.ebi.ac.uk/Tools/services/rest/clustalo/run'; //Run the Sequence
const paramURL = 'https://www.ebi.ac.uk/Tools/services/rest/clustalo/parameters';

//HTML Functions
document.addEventListener('DOMContentLoaded',function() {
  //Button const
  const EFbutton = document.getElementById('EF');
  const LSbutton = document.getElementById('LS');
  const RCbutton = document.getElementById('RC');
  const LIbutton = document.getElementById('LI');
  //Button Listener that will submit the job
  EFbutton.addEventListener('mouseover', function(){
    myTxt.textContent = 'New Message';
  });
});



async function fetchAlignment(){
  //GET jobID after sending a request
  jobID = await axios.post(runURL,data);
  console.log(jobID.data);
  var statusURL = `https://www.ebi.ac.uk/Tools/services/rest/clustalo/status/${jobID.data}`
  //GET status of job
  var status = await axios.get(statusURL);
  status = status.data;
  console.log(status);
  var resultURL = `https://www.ebi.ac.uk/Tools/services/rest/clustalo/result/${jobID.data}/aln-clustal`;
  //Will GET status of job unitl it == FINISHED
  var time = new Date();
  while (status == 'RUNNING' || status == 'QUEUED'){
    if(status == 'RUNNING'){
      var endTime = new Date();
      var endTimeFix = (endTime-time)/1000;
      document.getElementById('status').textContent = `Status: Running...${(endTimeFix)/1000}s`;
    }else if(status == 'QUEUED'){
      document.getElementById('status').textContent = 'Status: Queued'
    }
    status =  await axios.get(statusURL);
    status = status.data
    console.log(status);
  }
  document.getElementById('status').textContent = 'Status: Finished'
  //GET the results of the job
  axios.get(resultURL).then((Alignment) =>{
    console.log(Alignment.data);
    window.alert(Alignment.data);
  })
}
fetchAlignment();
