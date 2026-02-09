import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import { SaveData, SaveUrl } from "../store/UrlSaver";
import { useRootDispatch } from "../main";
interface PotitionListProps {
    data: unknown
    onClick?: (url: string) => void
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

export const PetitionList: React.FC<PotitionListProps> = ({ onClick }) => {
    const dispatch = useRootDispatch()
    const [url, setUrl] = useState(petitionItem[0].url)
    const [getData, setGetData] = useState(() => petitionItem[0].getData)
    const reg = /.+\/(.+)/
    const pList = petitionItem.map((item) =>
        <button type="button" className="btn btn-link"
            onClick={() => {
                setUrl(item.url);
                setGetData(() => item.getData);
                onClick?.(item.url); //樹狀傳遞
                dispatch(SaveUrl(item.url)); //Redux傳遞
            }}>
            {reg.exec(item.url)?.[1]}
        </button>
    )
    const [data, setData] = useState<unknown>()
    useEffect(() => {
        (async () => {
            const response = await fetch(url)
            const data: object | object[] = await response.json()
            setData(getData(data))
            dispatch(SaveData(getData(data)))
        })()
    }, [url, getData, dispatch])

    const FirstTenData = (data?: unknown) => {
        const result = []
        for (let index = 0; index < 10; index++) {
            result.push(data ? (data as object[])[index] : [])
        }
        return result
    }

    // // TODO: for functional programming teaching
    // const setMinusMarkIfEmpty = ({ data, columns }: { data: any[]; columns: string[] }) => {
    //     return {
    //         data: data.map(item => {
    //             return columns.reduce((acc, column) => {
    //                 return {
    //                     ...acc,
    //                     [column]: typeof (item[column] as any) === undefined || typeof (item[column] as any) === null || (item[column] as any) === "" ? "-" : item[column]
    //                 }
    //             }, {} as Record<string, any>)
    //         }),
    //         columns: columns
    //     }
    // }


    // const getLast25Chars = ({ data, columns }: { data: any[]; columns: string[] }) =>
    // ({
    //     data: data.map(item =>
    //         columns.reduce((acc, column) => ({ ...acc, [column]: item[(column) as any].slice(-25) })
    //             , {} as Record<string, any>)
    //     ),
    //     columns: columns
    // })

    // const CalculateData = ({ data, columns }: { data: any[]; columns: string[] }) =>
    // ({
    //     data: data.map(item =>
    //         columns.reduce((acc, column) => {
    //             let result = typeof (item[column] as any) === undefined || typeof (item[column] as any) === null || (item[column] as any) === "" ? "-" : item[column]
    //             result = result.slice(-25)
    //             return { ...acc, [column]: result }
    //         }
    //             , {} as Record<string, any>)
    //     ),
    //     columns: columns
    // })


    // const mockData: TableProps<{ "年份": string; "防疫用藥": string; "預防性用藥": string }> = {
    //     columns: ["年份", "防疫用藥", "預防性用藥"],
    //     data: FirstTenData(data) as any
    // }

    const mockData = {
        columns: data ? Object.keys((data as object[])[0])
            ?.filter((_, index) => index < 3) : [],
        data: FirstTenData(data)
    } as TableProps<Record<string, unknown>>

    //空的-
    //太多最後25


    const tableHead =
        <tr>
            {mockData?.columns?.map((item) =>
                <th>{item}</th>
            )}
        </tr>

    const tableBody = mockData?.data?.map((item) => {
        const dataByCondition = (item: Record<string, unknown>, column: string) => {
            // console.log(typeof item[(column) as any], item[(column) as any])
            if (item[column] === undefined || item[column] === null || item[column] === "") return "-"
            return (item[(column)] as string).slice(-25)
        }
        return (
            <tr>
                {mockData?.columns?.map((column) =>
                    <td>{dataByCondition(item, column)}</td>
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