import Video from "./Video";
import Article from "./Article";
import { v4 } from "uuid"
import ModificatePost from "./ModificatePost";


interface Props{
    list : {type: string, views: number, url? : string, title?: string}[]
}

export default function List(props : Props) {
    
    return props.list.map(item => {
        switch (item.type) {
            case 'video': {
                const ModPost = ModificatePost(Video, item.views)
                return (
                    <ModPost {...item} key={v4()} />
                );
            }

            case 'article': {
                const ModPost = ModificatePost(Article, item.views)
                return (
                    <ModPost {...item} key={v4()} />
                );
            }
        }
    });
}