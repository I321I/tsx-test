import { useRootSelector } from "../store/StoreType"


export const UrlDataDisplay: React.FC = () => {
    const DataState = useRootSelector((store) => store.UrlReducer.DataState)

    return (
        <div>
            {JSON.stringify(DataState)}
        </div>
    )
}