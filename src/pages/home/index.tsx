import { Post } from "../../components/post";
import { Sidebar } from "../../components/sidebar";

export function Home() {
    return(
        <div className="mt-10 ml-20 w-full max-w-6xl flex justify-around">
            <Sidebar/>

            
            <Post/>

            
        </div>
   
    )
}