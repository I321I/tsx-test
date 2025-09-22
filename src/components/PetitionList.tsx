import { useEffect } from "react"

interface PotitionListProps {
    title?: string
    onClick?: () => void
}
export const PetitionList: React.FC<PotitionListProps> = ({ title, onClick }) => {
    useEffect(() => {
        (async () => {
            const response = await fetch('https://datacenter.taichung.gov.tw/swagger/OpenData/ccf3a2bd-7caf-4143-9180-70798325b1a2')
            const data = await response.json()
            console.log(data)
        })()
    }, [])
    return (
        <div></div>
    )
}