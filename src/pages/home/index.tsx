import { Post } from "../../components/post";
import { Sidebar } from "../../components/sidebar";

export function Home() {
    return(
        <div>
            <main className="max-w-6xl my-8 mx-auto px-4 flex items-start">
                <Sidebar/>
        
                <Post/>

       
            </main>
        </div>
   
    )
}