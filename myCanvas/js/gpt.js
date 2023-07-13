let myApikey;
const chatGPT = async (messages, parameters = {}) => {
    const apikey = myApikey;
    if (messages[0].constructor === String) return await chatGPT([['user', messages[0]]]);
    messages = messages.map(line => ({ role: line[0], content: line[1].trim() }))
    console.log(1)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apikey}` },
       body: JSON.stringify({ model: 'gpt-3.5-turbo', messages, ...parameters }),
    });
    const data = await response.json();
    if (data?.error?.message) throw new Error(data.error.message);
    return data.choices[0].message.content.trim();
 };

 var outputColor = document.getElementsByClassName("ai-color-options");
 const stateText = document.querySelector("#state-text");

async function showOutput() {
    var inputText = document.getElementById("text").value.trim();
    if(!inputText){
        console.log("텍스트를 입력하세요");
        return;
    }
    inputText = `DESC::${inputText}`
    let response
    try{
       response = await chatGPT([
          ['system', `The assistant's job is to recommend color codes that match what user's describing. Response JSONArray like ["","",...]. Return only JSON Array. Remove pre-text and post-text.`],
          ['user', 'DESC:달콤한 사과'],
          ['assistant', '{"colorlist":["#000000","#000000","#000000","#000000","#000000"]}'],
          ['user', 'DESC::우거진 숲속의 소나무'],
          ['assistant', '{"colorlist":["#000000","#000000","#000000","#000000","#000000"]}'],
          ['user', 'DESC::드넓은 사막의 모래'],
          ['assistant', '{"colorlist":["#000000","#000000","#000000","#000000","#000000"]}'],
          ['user', 'DESC::은하수가 수놓아진 꿈과 같은 밤하늘의 정경'],
          ['assistant', '{"colorlist":["#000000","#000000","#000000","#000000","#000000"]}'],
          ['user', 'DESC::한여름 해안가'],
          ['assistant', '{"colorlist":["#000000","#000000","#000000","#000000","#000000"]}'],
          ['user', inputText],
       ], { temperature: 0.8 })
    }catch(e){
       console.log(e.message);
       
       return;
    }

    console.log(response);
    const color = JSON.parse(response);
    if(color.colorlist[0] == "#000000"){
        console.log("error is detected");
        stateText.innerText="error";
        return;
    }

    //div class="color-option" style="background-color: #ff4d4d;" data-color="#ff4d4d"></div>
    for (let i = 0; i < color.colorlist.length; i++) {
        const recommendColor = document.createElement('div');
        recommendColor.style.backgroundColor = color.colorlist[i];
        recommendColor.setAttribute("data-color", color.colorlist[i]);
        recommendColor.className = "ai-color-option";
        outputColor[0].appendChild(recommendColor);
    }

    aiColorOptions = Array.from(document.querySelectorAll(".ai-color-option"));
    aiColorOptions.forEach(color => color.addEventListener("click", onColorClick));
    stateText.innerText="complete";
}