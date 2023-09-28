import './App.css'
import Header from "./Header.tsx";
import BlogEntry from "./BlogEntry.tsx";
import Counter from "./Counter.tsx";


export default function App() {

    const text = "Hallo123!!"

    const blogData = [
        {
            id: "123",
            title: "Heute morgen war ich sehr müde.",
            content: "Tagebucheintrag 27.09."
        },
        {
            id: "2345",
            title: "Heute war ich ein Eis essen",
            content: "Tagebucheintrag 28.09."
        },
        {
            id: "asd",
            title: "Heute war ich Pizza essen",
            content: "Tagebucheintrag 29.09."
        },
        {
            id: "abc",
            title: "Heute gibt es Kuchen",
            content: "Tagebucheintrag 30.09."
        }
    ]


    function myCallbackFunction(info: string) {
        console.log(info)
    }

    return (
        <div className={text}>
            <Header/>
            <h2>
                {text}
            </h2>

            {
                blogData.map((blog, index) => <BlogEntry
                    key={blog.id}
                    title={index + blog.title}
                    content={blog.content}
                    myCallback={myCallbackFunction}/>)
            }

            <div>
                <p>
                    My Blog
                </p>
                <button>
                    Press Me
                </button>
            </div>

            <Counter />
        </div>
    )
}