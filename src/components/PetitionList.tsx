import { useEffect, useState, type JSX, type JSXElementConstructor } from "react"

interface PotitionListProps {
    title?: string
    onClick?: () => void
}
export const PetitionList: React.FC<PotitionListProps> = ({ title, onClick }) => {
    const [url, setUrl] = useState('https://datacenter.taichung.gov.tw/swagger/OpenData/ccf3a2bd-7caf-4143-9180-70798325b1a2')
    const pItem = [
        'https://datacenter.taichung.gov.tw/swagger/OpenData/d78553f2-fcaa-4ea6-9146-6ea8fd5fc5d9',
        'https://datacenter.taichung.gov.tw/swagger/OpenData/2cbcb8ac-99a3-4464-b490-76c55a498564',
        'https://datacenter.taichung.gov.tw/swagger/OpenData/304cad0b-4631-4689-9fb6-409a1154adf4'
    ]
    const pList = pItem.map((item) => 
        <button type="button" className="btn btn-link">{item}</button>
    )
    useEffect(() => {
        (async () => {
            const response = await fetch('https://datacenter.taichung.gov.tw/swagger/OpenData/ccf3a2bd-7caf-4143-9180-70798325b1a2')
            const data = await response.json()
            console.log(data)
        })()
    }, [])
    return (
        <div>
            {pList}
        </div>
    )
}

