import './App.css'
import Header from "./Header.tsx";


export default function App() {

    const text = "Hallo123!!"
    let number = 124

    function calculate1plus1() {
        return 1 + 1
    }

    const result = calculate1plus1()


    return (
        <div className="title">
            <Header/>
            <h2>
                {text}
            </h2>
            <div>
                <p>
                    My Blog
                </p>
                <button>
                    Press Me
                </button>
                <Header/>
            </div>
        </div>
    )
}
