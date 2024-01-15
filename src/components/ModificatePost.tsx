
import { ReactNode} from "react";
import React from 'react'
import New from "./New";
import Popular from "./Popular";

export default function ModificatePost(Component : React.ComponentType<any>, count : number){



    return class extends React.Component{

        render(): ReactNode {
            
                if (count >= 1000){
                    return <Popular><Component {...this.props}/></Popular>
                }
                if (count <= 100){
                    return <New><Component {...this.props}/></New>
                }

                return <Component {...this.props}/>
                
            
        }
    }

    
    }

