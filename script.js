var btn = document.getElementById("btn");
var btn_del = document.getElementById("btn_del");

const handleclick = async () => {
    var input = document.getElementById("input").value.trim();
    var result = document.getElementById("result");

    if(input == "") {
        alert("Please enter a word to search")
    } else if (!/^[a-zA-Z]+$/.test(input)) {
        alert("Please enter a valid word containing only alphabets.");
        return;
    } else {
        result.textContent = "Loading...";
        setTimeout(async () => {
            try {
                const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
                const data = await response.json();

                if (data.title && data.title === "No Definitions Found") {
                    result.textContent = "No definitions found for the word.";
                } else {    
                    const firstMeaning = data[0].meanings[0];
                    console.log(firstMeaning)
                    const partOfSpeech = firstMeaning.partOfSpeech;
                    const definition1 = firstMeaning.definitions[0].definition;
                    const definition2 = firstMeaning.definitions[1].definition
                    result.textContent = `${input}: ${partOfSpeech} - ${definition1}\n${definition2}`;
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                result.textContent = "Error fetching data. Please try again later.";
            }
        }, 2000); 
    }
};

const handledelete = () => {
    var input = document.getElementById("input");
    input.value = "";
    result.textContent = "Result";
};
