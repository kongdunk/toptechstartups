import { useEffect, useState } from "react"
import record from '../data/topTechStartUps.json'

export default function Info(){
    
    return(
        <>
            <div>
                {
                    record.slice(0,500).map((e) => <div>
                        {e.company_name}
                        {e.website}
                    </div>
                    )
                }
            </div>
        </>
    )
}