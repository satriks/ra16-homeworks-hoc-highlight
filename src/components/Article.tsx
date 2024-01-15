interface Props{
    type: string,
    title: string,
    views: string
}

export default function Article(props : Props) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
}