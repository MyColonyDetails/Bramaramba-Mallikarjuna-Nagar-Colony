// Sample data for the table
const laneData = [
    {
      lane: "Lane 1",
      data: [
        { sno: 1, name: "Kiran chenumalla" },
        { sno: 2, name: "Pallerla Sridhar Reddy" },
        { sno: 3, name: "Mounika ravipati" },
        { sno: 4, name: "G Nagendra Kumar" },
        { sno: 5, name: "Kasu Ranadheer Raju" },
        { sno: 6, name: "Gangadhara Srinivas" },
        { sno: 7, name: "Chinna Reddy" },
        { sno: 8, name: "Hari" },
        { sno: 9, name: "Shiva" }
      ]
    },
    {
      lane: "Lane 2",
      data: [
        { sno: 1, name: "Pavan Kumar Pilli" },
        { sno: 2, name: "Mancharla Amarender Reddy" },
        { sno: 3, name: "K Sairam" },
        { sno: 4, name: "Santhosh Katukam" },
        { sno: 5, name: "Gorre Kranthi Kumar" },
        { sno: 6, name: "Santhosam Prabhakar Reddy" },
        { sno: 7, name: "B Mahesh Babu" },
        { sno: 8, name: "Shiva Ram" },
        { sno: 9, name: "Naresh" }
      ]
    },
    {
        lane: "Lane 3",
        data: [
          { sno: 1, name: "Hari Prasad" },
          { sno: 2, name: "Ranjith Kumar" },
          { sno: 3, name: "Sunil" },
          { sno: 4, name: "Jeevan" },
          { sno: 5, name: "Vamshi" },
          { sno: 6, name: "Gopal" },
          { sno: 7, name: "Kiran" },
          { sno: 8, name: "Uday" },
          { sno: 9, name: "Satish" },
          { sno: 10, name: "Santosh" },
          { sno: 11, name: "Praveen" }
        ]
      },
      {
        lane: "Lane 4",
        data: [
          { sno: 1, name: "Srikanth" },
          { sno: 2, name: "Naresh" },
          { sno: 3, name: "Shiva" },
          { sno: 4, name: "Latheef" },
          { sno: 5, name: "Ushakiran" },
          { sno: 6, name: "Anil" },
          { sno: 7, name: "Vishnu" },
          { sno: 8, name: "Raju" },
          { sno: 9, name: "Venkata Siva" },
          { sno: 10, name: "SaiKiran" }
        ]
      },
      {
        lane: "Lane 5",
        data: [
          { sno: 1, name: "Rajashekar" },
          { sno: 2, name: "Sachin" },
          { sno: 3, name: "Kasim" },
          { sno: 4, name: "shiva" }
        ]
      },
      {
        lane: "Lane 7",
        data: [
          { sno: 1, name: "Vijay Bhaskar Reddy" },
          { sno: 2, name: "Imran Azij" },
          { sno: 3, name: "Santosh" },
          { sno: 4, name: "Raju B" },
          { sno: 5, name: "Srikanth" },
          { sno: 6, name: "Rajendar" },
          { sno: 7, name: "Vasu" },
          { sno: 8, name: "Shiva (plot 25)" },
          { sno: 9, name: "Lakshman" },
          { sno: 10, name: "Kiran (plot 24)" },
          { sno: 11, name: "Krishna" },
          { sno: 12, name: "Raju S" },
          { sno: 13, name: "Pankaj Misra" },
          { sno: 14, name: "Shiva(plot 42)" },
          { sno: 15, name: "kiran(plot 41/A)" },
          { sno: 16, name: "Kiran(plot 37)" },
          { sno: 17, name: "Hussain" },
          { sno: 18, name: "Hemanth" },
          { sno: 19, name: "Sudhakar" },
          { sno: 20, name: "Ganesh" }
        ]
      },
      {
        lane: "Lane 8",
        data: [
          { sno: 1, name: "Sai Krishna(plot 44)" },
          { sno: 2, name: "Juwakar Reddy" },
          { sno: 3, name: "Umaphani" },
          { sno: 4, name: "Arun Pandey" },
          { sno: 5, name: "Vikram" },
          { sno: 6, name: "Alex" },
          { sno: 7, name: "Kannaiah" },
          { sno: 8, name: "Narasimha" },
          { sno: 9, name: "Anil" },
          { sno: 10, name: "Ramprasad" },
          { sno: 11, name: "Raghu" },
          { sno: 12, name: "Rakesh" },
          { sno: 13, name: "Shajahan" },
          { sno: 14, name: "Sai Krishna(plot 69)" },
          { sno: 15, name: "Shiva" },
          { sno: 16, name: "Chaitanya" },
          { sno: 17, name: "Naveen" },
          { sno: 18, name: "Venu" },
          { sno: 19, name: "Arujn" },
          { sno: 20, name: "Ganapathi" },
          { sno: 21, name: "Dev Prakash" }
        ]
      },
      {
        lane: "Lane 9",
        data: [
          { sno: 1, name: "Krishnakanth" },
          { sno: 2, name: "Jahindra reddy" },
          { sno: 3, name: "Sandeep" },
          { sno: 4, name: "Shashidhar" },
          { sno: 5, name: "Abdul" },
          { sno: 6, name: "Viswanath" },
          { sno: 7, name: "Krishna(plot95)" },
          { sno: 8, name: "Srinivas Reddy" },
          { sno: 9, name: "Praveen" },
          { sno: 10, name: "Venu Madhav" },
          { sno: 11, name: "Chanakya" }
        ]
      },
      {
        lane: "Lane 10",
        data: [
          { sno: 1, name: "Ramesh" },
          { sno: 2, name: "Praveen(plot 206)" },
          { sno: 3, name: "Janardhan" },
          { sno: 4, name: "Praveen(plot 165)" },
          { sno: 5, name: "karthik voleti" },
          { sno: 6, name: "Prasad" },
          { sno: 7, name: "Lokesh" },
          { sno: 8, name: "Shail Mudiraj" },
          { sno: 9, name: "Thiru" },
          { sno: 10, name: "Mouliswar Reddy" },
          { sno: 11, name: "Vali" }
        ]
      }
    ];
    
    // Function to calculate total members
function getTotalMembers(data) {
    let totalMembers = 0;
    data.forEach(lane => {
        totalMembers += lane.data.length;
    });
    return totalMembers;
}
  
  // Function to generate the table dynamically
  function generateTable(data) {
    const container = document.getElementById('table-container');
    data.forEach(lane => {
      const table = document.createElement('table');
      const caption = document.createElement('caption');
      caption.textContent = lane.lane;
      table.appendChild(caption);
  
      const header = table.createTHead();
      const headerRow = header.insertRow();
      Object.keys(lane.data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize the first letter of the key
        headerRow.appendChild(th);
      });
  
      const body = table.createTBody();
      lane.data.forEach(rowData => {
        const row = body.insertRow();
        Object.values(rowData).forEach(value => {
          const cell = row.insertCell();
          cell.textContent = value;
        });
      });
  
      container.appendChild(table);
    });
        // Calculate total members
        const totalMembers = getTotalMembers(data);
        // Display total members
        const totalMembersElement = document.getElementById('totalMembers');
        totalMembersElement.textContent = `Total members: ${totalMembers}`;
  }
  
  // Call the function to generate the table
  generateTable(laneData);
  
