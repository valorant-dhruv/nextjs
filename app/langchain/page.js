"use client";

import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { useState } from "react";
import styles from "./page.module.css"
import { LLMChain } from "langchain/chains";

// console.log(process.env)
//Now that we have the api key accessible as an environment variable let us create the instance of the model
const model = new OpenAI({ openAIApiKey:"Api key here", temperature: 0.9 });

//Creating a prompt to call the LLM in this case the Chatgpt
const template = "Footballer {name} plays for which club? Give just the name of the club nothing else";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["name"],
});

//The chain creates a prompt and then sends its to LLM as well
const chain = new LLMChain({ llm: model, prompt: prompt });



export default function Langchain()
{
    let [input,setinput]=useState('');

    async function calloninput()
    {
     console.log("The function has been called")
     let result=await chain.call({name:`${input}`});
     console.log(result);
    }

    return(
        <div className={styles.pagecontainer}>
            <h1>Enter your langchain prompt here</h1>
            <input onChange={(e)=>
            {
                setinput(e.target.value)
            }} placeholder="Enter the footballer's name"></input>
            <br></br>
            <button onClick={calloninput}>Click to generate result</button>
        </div>
    )
}
