import reactImage from './assets/react.svg'

export default function Header() {

    return (
        <div>
            <img alt="Wald" src={reactImage}/>
            <h1>MyBlog</h1>
        </div>
    )
}