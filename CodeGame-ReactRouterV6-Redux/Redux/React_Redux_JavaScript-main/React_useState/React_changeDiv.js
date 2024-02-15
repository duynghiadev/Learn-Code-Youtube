export default function Box() {

    const [style, setStyle] = useState({backgroundColor: "green",
    height: 200,
    width: 500})

    const changed = (backgroundColor, height, width) => {
        setStyle({
            backgroundColor,
            height,
            width
        })
    }

    return(
        <div>
        <div style={style}>
        </div>
            <button onClick={() => changed("orange", 200, 300)}>Orange!</button>
            <button onClick={() => changed("blue", 200, 500)}>Blue</button>
            <button onClick={() => changed("green", 100, 700)}>Green</button>
        </div>
    )

}
