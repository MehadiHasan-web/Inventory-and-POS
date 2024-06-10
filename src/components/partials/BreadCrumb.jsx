import { Helmet } from "react-helmet"

function BreadCrumb(props) {
    return (
        <>
            <Helmet>
                <title>{props?.title}</title>
            </Helmet>
            <h1 className="mt-4">Dashboard</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active text-success">{props?.title}</li>
            </ol>
        </>
    )
}

export default BreadCrumb
