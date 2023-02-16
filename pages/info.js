import Head from "next/head"
import { useEffect, useState } from "react"
import record from '../data/topTechStartUps.json'

export default function Info(){
    const [displayCount, setDisplayCount] = useState(record.length)
    const [inputValue, setInputValue] = useState(0)
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    useEffect(() => {
        if(displayCount > 133 || displayCount < 0){
            setDisplayCount(133)
        }
    },)
    return(
        <>
            <Head>
                <title>Info</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="listContainer">
                <h1 id="topHeader"> Top Tech Startup Company List </h1>
                <h2> Showing {displayCount} jobs </h2>
                <a href="/  " className='allJobsLink'>back to home</a>
                <input className="numberInput" type="text" placeholder="number of companies to show" onChange={handleChange} />
                <button onClick={() => setDisplayCount(inputValue)}> show </button>
                {
                    record.slice(0,displayCount).map((e) => <div key={e.id} className="listBox">
                        <div>
                            {e.company_name}
                        </div>
                        <a className="companyLink" href={e.website}>
                            {e.website}
                        </a>
                    </div>
                    )
                }
            </div>
        </>
    )
}