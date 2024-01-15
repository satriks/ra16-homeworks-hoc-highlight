interface Props{
    children: any
}

export default function New(props : Props) {
    
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
}