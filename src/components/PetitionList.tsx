import { useEffect, useState, type JSX, type JSXElementConstructor } from "react"
import { data, useActionData } from "react-router"
import Table from 'react-bootstrap/Table';
interface PotitionListProps {
    title?: string
    onClick?: () => void
}

interface TableProps<T extends object> {
    columns: (keyof T)[]
    data: T[]
}

const mockData: TableProps<{ "屬性": number; "薩爾達": number; "評價": number; "長度": number; 123: number }> = {
    columns: ["屬性", "薩爾達", "評價", "長度", 123],
    data: [
        { "屬性": 1, "薩爾達": 2, "評價": 3, "長度": 4, 123: 123 },
        { "屬性": 4, "薩爾達": 3, "評價": 2, "長度": 1, 123: 123 },
        { "屬性": 1, "薩爾達": 2, "評價": 4, "長度": 3, 123: 123 },
        { "屬性": 1, "薩爾達": 3, "評價": 2, "長度": 4, 123: 123 },
    ]
}

const petitionItem = [
    {
        url: 'https://soa.tainan.gov.tw/Api/Service/Get/3a6a5741-b4f1-4db5-a5ce-a08ffc334a11',
        getData: (item: object) => "data" in item ? item.data : []
    },
    {
        url: 'https://soa.tainan.gov.tw/Api/Service/Get/151f1365-a992-447f-a0bb-fb6c90bd7610',
        getData: (item: object) => "data" in item ? item.data : []
    },
    {
        url: 'https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=KONI7prP3jgu&IsTransData=1',
        getData: (item: unknown) => item
    }
]
export const PetitionList: React.FC<PotitionListProps> = ({ title, onClick }) => {
    const pItem = petitionItem
    const [url, setUrl] = useState(pItem[0].url)
    const [getData, setGetData] = useState(() => pItem[0].getData)
    const reg = /.+\/(.+)/
    const pList = pItem.map((item) =>
        <button type="button" className="btn btn-link"
            onClick={() => { setUrl(item.url), setGetData(() => item.getData) }}>
            {reg.exec(item.url)?.[1]}
        </button>
    )
    const [data, setData] = useState<unknown>()
    useEffect(() => {
        (async () => {
            const response = await fetch(url)
            const data: object | object[] = await response.json()
            setData(getData(data))
        })()
    }, [url])

    const tableHead =
        <tr>
            {mockData.columns.map((item) =>
                <th>{item}</th>
            )}
        </tr>

    const tableBody = mockData.data.map((item) => {
        return (
            <tr>
                {mockData.columns.map((column) =>
                    <td>{item[column]}</td>
                )}
            </tr>)
    })




    return (
        <div className="d-flex flex-column">
            {pList}
            <Table bordered hover>
                <thead>
                    {tableHead}
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </Table>
            <div className="d-flex pt-4">
                {JSON.stringify(data)}
            </div>
        </div>
    )
}

