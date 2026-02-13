import { type ReactNode } from "react"

type metricContainer = {
    metricTitle: string,
    children: ReactNode
}

const MetricContainer = ({ metricTitle, children }: metricContainer) => {
    return (
        <div>
            <h2 className="metric-title">{metricTitle}</h2>
            {children}
        </div>
    )
}

export default MetricContainer