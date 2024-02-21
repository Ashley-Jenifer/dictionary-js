var btn = document.getElementById("btn");
var btn_del = document.getElementById("btn_del")

const handleclick = async () => {
    var input = document.getElementById("input").value.trim(); // Trim to remove leading and trailing spaces
    var result = document.getElementById("result");
    var para = document.getElementById("para")

    if(input == "")
    {
        alert("Please enter a word to search")
    }
    else if (!/^[a-zA-Z]+$/.test(input)) {
        alert("Please enter a valid word containing only alphabets.");
        return;
    }
    else{
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
        const data = await response.json();

        // Check if the word exists in the dictionary
        if (data.title && data.title === "No Definitions Found") {
            para.textContent = "No definitions found for the word.";
        } else {
            // Display the definition
            para.textContent = data[0].meanings[0].definitions[0].definition;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        para.textContent = "Error fetching data. Please try again later.";
    }
};
}
const handledelete = () => {
    input.value =""
    para.textContent =""
}