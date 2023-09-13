
const email = 'royerm43@gmail.com';
const title = 'Sequence Alignment';
const resultType = 'aln-clustal';
//const sequence
const EF = [">Test","ATACACATACAG"];
const LS = [">LsNSAr/OSBS_WT","ATGAGAATAGAAGAGATTACAATTAGACATTTAAAAATGCCAATGAAAGCACCGTTCACAACGAGCTTTGGTACTGTTGCTGAAAAAGAGCTATTGCTTTTAGAGGTGAAGGATGCAAGTGGCACGATTGGATGGGGAGAGACAGTTGCTTTTGTAGCACCGTGGTATACAGAGGAAACACTAAAAACGACGTGGCATATGTTAGAGGACTTTTTAATGCCCGCTTTGCTACATAAAGACATTGCACATCCGGATGAGGTTAGTGCCTTGTTCGCCACTATTCGGCGTAATGGTATGGCTAAAGCCTCGATTGAAGGTGCAGTGTGGGACATTTATGCTCAGCAAACAAAGCAATCTCTTGCACATGCATTAGGTGGAAGCAAGGACCTTATTGATGTAGGCATTAGTGTAGGTATTCAATCTAGTACGGATAAGCTATTAGAGCTAATAAAGGTCTATGAGGAAAAAGGCTATAAACGGGTAAAAGTAAAAATAAAACCGGGCTACGATGTCGAAGTCATTCGTGCTATTCGTGCTGCATTTCCTAATCTGCCTTTAATGGCGGATGCAAACTCAGCGTATACATTAAATGACATTGAAGTGTTACAACAGTTGGATGCATTTAATCTGCTAATGATTGAGCAACCACTTGCAGCAGACGATATTATCGACCATGCCAAGCTTCAAAAACAGTTGAAAACACCAATCTGCTTAGATGAAAGCATTACATCATTAGAGGATGCAAGGAAAGCAATTGAGCTAGGTAGCTGCGGTGTAATTAATATTAAAATTGGACGTGTAGGCGGCATAACAGAAGCCAAAAAAATACATGACTATTGCCAACAACATGCTATTCCTGTTTGGTGTGGGGGCATGTTAGAAGCGGGAATCGGACGAGCACATAATATCGCTTTAACAGCGCTTTCTAATTTTGTTCTACCGGGTGATACCGCAGGTTCTAGCCATTATTGGTACGAGGATATTGTAACACCCGAAATCGTAGTGGAAGATGGGCATATTCGTGTGCCACAGAGCATCGGAATTGGCTATCAGCCGAATTTAGAAATTATTGATAAATTAACAATTAGCAAAAAAGTCTATAAAGGG"];
const RC = [">RcNSAROSBS","ATGAAGATCGAGTCGATCACATTGCACCACATCGACATGCCGCTGGTTGCGCCCTTCGAGACGAGTTTCGGGCGCGAAACGCACCGTCCATGCATTCTGATCGAAATGCGCGCCGACGGATTAACCGGATGGGGCGAATGTGTTGCCGGCGCGGGTCCCTGGTATGCGTATGAGACCATAGGAACCGCCTGGCACATCATCAGCGACTTCCTCGCGCCCATGATCGTCGGGCAAGAGATCACCGAACCGATAGGGATCGTCGAACGCTTCGCGTCGGTGCGCGGGCATCCCATGGCGCGCGCCGCCGTCGAAGCCGCTTTCTGGGATCTCTATGCGCAAGCGCGCGGTGTCTCACTGGCGCGTCTCATCGGCGCTACCCGTGATCGTGTGACAGTTGGCGTCAGTGTAGGCATCGAGTTAACGCTCGAGGCGCAACTGGCGAGCATCGAGCGGTTTGTTGCAGCCGGGTATGCGCGCATCAAACTGAAGATCAAGCCAGGATGGGACGTTGCCGTGGTGCGCGCAGTGCGCGAACGCTGGCCCGATATTGCATTGCAGGTGGACGCCAACTCGGCGTACACCCCGGACGATGCACCGATCTTTCGTGAATTGGACGAGATGAACCTGTTGTTGATCGAACAGCCGCTCCACCACGACGATATTGTGGACCACGCGCGATTACAAGCGCAAATAAGCACACCCATCTGCCTGGACGAGAGCATTCACTCCCCAGAGCACGCGCGTTGGGCGCTCGACATCGACGCCTGCCGGGTGATCAACATTAAGATCGGGCGGGTCGGCGGGCTGACTGCCGCGCGCCAGATCCACGACCTGTGCGCCGAACGCGGCGTGCCGGTCTGGTGCGGCGGCATGCTGGAAACCAACGTCGGGCGCGCGGTCAACCTGGCGCTGGCGGCGCTCCCCAACTTCGCGCTACCCGGCGACATCTCAGCATCGGCGCGTTATTATCACCGCGACATCGCCGCGCCCGATTTCGTGCTGAACGACGACTCGACGATCACCGTGCCCGATACACCGGGCACAGGCGTCGCCGTGCTGCCGGAGCGCCTGCGCGACGTGCAGGTGCGTGAGGTGATCATTGGGAAAGGA"];
const LI = [">LiOSBS","ATGTATTTTCAGAAGGCAAGGTTAATTCATGCTGAACTACCGCTTTTGGCGCCGTTTAAAACTAGTTATGGCGAATTGAAAAGCAAAGATTTTTATATTATTGAATTAATAAATGAAGAAGGAATCCACGGATATGGTGAATTAGAAGCATTTCCGTTACCAGATTACACTGAAGAGACACTTAGTTCTGCTATTCTAATCATTAAGGAGCAGCTACTACCTCTCCTCGCTCAAAGAAAGATTCGTAAGCCGGAAGAAATACAGGAGTTATTCAGTTGGATTCAAGGTAATGAGATGGCAAAGGCGGCTGTTGAACTCGCTGTTTGGGATGCTTTTGCTAAAATGGAAAAAAGATCGTTAGCTAAAATGATTGGGGCTACTAAAGAATCTATCAAAGTTGGAGTCAGTATTGGTTTACAACAGAATGTGGAAACTTTACTTCAATTAGTTAATCAATACGTCGATCAGGGCTATGAACGAGTGAAACTAAAAATCGCACCAAACAAAGATATTCAATTTGTTGAAGCTGTTCGTAAAAGTTTTCCAAAACTAAGCTTGATGGCAGACGCGAATTCAGCGTATAATAGAGAAGATTTCTTGTTATTAAAAGAACTAGATCAATATGATTTAGAAATGATTGAGCAACCGTTTGGAACTAAAGATTTTGTGGATCATGCTTGGTTGCAAAAACAATTAAAAACACGAATTTGTTTAGATGAGAATATTAGATCCGTAAAAGACGTAGAGCAAGCGCATAGCATTGGTAGTTGTCGGGCTATTAATTTGAAGCTGGCACGTGTTGGAGGTATGTCATCTGCCCTTAAAATAGCAGAGTACTGCGCGTTAAATGAAATACTAGTTTGGTGTGGGGGAATGCTTGAAGCTGGTGTCGGCAGAGCTCATAACATTGCACTAGCAGCGAGAAACGAGTTTGTTTTTCCAGGGGATATATCTGCCTCGAATCGTTTCTTTGCAGAGGATATTGTAACGCCTGCTTTTGAATTAAATCAAGGTAGACTCAAAGTGCCAACGAACGAAGGCATTGGTGTAACGCTAGATTTAAAAGTATTAAAAAAATACACTAAATCAACAGAAGAAATTTTGCTAAATAAAGGATGGAGC"];
var jobID = '';
var seqAmount = 2;
var seq1 = '';
var seq2 = '';

var test = `ATCACTACGTACGCTAGCA`;
const sequences = [
  `>seq1`,
  `ATCACTACGTACGCTAGCA`,
  `>seq2`,
  `ATCACTACGTACGCTAGCA`,
  '>seq3',
  `${test}`
];

//URL variables
const runURL = 'https://www.ebi.ac.uk/Tools/services/rest/clustalo/run'; //Run the Sequence
const paramURL = 'https://www.ebi.ac.uk/Tools/services/rest/clustalo/parameters';


//Date Function

function createDataPacket(strain){
  const data = new URLSearchParams();
  var sequences = getSeq(strain);
  alert(sequences);
  data.append('email', email);
  data.append('outfmt','clustal');
  data.append('order','aligned');
  data.append('stype','dna');
  data.append('sequence',sequences.join('\n'));
  return data;
}

function reverseComplement(ID){
  var seq = document.getElementById(`Seq:${ID}`).value;
    const complement = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C',
    };
  
    // Convert the input sequence to uppercase
    dnaSequence = seq.toUpperCase();
  
    // Reverse the sequence and calculate the complement
    const reversedComplement = dnaSequence
      .split('')
      .reverse()
      .map((base) => complement[base] || base) // Use the complement or the base itself if not found
      .join('');
      document.getElementById(`Seq:${ID}`).value= reversedComplement;
}

function getSeq(strain){
  var sequence = [];
  var number = document.getElementById("number").value;
  for(i=1;i<=number;i++){
    sequence.push(document.getElementById(`Name:${i}`).value)
    sequence.push(document.getElementById(`Seq:${i}`).value)
  }
  if(strain = "EF"){
    sequence.push(EF);
  }else if(strain = "LS"){
    sequence.push(LS);
  }else if(strain = "LI"){
    sequence.push(LI);
  }else if(strain = "RC"){
    sequence.push(RC);
  }else{
    alert("Something went wrong");
  }
  return sequence;
}

function make(strain){
  const data = new URLSearchParams();
  //var sequences = getSeq(strain);
  alert(sequences);
  data.append('email', email);
  data.append('outfmt','clustal');
  data.append('order','aligned');
  data.append('stype','dna');
  data.append('sequence',sequences.join('\n'));
  alert(typeof sequences)
}
function createBoxes(){
    //Number of Boxes
    var number = document.getElementById("number").value;
    //Creating the Elements
    const seqName = document.createElement("input");
    const space = document.createElement("br");
    const secondSpace = document.createElement("br");
    const seqInput = document.createElement("textarea");
    //change this on the main
    const element = document.getElementById("Boxes");
    const button = document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("value","Reverse Complement");
    button.setAttribute("onclick","reverseComplement(this.id)")
    for(var i = 1;i<=number;i++){
      var cloneButton = button.cloneNode();
      var cloneName = seqName.cloneNode();
      var cloneSpace = space.cloneNode();
      var cloneSpacetw = secondSpace.cloneNode();
      var cloneInput = seqInput.cloneNode();
      //Set ID for clones
      cloneButton.setAttribute("id",`${i}`);
      cloneName.setAttribute("id",`Name:${i}`);
      cloneInput.setAttribute("id",`Seq:${i}`);
      //Set names for nodes
      cloneButton.setAttribute("name","Reverse Complement");
      cloneName.setAttribute("placeholder",`>Sequence Name`);
      cloneInput.setAttribute("placeholder",`ATCGACTAC`);
      element.appendChild(cloneName);
      element.appendChild(cloneSpace);
      element.appendChild(cloneInput);
      element.appendChild(cloneButton);
      element.appendChild(cloneSpacetw);
    } 
}
function addZero(i){
  if(i<10){return "0"+i}else return i;
}
function timeDate(){
  var start = new Date();
  var date = addZero(start.getDate());
  var month = start.getMonth();
  var year = addZero(start.getFullYear());
  var hour = addZero(start.getHours());
  var min = addZero(start.getMinutes());
  var sec = addZero(start.getSeconds());
  addZero();
  var time = `${month+1}/${date}/${year} at ${hour}:${min}:${sec}`;
  return time
}


async function fetchAlignment(strain){
  var data = createDataPacket(strain);
  //GET jobID after sending a request
  alert(typeof data);
  jobID = await axios.post(runURL,data);
  console.log(jobID.data);
  var statusURL = `https://www.ebi.ac.uk/Tools/services/rest/clustalo/status/${jobID.data}`
  //GET status of job
  var status = await axios.get(statusURL);
  status = status.data;
  console.log(status);
  var resultURL = `https://www.ebi.ac.uk/Tools/services/rest/clustalo/result/${jobID.data}/aln-clustal`;
  //Will GET status of job unitl it == FINISHED
  time = timeDate()
  while (status == 'RUNNING' || status == 'QUEUED'){
    if(status == 'RUNNING'){
      document.getElementById('status').textContent = `Status: Running... started ${time}`;
    }else if(status == 'QUEUED'){
      document.getElementById('status').textContent = 'Status: Queued'
    }
    status =  await axios.get(statusURL);
    status = status.data
    console.log(status);
  }
  finished = timeDate();
  document.getElementById('status').textContent = `Status: Finished ${finished}`;
  //GET the results of the job
  axios.get(resultURL).then((Alignment) =>{
    console.log(Alignment.data);
    window.alert(Alignment.data);
  })
}

//start of the code
//fetchAlignment();


