import { useEffect, useState, type JSX, type JSXElementConstructor, type ReactNode } from "react"
import { data, useActionData } from "react-router"
import Table from 'react-bootstrap/Table';
interface PotitionListProps {

}

interface TableProps<T extends object> {
    columns: (keyof T)[]
    data: T[]
}


// const mockData: TableProps<{ "年份": string; "防疫用藥": string; "預防性用藥": string }> = {
//     columns: ["年份", "防疫用藥", "預防性用藥"],
//     data: [
//         { "年份": "104", "防疫用藥": "亞培松", "預防性用藥": "亞滅寧" },
//         { "年份": "104", "防疫用藥": "撲滅松", "預防性用藥": "第滅寧" },
//         { "年份": "104", "防疫用藥": "", "預防性用藥": "" }
//     ]
// }

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
export const PetitionList: React.FC<PotitionListProps> = () => {
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

    const FirstTenData = (data?: any) => {
        let result = []
        for (let index = 0; index < 10; index++) {
            result.push(data ? data[index] : [])
        }
        return result
    }


    // const mockData: TableProps<{ "年份": string; "防疫用藥": string; "預防性用藥": string }> = {
    //     columns: ["年份", "防疫用藥", "預防性用藥"],
    //     data: FirstTenData(data) as any
    // }

    const mockData = {
        columns: data ? Object.keys((data as Object[])[0])
            ?.filter((_, index) => index < 3) : [],
        data: FirstTenData(data) as any
    } as TableProps<Record<string, any>>

    //空的-
    //太多最後25


    const tableHead =
        <tr>
            {mockData?.columns?.map((item) =>
                <th>{item}</th>
            )}
        </tr>

    const tableBody = mockData?.data?.map((item) => {
        const dataByCondition = (item: any, column: string) => {
            console.log(typeof item[(column) as any], item[(column) as any])
            if (typeof (item[(column) as any]) === undefined || typeof (item[(column) as any]) === null || (item[(column) as any]) === "") return "-"
            return item[(column) as any].slice(-25)
        }
        return (
            <tr>
                {mockData?.columns?.map((column) =>
                    <td>{dataByCondition(item, column) as any}</td>
                )}
                { }
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

